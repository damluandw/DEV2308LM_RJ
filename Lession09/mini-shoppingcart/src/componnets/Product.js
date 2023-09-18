import React, { Component } from 'react'
import { MSG_BUY_SUCCESS } from '../constants/message';
import { connect } from "react-redux";
import { act_buy_item, act_change_notify } from "../actions";

 class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }
  // hàm xử lý sự kiện mua hàng
  handleBuy = (product) => {
    // thực hiện mua hàng
    this.props.buyItem(product, this.state.quantity);
    this.props.changNotify(MSG_BUY_SUCCESS);
  };
  render() {
    let { renderProduct } = this.props;
    //render cóp điều kiện
    let elementBuy = <span className="price"> {renderProduct.price} USD</span>;
    if (renderProduct.quantity > 0) {
      elementBuy = (
        <>
          <input
            name="quantity-product-1"
            type="number"
            value={`${this.state.quantity}`}
            onChange={(ev) => this.setState({ quantity: ev.target.value })}
            min="1"
          />
          <button
            data-product={1}
            className="btn btn-success"
            onClick={(ev) => this.handleBuy(renderProduct)}
          >
            Mua hàng
          </button>
          <a data-product={1} href="/#" className="price">
            {" "}
            {renderProduct.price} USD{" "}
          </a>
        </>
      );
    }

    return (
      <div className="media product">
        <div className="media-left">
          <a href="/#">
            <img
              className="media-object"
              // src=''
              src={`images/${renderProduct.image}`}
              alt="charmander"
            />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{renderProduct.productName}</h4>
          <p>{renderProduct.descriptions}</p>
          {elementBuy}
        </div>
      </div>
    );
  }
}
// mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    // bắn action mua hàng đến reducer
    buyItem: (product, quantity) => {
      dispatch(act_buy_item(product, quantity));
    },
    // bắn action thay đổi notify đến reducer
    changNotify: (content) => {
      dispatch(act_change_notify(content));
    },
  };
};

export default connect(null, mapDispatchToProps)(Product);