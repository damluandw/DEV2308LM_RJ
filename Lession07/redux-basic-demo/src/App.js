import React, { Component } from 'react';
import './App.css';
import WellcomeRedux from './components/WellcomeRedux';
import { connect } from 'react-redux';
import { actChangeCourseName, actChangeUserName } from './actions';

class App extends Component {
  //Tạo function handleChangeUserName cho sự kiện khi thay đổi trên UserName
  handleChangeUserName = (e) => {
    this.props.changeUserName(e.target.value);
  }
  //Tạo function handleChangeCourseName cho sự kiện khi thay đổi trên UserName
  handleChangeCourseName = (e) => {
    this.props.changeCourseName(e.target.value);
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>Welcome to Redux</h1>
          <div className="row">
            <div className="col-12">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Change UserName
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={this.handleChangeUserName}
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Change CourseName
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="CourseName"
                  aria-label="CourseName"
                  aria-describedby="basic-addon1"
                  onChange={this.handleChangeCourseName}
                />
              </div>
            </div>

          </div>
          <div className="row">
            <div className="col-12">
              <WellcomeRedux />
            </div>
          </div>
        </div>
      </div>
    );
  }
}



//mapDispathToProps thực hiện bắn các action vào store
const mapDispathToProps = (dispath) => {
  return {
    changeUserName: (value) => {
      dispath(actChangeUserName(value));

    }, changeCourseName: (value) => {
      dispath(actChangeCourseName(value));

    }
  }
}

export default connect(null, mapDispathToProps)(App);

