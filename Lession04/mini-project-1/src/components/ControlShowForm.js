import React, { Component } from "react";
import Form from "./Form";

export default class ControlShowForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  handSubmit = (evt) => {
    // evt.preventDefault();
    this.setState({ student: evt }, () => {
      this.props.onSubmit(this.state.student);
      // console.log(this.state.student);
    });
  };

  render() {
    const { isShow, objStudent, isEdit } = this.props;
    if (isShow) {
      return (
        <Form
          objStudent={objStudent}
          isEdit={isEdit}
          onSubmit={this.handSubmit}
        />
      );
    } else {
      return <></>;
    }
    // return (
    //   <div>ControlShowForm</div>
    // )
  }
}
