import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentId: "",
      studentName: "",
      age: 0,
      sex: true,
      birthDate: "",
      birthPlace: "",
      address: "",
    };
  }
  componentWillMount = () => {
    let { renderActionName, renderStudent } = this.props;
    if (renderActionName === "Close" || renderActionName === "Update") {
      this.setState({
        studentId: renderStudent.studentId,
        studentName: renderStudent.studentName,
        age: renderStudent.age,
        sex: renderStudent.sex,
        birthDate: renderStudent.birthDate,
        birthPlace: renderStudent.birthPlace,
        address: renderStudent.address,
      });
    } else {
      this.setState({
        studentId: "",
        studentName: "",
        age: 0,
        sex: true,
        birthDate: "",
        birthPlace: "",
        address: "",
      });
    }
  };
  componentWillReceiveProps = (nextProps) => {
    let { renderActionName, renderStudent } = nextProps;
    if (renderActionName === "Close" || renderActionName === "Update") {
      this.setState({
        studentId: renderStudent.studentId,
        studentName: renderStudent.studentName,
        age: renderStudent.age,
        sex: renderStudent.sex,
        birthDate: renderStudent.birthDate,
        birthPlace: renderStudent.birthPlace,
        address: renderStudent.address,
      });
    } else {
      this.setState({
        studentId: "",
        studentName: "",
        age: 0,
        sex: true,
        birthDate: "",
        birthPlace: "",
        address: "",
      });
    }
  };
  handleChange = (evt) => {
    let name = evt.target.name;
    let value;
    if (name === "sex") value = evt.target.value === "true" ? true : false;
    else value = evt.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit(false, this.state);
  };

  render() {
    let { renderActionName } = this.props;
    let isReadOnly = false;
    if (renderActionName === "Close") {
      isReadOnly = true;
    } else {
      isReadOnly = false;
    }
    const optionsAdress = [
      { value: "HN", lable: "Hà Nội" },
      { value: "HCM", lable: "Hồ Chí Minh" },
      { value: "ĐN", lable: "Đà Nẵng" },
      { value: "QN", lable: "Quảng Ninh" },
    ];
    const optionsSex = [
      { value: true, lable: "Nam" },
      { value: false, lable: "Nữ" },
    ];

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
                  value={this.state.studentId}
                  onChange={this.handleChange}
                  readOnly={isReadOnly}
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
                  value={this.state.studentName}
                  onChange={this.handleChange}
                  readOnly={isReadOnly}
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
                  value={this.state.age}
                  onChange={this.handleChange}
                  readOnly={isReadOnly}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Giới tính</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  name="sex"
                  value={this.state.sex}
                  onChange={this.handleChange}
                  disabled={isReadOnly}
                >
                  <option value={true}>Nam</option>
                  <option value={false}>Nữ</option>
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
                  value={this.state.birthDate}
                  onChange={this.handleChange}
                  readOnly={isReadOnly}
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Nơi sinh</label>
              <div className="col-sm-9">
                <select
                  className="form-control"
                  name="birthPlace"
                  value={this.state.birthPlace}
                  onChange={this.handleChange}
                  disabled={isReadOnly}
                >
                  <option value="HN">Hà Nội</option>
                  <option value="HCM">TP. Hồ Chí Minh</option>
                  <option value="ĐN">Đà Nẵng</option>
                  <option value="QN">Quảng Ninh</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Địa chỉ</label>
              <div className="col-sm-9">
                <textarea
                  className="form-control"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleChange}
                  readOnly={isReadOnly}
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary me-2"
              onClick={this.handleSubmit}
            >
              {renderActionName}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
