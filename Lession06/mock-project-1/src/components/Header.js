import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="d-flex">
        <img src="https://devmaster.edu.vn/images/logo.png" alt="logo.png" />
        <h1 className="ms-3 align-self-center">
          Quản lý sản phẩm -{" "}
          <span className="bg-danger text-primary px-3">Mini Project 1</span>
        </h1>
      </header>
    );
  }
}
