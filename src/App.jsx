import React from 'react';
import './App.css';
import { Data } from './data.js';
import { Thead } from './AppStyle.js';

class App extends React.Component {
   
    
    state = {
      name:'',
      status:'',
      selected:null,
      list: Data
  };

 
  render(){
  




    //edit
    const onEdit = (value)=>{
       this.setState({
         selected:value.id,
         name:value.name,
         status:value.status,
       });
    };
    const onSave=()=>{
      this.setState({selected:null})
      const newData = Data.map(element => 
        element.id === this.state.selected
        ? { ...element, name:this.state.name, status:this.state.status}
        : element        
      );
       
      this.setState({Data:newData});
    };

  
    
    //delete
    const onDelete=(id)=>{
      let res=this.state.list.filter((item)=>item.id !== id)
      this.setState({
        list:res
      })
    };
    


const onSaves=()=>{
  const newData={
    id:this.state.id,
    name:this.state.name,
    status:this.state.status,
  };

  this.state.id.length && this.state.name.length && this.state.status.length
  ? (this.setState({
    list:[
      ...this.state.list,newData
    ],
    id:'',
    name:'',
    status:'',
  }))
  : alert('please fill the box!')

}
 

const onSearch = (e)=>{
  const newData = Data.filter((value)=>{
    let Name = value.name.toLowerCase();
    let status = value.status.toLowerCase();
    return Name.includes((e.target.value).toLowerCase()) || status.includes((e.target.value).toLowerCase());
  });
  this.setState({list: newData}); 
};


return(
 
         
      //Editing
      <div className='containers'>
        <Box />
        <input placeholder='Search' id='search-by-column' type="text" onChange={onSearch} /> 
        <select onChange={(e)=>this.setState({value:e.target.value})}   name="search-culumn" id="search-column">
          <option value="ID">ID</option>
          <option onClick={onSearch} selected value="Name">Name</option>
          <option value="Status">Status</option>
          <option value="All">All</option>
        </select>
        <label for="search-column" >Choose key</label>
      
        <br />

        <input value={this.state.id} type="text" name='id' placeholder='id'  onChange={(e)=>this.setState({id: e.target.value})} />    
        <input value={this.state.name} type="text" name='name' placeholder='name'  onChange={(e)=>this.setState({name: e.target.value})} />    
        <input value={this.state.status} type="text" name='status' placeholder='status'  onChange={(e)=>this.setState({status: e.target.value})} /> 
        {<button onClick={onSaves} >Add</button>}   


 
        <table className='table' border='1' style={{borderCollapse: 'collapse' , width:'700px'}}>
          <Thead>
            <tr>              
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
            </tr>
          </Thead>

          <tbody>
            {this.state.list.map((value)=>(
              <tr key={value.id}>
                <td>{value.id}</td>
                <td style={{width:'250px'}}>
                  {
                    this.state.selected===value.id ?(
                      <input 
                      value={this.state.name} 
                      type="text"
                      onChange={(e)=>
                        this.setState({name: e.target.value})
                       } 
                      />
                      ):(
                        value.name 

                    )}</td>
                <td style={{width:'250px'}}>{
                    this.state.selected===value.id ?(
                      <input 
                      value={this.state.status} 
                      type="text"
                      onChange={(e)=>
                      this.setState({status: e.target.value})
                    }/>
                    ) : (
                       value.status    
                    )}</td>
                <td>
                  {this.state.selected === value.id ? 
                  (
                    <button onClick={onSave}>save</button>
                    ) : (
                    <button onClick={()=>onEdit(value)}>edit</button>
                     )}
                    {/* //edit button */}
                    <button onClick={()=>onDelete(value.id)}>delete</button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;