import React, { Component } from "react";
import ButtonHandle from "./components/ButtonHandle";
import FormInput from "./components/FormInput";
import FormSelect from "./components/FormSelect";
import FormFull from "./components/FormFull";
import ListRender from "./components/ListRender";
import ListStudent from "./components/ListStudent";
import LoginCotrol from "./components/LoginCotrol";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "DevMaster",
      students: [
        { name: "Dam Luan 1", age: "26" },
        { name: "Dam Luan 2", age: "26" },
        { name: "Dam Luan 3", age: "26" },
        { name: "Dam Luan 4", age: "26" },
        { name: "Dam Luan 4", age: "26" },
        { name: "Dam Luan 4", age: "26" },
        { name: "Dam Luan 4", age: "26" },
        { name: "Dam Luan 4", age: "26" },
        { name: "Dam Luan 4", age: "26" },
      ],
      isLogin: false,
    };
  }
  // Nhận dữ liệu từ Component ButtonHandle
  handleChangeData = (data) => {
    this.setState({
      company: data,
    });
  };
  handleSubmitForm = (data) => {
    // console.log('====================================');
    // console.log("App:", data);
    // console.log('====================================');
  };

  handleLoginClick = () => {
    this.setState({
      isLogin: true,
    });
  };
  handleLogoutClick = () => {
    this.setState({
      isLogin: false,
    });
  };

  render() {
    let isLogin = this.state.isLogin;
    return (
      <div className="container border my-5">
        <h1>Demo Event - Form - {this.state.company}</h1>
        {/* Xử lý với sự kiện event */}
        <ButtonHandle onChangeData={this.handleChangeData} />

        <div>
          <FormInput />
          <FormSelect />
          <FormFull onSubmit={this.handleSubmitForm} />
        </div>

        <div>
          <ListRender />
          <ListStudent renderStudents={this.state.students} />
        </div>
        <div>
          <LoginCotrol isLogin={this.state.isLogin} />
          {isLogin == true ? (
            <input
              type="button"
              value="Logout"
              onClick={this.handleLogoutClick}
            />
          ) : (
            <input
              type="button"
              value="Login"
              onClick={this.handleLoginClick}
            />
          )}
        </div>
      </div>
    );
  }
}
