import React, { Component } from "react";

export default class Product extends Component {
  handleViewOrEdit = (toggle,product, actionName) => {
    this.props.onViewOrEdit(toggle,product, actionName);
  };
  handleDelete = (product) => {
    this.props.onDelete(product);
  };
  render() {
    let { renderProduct, stt } = this.props;

    return (
      <>
        <tr className="text-center">
          <td>{stt}</td>
          <td>{renderProduct.productId}</td>
          <td>{renderProduct.productName}</td>
          <td>{renderProduct.quantity}</td>
          <td>
            <sup className="text-danger fw-bold">$</sup> {renderProduct.price}
          </td>
          <td>
            <sup className="text-danger fw-bold">$</sup>
            {renderProduct.price * renderProduct.quantity}
          </td>
          <td>
            <div className="template-demo">
              <button
                type="button"
                className="btn btn-info btn-icon-text me-2"
                onClick={() => this.handleViewOrEdit(true,renderProduct, "Close")}
              >
                View
              </button>
              <button
                type="button"
                className="btn btn-primary btn-icon-text me-2"
                onClick={() => this.handleViewOrEdit(true,renderProduct, "Update")}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger btn-icon-text me-2"
                onClick={() => this.handleDelete(renderProduct)}
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      </>
    );
  }
}
