import React, { Component } from 'react'

export default class CompState extends Component {
    constructor(props) {
        super(props);
        // quản lý dữ liệu của componet thông qua state
        this.state = {
            studentID: 123,
            name: 'DamLuan',
            age: 26
        }
    }
    //hàm sử lý sự kiện
    handleChange = () => {
        this.setState(
            {
                name: 'DevMaster'
            }
        )
    }
    render() {
        return (
            <div>
                <h2>Sử dụng dữ liệu trong CompState</h2>
                <div className='alert alert-danger'>
                    <p>Thông tin sinh viên: </p>
                    <p>Name:  {this.state.name}</p>
                    <p>ID:  {this.state.studentID}</p>
                    <p>Age:  {this.state.age}</p>
                </div>
                <button className='btn btn-success' onClick={this.handleChange}>Change Name</button>
            </div>
        )
    }
}
