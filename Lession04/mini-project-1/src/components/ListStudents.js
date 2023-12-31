import React, { Component } from "react";
import Student from "./Student";

export default class ListStudents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentId: "",
      isEdit: false,
      isDel: false,
    };
  }
  handleChangeFormStudent = (evt) => {
    this.setState(
      {
        studentId: evt.studentId,
        isEdit: evt.isEdit,
        isDel: evt.isDel,
      },
      () => this.props.onFormStudent(this.state)
    );
  };
  render() {
    let { renderStudents } = this.props;
    let elementStudent = renderStudents.map((student, index) => {
      return (
        <Student
          key={index}
          renderStudent={student}
          stt={index + 1}
          onShowStudent={this.handleChangeFormStudent}
        />
      );
    });
    return (
      <div className="card-body">
        <h3 className="card-title">Danh sách sinh viên</h3>
        <div className="table-responsive pt-3">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Mã sinh viên</th>
                <th>Tên sinh viên</th>
                <th>Tuổi</th>
                <th>Giới tính</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>{elementStudent}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
