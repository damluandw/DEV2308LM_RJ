import React, { Component } from "react";

export default class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentId: "",
      isEdit: false,
      isDel: false,
    };
  }

  //   handleChangeData = (evt) => {
  //     let name = evt.target.name;
  //     let value = evt.target.value;
  //     this.setState({
  //       [name]: value,
  //     });
  //     console.log(this.state.studentId)
  //   };
  handleShowStudent = (evt) => {
    this.setState(
      {
        studentId: evt,
        isEdit: false,
        isDel: false,
      },
      () => {
        this.props.onShowStudent(this.state);
      }
    );
  };
  handleEditStudent = (evt) => {
    this.setState(
      {
        studentId: evt,
        isEdit: true,
        isDel: false,
      },
      () => {
        this.props.onShowStudent(this.state);
      }
    );
  };
  handleDelStudent = (evt) => {
    this.setState(
      {
        studentId: evt,
        isEdit: false,
        isDel: true,
      },
      () => {
        this.props.onShowStudent(this.state);
      }
    );
  };
  render() {
    let { renderStudent, stt } = this.props;
    return (
      <>
        <tr>
          <td>{stt}</td>
          <td>{renderStudent.studentId}</td>
          <td>{renderStudent.studentName}</td>
          <td>{renderStudent.age}</td>
          <td>{renderStudent.sex === true ? "Nam" : "Nữ"}</td>
          <td>
            <div className="template-demo">
              <button
                type="button"
                className="btn btn-danger btn-icon-text"
                // name="studentId"
                // value={renderStudent.studentId}
                onClick={() => this.handleShowStudent(renderStudent.studentId)}
              >
                Xem
              </button>
              <button
                type="button"
                className="btn btn-warning btn-icon-text"
                // name="studentId"
                // value={renderStudent.studentId}
                onClick={() => this.handleEditStudent(renderStudent.studentId)}
              >
                Sửa
              </button>
              <button
                type="button"
                className="btn btn-success btn-icon-text"
                // name="studentId"
                // value={renderStudent.studentId}
                onClick={() => this.handleDelStudent(renderStudent.studentId)}
              >
                Xóa
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}
