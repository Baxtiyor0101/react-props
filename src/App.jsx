import React from "react"; 

class Student extends React.Component{
  render(){
    return(
      <div>
        <h1>Hi {this.props.status}</h1>
        {this.props.children}
        <button>See more</button>
      </div>
    );
  }
}

export default Student;