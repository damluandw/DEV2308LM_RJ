import React, { Component } from "react";
import ListStudent from "./components/ListStudent";
import ComponentControl from "./components/ComponentControl";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valSearch: "",
      students: [
        { studentId: "SV001", studentName: "Nguyễn Văn A", age: 20 },
        { studentId: "SV002", studentName: "Nguyễn Văn B", age: 21 },
        { studentId: "SV003", studentName: "Nguyễn Văn C", age: 19 },
        { studentId: "SV004", studentName: "Đàm Văn D", age: 19 },
      ],
      studentsSearch: [],
    };
  }
  handleSearchData = (data) => {
    console.log(data);
    let sourceArray = this.state.students;
    let newArray = [];
    if (data.length <= 0) {
      newArray = sourceArray;
    } else {
      for (let item of sourceArray) {
        if (item.studentName.toLowerCase().indexOf(data.toLowerCase()) > -1) {
          newArray.push(item);
        }
      }
    }
    this.setState({
      studentsSearch: newArray,
      valSearch: data,
    });
  };

  render() {
    return (
      <div>
        <ListStudent renderStudents={this.state.students} />
        <ComponentControl onSubmit={this.handleSearchData} />
        <ListStudent renderStudents={this.state.studentsSearch} />
      </div>
    );
  }
}
