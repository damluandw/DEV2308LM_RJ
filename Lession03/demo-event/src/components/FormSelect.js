import React, { Component } from "react";

export default class FormSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thanhPho: "",
    };
  }
  // Hàm xử lý sự kiện
  handleChange = (evt) => {
    this.setState({
      thanhPho: evt.target.value,
    });
  };
  handleSubmit = (evt) => {
    evt.preventDefault();
    // console.log("-------------");
    // console.log(this.state.thanhPho);
    // console.log("-------------");
  };
  render() {
    return (
      <div className="border alert-success my-3">
        <h2>Xử lý dữ liệu với Select:</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Name:</label>
          <select value={this.state.thanhPho} onChange={this.handleChange}>
            <option value={"HN1"}> Hà nội 1</option>
            <option value={"HN2"}> Hà nội 2 </option>
            <option value={"HN3"}> Hà nội 3 </option>
          </select>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
