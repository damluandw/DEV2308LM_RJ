import React, { Component } from "react";

export default class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sutdentName: "DamLuan",
    };
  }
  // Hàm xử lý sự kiện
  handleChange = (evt) => {
    this.setState({
      sutdentName: evt.target.value,
    });
  };
  //Submit
  handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log("-------------");
    // console.log(this.state.sutdentName);
    // console.log("-------------");
  };
  render() {
    return (
      <div className="border alert-success">
        <h2> Xử lý dữ liệu với input</h2>
        <form>
          <label>Name: </label>
          <input value={this.state.sutdentName} onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
