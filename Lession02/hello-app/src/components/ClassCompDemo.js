import React, { Component } from 'react'

export default class ClassCompDemo extends Component {
  render() {
    return (
      <div>
        <h2>ClassCompDemo</h2>
        <div className='alert alert-success'>
            <h3> sử dụng các thuộc tính từ đối tượng props của class components</h3>
            <p>Welcome to {this.props.name}</p>
            <p>Age {this.props.age}</p>
            <p>Company {this.props.company}</p>
        </div>
      </div>
    )
  }
}
