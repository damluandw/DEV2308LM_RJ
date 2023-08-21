import React, { Component } from 'react'

export default class ClassComp extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: "DamLuan",
            age : 6
        }
    }
  render() {
    return (
      <div>
        <h2>
            Demo class component
        </h2>
        <div>
            <h3> Truy cập dữ liệu từ props</h3>
            <p>Name : {this.props.name}</p>
            <p>Name : {this.props.age}</p>
        </div>
        <div>
            <h3> Truy cập dữ liệu từ state</h3>
            <p>Name : {this.state.name}</p>
            <p>Name : {this.state.age}</p>
        </div>
      </div>
    )
  }
}
