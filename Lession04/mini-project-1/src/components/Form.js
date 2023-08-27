import React, { Component } from "react";

export default class Form extends Component {
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
  handleChangeObjectData = (evt) => {
    evt.preventDefault();
    let name = evt.target.name;
    let value;
    if (name == "sex") {
      value = evt.target.value === "male" ? true : false;
    } else value = evt.target.value;
    // console.log(value);

    this.setState(
      (prevState) => ({
        student: {
          ...prevState.student,
          [name]: value,
        },
      }),
    //   () => console.log(this.state.student)
    );
  };
  handSubmit =(evt)=>{
    evt.preventDefault();
    this.props.onSubmit(this.state.student)
    
  }
  render() {
    let { objStudent, isEdit } = this.props;
    if(objStudent.studentId != this.state.student.studentId){
        this.state.student = objStudent;
    }
    // this.state.student = objStudent;
    let { student } = this.state;

    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Thông tin sinh viên</h3>
          <form className="form-sample">
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Mã sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="studentId"
                  value={student.studentId}
                  onChange={this.handleChangeObjectData}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tên sinh viên</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="studentName"
                  value={student.studentName}
                  onChange={this.handleChangeObjectData}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Tuổi</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  name="age"
                  value={student.age}
                  onChange={this.handleChangeObjectData}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  value={student.sex === true ? "male" : "female"}
                  name="sex"
                  onChange={this.handleChangeObjectData}
                >
                  <option value="male">Nam</option>
                  <option value="female">Nữ</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Ngày sinh</label>
              <div className="col-sm-9">
                <input
                  className="form-control"
                  placeholder="dd/mm/yyyy"
                  name="birthDate"
                  value={student.birthDate}
                  onChange={this.handleChangeObjectData}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select className="form-control">
                  <option>Hà Nội</option>
                  <option>TP. Hồ Chí Minh</option>
                  <option>Đà Nẵng</option>
                  <option>Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea
                  className="form-control"
                  //   defaultValue={""}
                  name="address"
                  value={student.address}
                  onChange={this.handleChangeObjectData}
                />
              </div>
            </div>
            <button type=" " className="btn btn-primary me-2" onClick={this.handSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
