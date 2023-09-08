import React, { Component } from "react";
import Title from "./components/Title";
import Control from "./components/Control";
import ListStudent from "./components/ListStudent";
import Form from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20, sex: true, birthDate: "2002-04-23", birthPlace: "HN", address: "25, Vũ Ngọc Phan" },
        { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21, sex: false, birthDate: "2001-09-09", birthPlace: "ĐN", address: "1, Ngô Quyền" },
        { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19, sex: true, birthDate: "2003-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
        { studentId: "SV004", studentName: "Nguyễn Văn D", age: 29, sex: false, birthDate: "2005-07-07", birthPlace: "HCM", address: "1, Lý Tự Trọng" },
      ],
      isToggle: false, // sử dụng cho chức năng ẩn hiện form
      actionName: '', // Giá tri hiển thị trên nút sumit của form
      student: {},
      search: '',
      sortBy: ""
    }
  }

  // Hàm sử lý sự kiện: Add, view
  handleAddOrEditView = (toggle, actionName, student) => {
    this.setState({
      isToggle: toggle,
      actionName: actionName,
      student: student
    })
  }

  // Sự kiện xứ lý dữ liệu khi submit form
  handleSubmit = (toggle, student) => {
    // console.log("toggle:",toggle);
    // console.log("ActionName:",this.state.actionName);
    // console.log("student:",student);
    //  thật dễ dàng
    this.setState({
      isToggle: toggle
    })
    if (this.state.actionName === "Save") {
      // thêm mới
      let { students } = this.state;
      students.push(student);
      this.setState({
        students: students
      })
    } else if (this.state.actionName === "Update") {
      // sửa
      let { students } = this.state;
      for (let i = 0; i < students.length; i++) {
        if (students[i].studentId === student.studentId) {
          students[i] = student;
          break;
        }
      }
      this.setState({
        students: students
      })
    }
  }
  // Hàm xử lý sự kiện Delete
  handleDelete = (student) => {
    //tìm đối tượng student trong student của state -> thực hiện xoá và cập nhật lại
    let { students } = this.state;

    // cách 1
    // for (let index = 0; index < students.length; index++) {
    //   if (students[index].studentId === student.studentId) {
    //     students.splice(index, 1);
    //     break;
    //   }
    // }

    // Cách 2
    students = students.filter(x => x.studentId != student.studentId);
    this.setState({
      students: students
    })
  }

  // sự kiện tìm kiếm
  handleSearch = (keyWord) => {
    this.setState(
      {
        search: keyWord
      }
    )
  }
  handleSort = (sortBy) => {
    this.setState(
      {
        sortBy: sortBy
      }
    )
  }


  render() {
    let { students, search, sortBy } = this.state;

    // let mystyle = {
    //   color: "red"
    // }
    let classNameLeft = "";
    if (this.state.isToggle === true)
      classNameLeft = "col-lg-7 grid-margin stretch-card"
    else classNameLeft = "col-lg-12 grid-margin stretch-card"

    // render form theo giá trị của isToggle
    let elementForm = this.state.isToggle === true ?
      <Form renderActionName={this.state.actionName}
        renderStudent={this.state.student}
        onSubmit={this.handleSubmit} /> : "";
    //tìm kiếm
    if (search !== '') {
      students = students.filter(x => x.studentName.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    }

    // sắp xếp
    if (sortBy !== "") {
      console.log(sortBy);
      let arr = sortBy.split("-");
      if (arr[0] === "studentName") {
        if (arr[1] === "ASC") {
          students.sort((x, y) => x.studentName.localeCompare(y.studentName))
        } else {
          students.sort((x, y) => y.studentName.localeCompare(x.studentName))
        }
      } else {
        if (arr[1] === "ASC") {
          students.sort((x, y) => { return x.age - y.age })
        } else {
          students.sort((x, y) => { return y.age - x.age })
        }
      }

    }
    return (
      <div className="container-fluid">
        {/* <h1 style={mystyle}>123</h1> */}
        {/* <Title style={mystyle} /> */}
        <Title />
        <div className="row">
          <div className={classNameLeft}>
            <div className="card">
              <Control onAddOrEditView={this.handleAddOrEditView} onSearch={this.handleSearch}
                onSort={this.handleSort} />
              <ListStudent renderStudents={students}
                onHandleEditOrView={this.handleAddOrEditView}
                onDelete={this.handleDelete} />
            </div>
          </div>
          <div className="col-5 grid-margin">
            {/* <Form /> */}
            {elementForm}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
