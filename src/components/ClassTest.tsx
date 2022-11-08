import React, { Component } from "react";

export class ClassTest extends Component {
  state = {
    message: "asd",
  };

  handleClick = () => {
    this.setState({ message: "plplp" });
  };

  render() {
    return (
      <>
        <button onClick={this.handleClick}>hit me</button>
        <div>{this.state.message}</div>
      </>
    );
  }
}

export default ClassTest;
