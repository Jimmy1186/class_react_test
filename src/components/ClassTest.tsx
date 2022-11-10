import React, { Component } from "react";

  class ClassTest extends Component<{},{message:number}> {


// constructor(props: string) {
//   super(props)

//   this.state = {
//      message:0
//   }
//   this.handleClick = this.handleClick.bind(this)
// }


  handleClick = () => {
    this.setState(prev=>({message:prev.message+1}));
    console.log(this) 
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>hit me</button>
        <div>{this.state.message}</div>
<<<<<<< HEAD
        
        
=======
        <p>a</p>
        <p>b</p>
        <p>c</p>
        <p>final</p>
>>>>>>> 15c1782b02156cca2207f52361a378ff4127ee24
      </>
    );
  }
}

export default ClassTest;
