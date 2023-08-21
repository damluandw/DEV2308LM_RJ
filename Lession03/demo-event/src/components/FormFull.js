import React, { Component } from 'react'

export default class FormFull extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName: "DamLuan",
            thanhPho: '',
           
        }
    }
    // Hàm xử lý sự kiện
    handleChange = (evt) => {
        let name = evt.target.name;
        let value = evt.target.value;
        this.setState({
            [name]: value
        })
    }
    //Submit
    handleSubmit = (evt) => {
        evt.preventDefault();
        console.log("-------------");
        console.log(this.state);
        console.log("-------------");
        this.props.onSubmit(this.state);
    }
    render() {
        return (
            <div className=" alert alert-primary">
                <h2> Xử lý dữ liệu với input</h2>
                <form>
                    <label>Name: </label>
                    <input value={this.state.sutdentName}
                        name='studentName'
                        onChange={this.handleChange} />
                    <label>Thành Phố: </label>
                    <select value={this.state.thanhPho} onChange={this.handleChange} name='thanhPho'>
                        <option value={"HN1"}>Hà Nội 1</option>
                        <option value={"HN2"}>Hà Nội 2</option>
                        <option value={"HN3"}>Hà Nội 3</option>
                    </select>
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}
