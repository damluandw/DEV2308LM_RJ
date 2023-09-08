import React, { Component } from "react";

class Control extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWord: '',
      sortBy: ''
    }
  }


  // hàm xử lý sự kiện khi người dùng click vào nút thêm
  handleAdd = () => {
    this.props.onAddOrEditView(true, "Save")
  }
  // hàm xử lý sự kiện tìm kiếm
  handleSearch = () => {
    this.props.onSearch(this.state.keyWord)
  }


  //Cách 1
  // handleSort = (ev) => {
  //   let value = ev.target.value;
  //   this.setState({
  //     sortBy: value
  //   },
  //     () => {
  //       this.props.onSort(this.state.sortBy);
  //     }
  //   )
  // }

  //Cách 2
  handleSort = (ev) => {
    let value = ev.target.value;
    this.setState({
      sortBy: value
    })
    this.props.onSort(value);
  }

  render() {
    return (
      <div className="card-header">
        <div className="row">
          <div className="col-3 ">
            <button type="button" className="btn btn-primary btn-icon-text"
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
                value={this.state.keyWord}
                onChange={(ev) => this.setState({ keyWord: ev.target.value })}
              />
              <button className="btn btn-primary btn-icon-text"
                onClick={this.handleSearch}
              >
                Tìm kiếm
              </button>
            </form>
          </div>
          <div className="col-3 d-flex align-items-center">
            <select className="form-control"
              name="sortBy"
              value={this.state.sortBy}
              onChange={this.handleSort}>
              <option value="">Sắp xếp</option>
              <option value="studentName-ASC">studentName tăng dần</option>
              <option value="studentName-DESC">studentName giảm dần</option>
              <option value="age-ASC">Age tăng dần</option>
              <option value="age-DESC">Age giảm dần</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default Control;
