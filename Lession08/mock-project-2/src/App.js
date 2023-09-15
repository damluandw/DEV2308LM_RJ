import React, { Component } from "react";
import Title from "./components/Title";
import ListProduct from "./components/ListProduct";
import ListCart from "./components/ListCart";
import UserUpdate from "./components/UserUpdate";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        {/* TITLE : START */}
        <Title />
        {/* TITLE : END */}
        <div className="row">
          {/* LIST PRODUCT : START */}
          <ListProduct />
          {/* LIST PRODUCT : END */}
          {/* CART : START */}
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <ListCart />
            <UserUpdate/>
          </div>
          {/* CART : END */}
        </div>
      </div>
    );
  }
}
