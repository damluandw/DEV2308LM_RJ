import React, { Component } from "react";
import Title from "./components/Title";
import Control from "./components/Control";
import ListStudents from "./components/ListStudents";
import ControlShowForm from "./components/ControlShowForm";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          studentId: "SV001",
          studentName: "Nguyễn Văn A",
          age: 20,
          sex: true,
          birthDate: "2002-04-23",
          birthPlace: "HN",
          address: "25, Vũ Ngọc Phan",
        },
        {
          studentId: "SV002",
          studentName: "Nguyễn Văn B",
          age: 21,
          sex: false,
          birthDate: "2001-09-09",
          birthPlace: "ĐN",
          address: "1, Ngô Quyền",
        },
        {
          studentId: "SV003",
          studentName: "Nguyễn Văn C",
          age: 19,
          sex: true,
          birthDate: "2003-07-07",
          birthPlace: "HCM",
          address: "1, Lý Tự Trọng",
        },
        {
          studentId: "SV004",
          studentName: "Nguyễn Văn D",
          age: 29,
          sex: false,
          birthDate: "2005-07-07",
          birthPlace: "HCM",
          address: "1, Lý Tự Trọng",
        },
      ],
      isShow: false,
      valSearch: "",
      studentId: "",
      isEdit: false,
      isDel: false,
      student: {
        studentId: "",
        studentName: "",
        age: 0,
        sex: true,
        birthDate: "",
        birthPlace: "",
        address: "",
      },
    };
  }
  handleSearchData = (data) => {
    this.setState({
      valSearch: data,
    });
  };

  handleShowForm = (evt) => {
    this.setState({
      isShow: evt,
      studentId: "",
    });
  };
  handleChangeShowForm = (evt) => {
    this.setState(
      {
        studentId: evt.studentId,
        isEdit: evt.isEdit,
        isDel: evt.isDel,
      },
      () => {
        // debugger
        if (evt.isDel === false) {
          this.setState({
            isShow: true,
          });
        }
      }
    );
  };

  handleChangeForm = (evt) => {
    this.setState({
      student: evt,
    });
    // debugger
    let check = false;
    var students = this.state.students;
    for (let i = 0; i < students.count; i++) {
      if (students[i].studentId == evt.studentId) {
        students[i] = evt;
        check = true;
      }
    }
    console.log(evt)
    console.log(this.state.students)
    if (!check) {
      this.state.students.push(evt);
    } else {
      this.setState({
        students: students,
      });
    }
  };
  render() {
    let { students, isShow, valSearch, studentId, isEdit, isDel } = this.state;
    //Search
    let sourceArray = students;
    let newArray = [];
    if (valSearch.length <= 0) {
      newArray = sourceArray;
    } else {
      for (let item of sourceArray) {
        if (
          item.studentName.toLowerCase().indexOf(valSearch.toLowerCase()) > -1
        ) {
          newArray.push(item);
        }
      }
    }
    students = newArray;
    // End Search
    // Hanh Dong
    let objStudent = {
      studentId: "",
      studentName: "",
      age: 0,
      sex: true,
      birthDate: "",
      birthPlace: "",
      address: "",
    };
    //Xem-Sua
    if (studentId !== "" && isDel === false) {
      for (let item of this.state.students) {
        if (item.studentId === studentId) {
          objStudent = item;
        }
      }
    }
    //Xoa
    if (this.state.isDel) {
      this.state.students = this.state.students.filter(
        (item) => item.studentId !== this.state.studentId
      );
      students = this.state.students;
    }

    return (
      <div className="container-fliud">
        <Title />
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              <Control
                onSearch={this.handleSearchData}
                onIsShow={this.handleShowForm}
              />
              <ListStudents
                renderStudents={students}
                onFormStudent={this.handleChangeShowForm}
              />
            </div>
          </div>
          <div className="col-5 grid-margin">
            <ControlShowForm
              isShow={isShow}
              objStudent={objStudent}
              isEdit={isEdit}
              onSubmit={this.handleChangeForm}
            />
          </div>
        </div>
      </div>
    );
  }
}
