import React, { Component } from "react";

class ClassDemo extends Component {
  render() {
    return (
      <>
      
        <div>ClassDemo</div>
        <p>
          Hello {this.props.name} - Age : {this.props.age}
        </p>
        <hr/>
      </>
    );
  }
}

export default ClassDemo;
