import React, { Component } from 'react'
import ButtonHandle from './components/ButtonHandle'
import FormInput from './components/FormInput';
import FormSelect from './components/FormSelect';
import FormFull from './components/FormFull';
import ListRender from './components/ListRender';
import ListStudent from './components/ListStudent';
import LoginComp from './components/LoginComp';

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
      isLogin: false
    }
  }
  // Nhận dữ liệu từ Component ButtonHandle
  handleChangeData = (data) => {
    this.setState({
      company: data
    })
  }
  handleSubmitForm = (data) => {
    console.log('====================================');
    console.log("App:", data);
    console.log('====================================');
  }

  handleLogin = () => {
    this.state({
      isLogin: true
    })

  }
  handleLogout = () => {
    this.state({
      isLogin: false
    })

  }

  render() {
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
          <LoginComp isLogin={this.state.isLogin} />
          {/* {isLogin ? <input type="button" value={Logout} onClick={this.handleLogout}/> 
          :<input type="button" value={Logout} onClick={this.handleLogin}/> 
          } */}
        </div>
      </div>
    )
  }
}
