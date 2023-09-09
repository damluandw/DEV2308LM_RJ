import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: "",
      productName: "",
      quantity: 0,
      price: 0,
    };
  }

  componentWillMount = () => {
    let { renderActionName, renderProduct } = this.props;
    if (renderActionName === "Close" || renderActionName === "Update") {
      this.setState({
        productId: renderProduct.productId,
        productName: renderProduct.productName,
        quantity: renderProduct.quantity,
        price: renderProduct.price,
      });
    } else {
      this.setState({
        productId: "",
        productName: "",
        quantity: 0,
        price: 0,
      });
    }
  };
  componentWillReceiveProps = (nextProps) => {
    let { renderActionName, renderProduct } = nextProps;
    if (renderActionName === "Close" || renderActionName === "Update") {
      this.setState({
        productId: renderProduct.productId,
        productName: renderProduct.productName,
        quantity: renderProduct.quantity,
        price: renderProduct.price,
      });
    } else {
      this.setState({
        productId: "",
        productName: "",
        quantity: 0,
        price: 0,
      });
    }
  };
  hadleChange = (ev) => {
    let name = ev.target.name;
    let value = ev.target.value;
    if (name == "quantity" || name == "price") {
      value = parseFloat(value, 10);
    }
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(false, this.state);
  };

  render() {
    let { renderActionName } = this.props;
    let ischange = renderActionName == "Close" ? true: false;
    let ischangeID = false;
    if(renderActionName == "Update" || renderActionName == "Close"){
        ischangeID = true;
    }
    return (
      <div className="form col-lg-5">
        <div className="card-body border border-2 border-light m-2">
          <h3 className="mb-3 bg-light">Thông tin sản phẩm</h3>
          <div className="input-group mb-3">
            <span className="input-group-text">ID</span>
            <input
              className="form-control"
              type="text"
              name="productId"
              value={this.state.productId}
              onChange={this.hadleChange}
              placeholder="Product Id"
              readOnly = {ischangeID}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Name</span>
            <input
              className="form-control"
              type="text"
              name="productName"
              value={this.state.productName}
              onChange={this.hadleChange}
              placeholder="Product name"
              readOnly = {ischange}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Quantity</span>
            <input
              className="form-control"
              type="number"
              name="quantity"
              value={this.state.quantity}
              onChange={this.hadleChange}
              readOnly = {ischange}
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Price</span>
            <input
              className="form-control"
              type="number"
              name="price"
              value={this.state.price}
              onChange={this.hadleChange}
              readOnly = {ischange}
            />
          </div>
          <div className="input-group mb-3">
            <button
              className="btn btn-primary btn-icon-text"
              onClick={this.handleSubmit}
            >
              {renderActionName}
            </button>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text w-100 ">
              Hệ thống đã sẵn sàng
            </span>
          </div>
        </div>
      </div>
    );
  }
}
