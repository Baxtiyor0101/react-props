import React from 'react';

class App extends React.Component {
   
    
    state = {
      name:'',
      status:'',
      selected:null,
      list:[
        {id:1,name:'Baxtiyor', status:'student' },
        {id:2, name:'Eshmat', status:'worker'},
        {id:3,  name:'Toshmat', status:'waiter'},
        {id:4 , name:'Toshmat', status:'waiter'}
      ],
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
      const newData = this.state.list.map(element => 
        element.id === this.state.selected
        ? { ...element, name:this.state.name, status:this.state.status}
        : element        
      );
    
      this.setState({list:newData});
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
  ? this.setState({
    list:[
      ...this.state.list,newData
    ],
    // id='',
    // name='',
    // status='',
  })
  : alert('please fill the box');

}




const onSearch = (e)=>{
  const newData = this.state.list.filter((value)=>
  value.name.includes(e.target.value));
  this.setState({list: newData});
};


    
    return(
        
      //Editing
      <div className='containers'>
          <input type="text" onChange={onSearch} /> <br />
        <input type="text" name='id' placeholder='id'  onChange={(e)=>this.setState({id: e.target.value})} />    
        <input type="text" name='name' placeholder='name'  onChange={(e)=>this.setState({name: e.target.value})} />    
        <input type="text" name='status' placeholder='status'  onChange={(e)=>this.setState({status: e.target.value})} /> 
        {<button onClick={onSaves} >Add</button>}   





        <table border='1' style={{borderCollapse: 'collapse' , width:'600px'}}>
          <thead>
            <tr>              
            <th>ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map((value)=>(
              <tr key={value.id}>
                <td>{value.id}</td>
                <td style={{width:'200px'}}>
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
                <td style={{width:'200px'}}>{
                    this.state.selected===value.id ?(
                      <input 
                      value={this.state.status} 
                      type="text"
                      onChange={(e)=>
                      this.setState({status: e.target.value})
                    }/>
                    ):(
                       value.status    
                    )}</td>
                <td>
                  {this.state.selected === value.id ? 
                  (
                    <button onClick={onSave}>save</button>
                    ): (
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
