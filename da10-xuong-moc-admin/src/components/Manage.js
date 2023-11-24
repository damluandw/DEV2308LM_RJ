import React from "react";
import Nav from "./Nav";
import Product from "./Product";
import ListProducts from "./ListProducts";

function Manage() {
  return (
    <>
      <div className="d-flex">
        <Nav />
        <ListProducts />
      </div>
    </>
  );
}

export default Manage;
