import React, { Component } from "react";

export default class ListStudent extends Component {
  render() {
    let { renderStudents } = this.props;
    let elementStudent = renderStudents.map((student, index) => {
      return (
        <>
          <tr key={index}>
            <td >{index + 1}</td>
            <td>{student.studentId}</td>
            <td>{student.studentName}</td>
            <td>{student.age}</td>
          </tr>
        </>
      );
    });
    return (
      <div>
        <h2>ListStudent</h2>
        <form>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
              </tr>
            </thead>
            <tbody>{elementStudent}</tbody>
          </table>
        </form>
      </div>
    );
  }
}
