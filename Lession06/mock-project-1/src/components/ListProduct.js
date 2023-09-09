import React, { Component } from "react";
import Product from "./Product";

export default class ListProduct extends Component {
  handleViewOrEdit = (toggle,product, actionName) => {
    this.props.onViewOrEdit(toggle,product, actionName);
  };
  handleDelete = (product) => {
    this.props.onDelete(product);
  };
  render() {
    let { renderProducts } = this.props;
    // console.log("ListPro:", renderProducts);
    let elementProduct = renderProducts.map((product, index) => {
      return (
        <Product
          key={index}
          renderProduct={product}
          stt={index + 1}
          onViewOrEdit={this.handleViewOrEdit}
          onDelete={this.handleDelete}
        />
      );
    });
    const totalQuantity = renderProducts.reduce(
      (total, currentValue) => (total = total + currentValue.quantity),
      0
    );
    const totalPrice = renderProducts.reduce(
      (total, currentValue) => (total = total + currentValue.price),
      0
    );
    const totalSub = renderProducts.reduce(
      (total, currentValue) =>
        (total = total + currentValue.price * currentValue.quantity),
      0
    );
    return (
      <div className="list-product col-lg-7 ">
        <div className="card-body border border-2 border-light m-2">
          <h3 className="card-title bg-light mb-3">Danh sách sản phẩm</h3>
          <div className="table-responsive pt-3">
            <table className="table table-bordered">
              <thead>
                <tr className="text-center">
                  <th>#</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Subtotal</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{elementProduct}</tbody>
              <tfoot>
                <tr>
                  <td colSpan={3} className="fw-bold text-end text-center">
                    Total
                  </td>
                  <td className="fw-bold text-center"> {totalQuantity}</td>
                  <td className="fw-bold text-center">
                    <sup className="text-danger fw-bold">$</sup> {totalPrice}
                  </td>
                  <td className="fw-bold text-center">
                    <sup className="text-danger fw-bold">$</sup> {totalSub}
                  </td>
                  <td />
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
