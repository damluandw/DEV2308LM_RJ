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
          studentId: "SV008",
          studentName: "Nguyễn Văn B",
          age: 21,
          sex: false,
          birthDate: "2001-09-09",
          birthPlace: "ĐN",
          address: "1, Ngô Quyền",
        },

        {
          studentId: "SV004",
          studentName: "Nguyễn Văn D",
          age: 18,
          sex: false,
          birthDate: "2005-07-07",
          birthPlace: "HCM",
          address: "1, Lý Tự Trọng",
        },
        {
          studentId: "SV005",
          studentName: "Nguyễn Văn C",
          age: 24,
          sex: true,
          birthDate: "2003-07-07",
          birthPlace: "HCM",
          address: "1, Lý Tự Trọng",
        },
      ],
      isToggle: false, // sử dụng chức năng ẩn hiện form
      actionName: "", // giá trị hiển thị trên nút submit của Form
      student: {},
      valSearch: "",
      valSort: "",
    };
  }

  //Hàm xử lý sự kiện Add/ view
  handleAddOrEditView = (toggle, actionName, student) => {
    this.setState(
      {
        isToggle: toggle,
        actionName: actionName,
        student: student,
      },
      () => {
        if (actionName === "Delete") {
          let { students, student } = this.state;
          students = students.filter(
            (item) => item.studentId !== student.studentId
          );
          this.setState({
            students: students,
          });
        }
      }
    );
  };
  // Sự kiện xứ lý dữ liệu khi submit form
  handleSubmit = (toggle, student) => {
    this.setState({
      isToggle: toggle,
    });

    //Thêm
    if (this.state.actionName === "Save") {
      let { students } = this.state;
      students.push(student);
      this.setState({
        students: students,
      });
    }
    //Sửa
    if (this.state.actionName === "Update") {
      let { students } = this.state;
      for (let i = 0; i < students.length; i++) {
        if (students[i].studentId === student.studentId) {
          students[i] = student;
        }
      }
      this.setState({
        students: students,
      });
    }
  };
  //Search
  handleSearchData = (data) => {
    this.setState({
      valSearch: data.valSearch,
    });
  };

  // Sort
  handleSort = (data) => {
    this.setState({
      valSort: data.valSort,
    });
  };
  render() {
    let { students, valSearch, valSort } = this.state;
    // render form theo giá trị cua isToggle
    let elementForm =
      this.state.isToggle === true ? (
        <Form
          renderActionName={this.state.actionName}
          renderStudent={this.state.student}
          onSubmit={this.handleSubmit}
        />
      ) : (
        ""
      );
    //Render Search
    let fn_Search = (arrStudents, txtSearch) => {
      let sourceArray = arrStudents;
      let newArray = [];
      if (txtSearch.length <= 0) {
        newArray = sourceArray;
      } else {
        for (let item of sourceArray) {
          if (
            item.studentName.toLowerCase().indexOf(txtSearch.toLowerCase()) > -1
          ) {
            newArray.push(item);
          }
        }
      }
      return newArray;
    };
    students = fn_Search(students, valSearch);
    //RenderSort
    const ASC = "ascending";
    const DSC = "descending";
    let fn_sortByNum = (a, b, order = ASC) => {
      const diff = a - b;

      if (order === ASC) {
        return diff;
      }

      return -1 * diff;
    };

    let fn_sortByText = (a, b, order = ASC) => {
      const diff = a.toLowerCase().localeCompare(b.toLowerCase());

      if (order === ASC) {
        return diff;
      }

      return -1 * diff;
    };
    let fn_Sort = (arrStudents, txtSort) => {
      // console.log(txtSort)
      if (txtSort === "") {
        return arrStudents;
      }
      if (txtSort === "studentId") {
        return [...arrStudents].sort((a, b) =>
          fn_sortByText(a.studentId, b.studentId, ASC)
        );
      }
      if (txtSort === "studentName") {
        return [...arrStudents].sort((a, b) =>
          fn_sortByText(a.studentName, b.studentName, ASC)
        );
      }
      if (txtSort === "age") {
        return [...arrStudents].sort((a, b) => fn_sortByNum(a.age, b.age, ASC));
      }
    };

    students = fn_Sort(students, valSort);
    return (
      <div className="container-fluid">
        <Title />
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              <Control
                onAddOrEditView={this.handleAddOrEditView}
                onSearch={this.handleSearchData}
                onSort={this.handleSort}
              />
              <ListStudent
                renderStudents={students}
                onHandleEditOrView={this.handleAddOrEditView}
              />
            </div>
          </div>
          <div className="col-5 grid-margin">{elementForm}</div>
        </div>
      </div>
    );
  }
}

export default App;
