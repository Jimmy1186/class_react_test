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
        <p>a</p>
        <p>b</p>
        <p>c</p>
        <p>final</p>
      </>
    );
  }
}

export default ClassTest;
