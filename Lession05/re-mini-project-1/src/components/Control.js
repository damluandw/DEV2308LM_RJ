import React, { Component } from "react";

export default class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valSearch: "",
      valSort: "",
    };
  }
  handleAdd = () => {
    this.props.onAddOrEditView(true, "Save");
  };

  handleChangeData = (evt) => {
    let name = evt.target.name;
    let value = evt.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmitSearch = (evt) => {
    evt.preventDefault();
    this.props.onSearch(this.state);
  };

  handleSort = (evt) => {
    let name = evt.target.name;
    let value = evt.target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.props.onSort(this.state);
      }
    );
  };
  render() {
    return (
      <div className="card-header">
        <div className="row">
          <div className="col-3 ">
            <button
              type="button"
              className="btn btn-primary btn-icon-text"
              onClick={this.handleAdd}
            >
              Thêm mới sinh viên
            </button>
          </div>
          <div className="col-6 ">
            <form className="search-form" action="#">
              <i className="icon-search" />
              <input
                type="search"
                className="form-control"
                placeholder="Search Here"
                title="Search here"
                name="valSearch"
                value={this.state.valSearch}
                onChange={this.handleChangeData}
              />
              <button
                className="btn btn-primary btn-icon-text"
                onClick={this.handleSubmitSearch}
              >
                Tìm kiếm
              </button>
            </form>
          </div>
          <div className="col-3 d-flex align-items-center">
            <select
              className="form-control"
              name="valSort"
              value={this.state.valSort}
              onChange={this.handleSort}
            >
              <option value="">Sắp xếp</option>
              <option value="studentId">Mã SV</option>
              <option value="studentName">Name</option>
              <option value="age">Age</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
