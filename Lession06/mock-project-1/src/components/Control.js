import React, { Component } from "react";

export default class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWord: "",
      sortBy: "",
    };
  }
  handleAdd = () => {
    this.props.onAddOrEditView(true, "Save");
  };
  handleChange = (ev) => {
    this.setState({
      keyWord: ev.target.value,
    });
  };
  handleSearch = () => {
    this.props.onSearch(this.state.keyWord);
  };
  handleSortBy = (ev) => {
    let value = ev.target.value;
    this.setState({
      keyWord: ev.target.value,
    });
    this.props.onSort(value);
  };
  render() {
    return (
      <div >
        <div className="control row">
          <div className="col-3">
            <button
              type="button"
              className="btn btn-primary btn-icon-text ms-4"
              onClick={this.handleAdd}
            >
              Thêm mới sản phẩm
            </button>
          </div>
          <div className="col-6">
            <div className="input-group ">
              <input
                type="text"
                className="form-control"
                aria-describedby="button-addon2"
                onChange={this.handleChange}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.handleSearch}
              >
                Tìm kiếm
              </button>
            </div>
          </div>

          <div className="col-3 align-items-center ">
            <select
              className="form-control w-50 m-auto"
              name="sortBy"
              value={this.state.sortBy}
              onChange={this.handleSortBy}
            >
              <option value="">Sắp xếp</option>
              <option value="Name-ASC">Name tăng dần</option>
              <option value="Name-DESC">Name giảm dần</option>
              <option value="Price-ASC">Price tăng dần</option>
              <option value="Price-DESC">Price giảm dần</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
