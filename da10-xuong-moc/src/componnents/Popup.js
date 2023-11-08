import React, { Component } from "react";
import "./css/popup.css";
export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: -100,
    };
    this.timeout = null;
  }
  onShow = () => {
    if (this.timneout) {
      clearTimeout(this.timeout);
      this.setState({top:-100},()=>{
        this.timeout = setTimeout(()=>{
          this.showNotification();
        },500)
      })
    }
  };
  showNotification = () => {
    this.setState(
      {
        top: 16,
      },
      () => {
       this.timeout = setTimeout(() => {
          this.state({
            top: -100,
          });
        }, 3000);
      }
    );
  };
  render() {
    return <div>Popup</div>;
  }
}
