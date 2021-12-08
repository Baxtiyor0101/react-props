// import React from 'react';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count:0,
//       name:'',
//       data:{
//         status:'OK',
//         dataList: [
//           {
//             id:1,
//             name:'Eshmat',
//             status:'Mentor',
//           },
//           {
//             id:2,
//             name:'Toshmat',
//             status:'Gentor',
//           },
//           {
//             id:3,
//             name:'Gulmat',
//             status:'Waiter',
//           },
//           {
//             id:4,
//             name:'Roshmat',
//             status:'Barber',
//           },
//         ]
//       }
//     };
//   }
  
  


//   render() {

//   const  increase=() => {
//       this.setState({count:this.state.count+1});
//     };

//     const  decrease=() => {
//       this.setState({count:this.state.count-1});
//     };
//     const  reset=() => {
//       this.setState({count:0});
//     };
//     const onChange = (e) => {
//       this.setState({name: e.target.value})
//     };
//     const onDelete = (e)=>{
//       let res = this.state.data.dataList.filter((value)=>value.id !== e);
//       this.setState({
//         data:{
//           ...this.state.data,
//           dataList:res,
//         },
//       });
//     };
    
//     return (
//       <>
//           <h1>Count  {this.state.count}</h1>   
//           <button onClick={increase}>+</button>   
//           <button onClick={decrease}>-</button>
//           <button onClick={reset}>reset</button>
//           <h1>name {this.state.name} </h1> 
//           <br />  
//           <input type="text" onChange={onChange}/>
          
//           {
//           !this.state.data.dataList.length ?(
//             <h1>no data</h1>
//           ):(
//           this.state.data.dataList.map((value)=>(
//             <div key={value.id}>
//               <h1>
//                 {value.id }
//                 {value.name}
//                 {value.status} <button onClick={()=>onDelete(value.id)}>delete</button>
//               </h1>
//             </div>
//             )))
//           }
//       </>
//     );
//   }
// }


// export default App;



import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0,
      name:'',
      wrap:{
        department:'best',
        dataList:[
          {
            id:1,
            status:'student',
            name:'Baxtiyor',
          },
          {
            id:2,
            status:'worker',
            name:'Eshmat',
          },
          {
            id:3,
            status:'waiter',
            name:'Toshmat',
          },
          {
            id:4,
            status:'Mentor',
            name:'Abdulquddus',
          }




        ]
      }
    };
  }

  render() {

    const increase=() =>{
      this.setState({count:this.state.count+1});
    };
    const decrease=() =>{
      this.setState({count:this.state.count-1});
    };
    const reset=() =>{
      this.setState({count:0});
    };
    const onChange=(e) =>{
      this.setState({name:e.target.value})
;    }

const onDelete=(e)=>{
  let reobj=this.state.wrap.dataList.filter((value)=>value.id!==e);
  this.setState({
    wrap:{
      ...this.state.wrap,
      dataList:reobj,
    },
  });
};



    return (
      <div>
        <h1>Count:{this.state.count} </h1>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
        <button onClick={reset}>reset</button>

        <h1>name{this.state.name}</h1>
        <br />
        <input onChange={onChange} type="text" />

        {
           !this.state.wrap.dataList.length ?(
             <h1>malumot qolmadi</h1>
           ):(
            this.state.wrap.dataList.map((value)=>(
              <div key={value.id}>
                <h1>
                {value.id}
                {value.status}
                {value.name} <button onClick={()=>onDelete(value.id)}>delete</button>
              </h1>
              </div>
            ))
           )
        }

      </div>
    );
  }
}


export default App;
