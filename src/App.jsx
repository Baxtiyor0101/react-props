import React from 'react';
import  { data }  from './data';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      age:'',
      Address:'',
      status:'',
      nickName:'',
    data:{
      status:'OK',
      dataList:data,
    }
    };
  }

  render() {
      console.log(this.state.data.dataList);
      const onDelete=(id)=>{
          let res=this.state.data.dataList.filter((item)=>item.id !== id)
          this.setState({
            data:{
              ...this.state.data,
              dataList:res
            }
          })
      };

      const onChange=(e)=>{
        this.setState({
          [e.target.name]: e.target.value,
        });
      }
      const onSave=()=>{
        const newData={
          id:Date.now(),
          name:this.state.name,
          age:this.state.age,
          Address:this.state.Address,
          status: this.state.status,
          nickName: this.state.nickName,
        }; 
        this.state.name.length && this.state.status.length
        ? this.setState({
          data:{
            ...this.state.data,
            dataList:
            [...this.state.data.dataList,newData],
          },
          name:'',
          age:'',
          Address:'',
          status:'',
          nickName:'',
        })
        : alert('please fill the box');
      }

    return (
      <>
        <input 
        value={this.state.name}
        onChange={onChange} 
        placeholder='name' 
        type="text" 
        name='name'/>

        <input 
        value={this.state.age}
        onChange={onChange} 
        placeholder='age' 
        type="number" 
        name='age'/>

        <input 
        value={this.state.Address}
        onChange={onChange} 
        placeholder='Address' 
        type="text" 
        name='Address'/>
        
        <input
        value={this.state.status}
         onChange={onChange} 
         placeholder='status' 
         type="text" 
         name='status'/>

        <input 
        value={this.state.nickName}
        onChange={onChange} 
        placeholder='nickName' 
        type="text" 
        name='nickName'/>
                 
        {<button onClick={onSave}>save</button>}
         
             
             
           <div className="box">
           <div className="grid-container">
           {this.state.data.dataList.map((value, index)=>(
              
                <>
                <div className="grid-item">
                    {index+1}
                </div>
                <div className="grid-item">
                    {value.name}
                </div>
                <div className="grid-item">
                    {value.age}
                </div>
                <div className="grid-item">
                    {value.status}
                </div>
                <div className="grid-item">
                    {value.nickName}
                </div>
                <div className="grid-item">
                    {value.Address}
                </div>
                <div className="grid-item">
                { <button className="fixed" onClick={()=>onDelete(value.id)}>delete</button> }
                </div>

                </>
             
              ))}
               </div>
           </div>
          
       
      </>
    );
  }
}


export default App;




//{value.name} {value.age} {value.Address} {value.status} {value.nickName}
//{ <button onClick={()=>onDelete(value.id)}>delete</button> }
