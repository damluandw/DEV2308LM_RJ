import React, { Component } from "react";

export default class CartTotal extends Component {
  render() {
    let { cart } = this.props;
    let elementCartInfo = (
      <tr>
        <th colSpan={6}>Empty product in your cart</th>
      </tr>
    );
    let subTotal =0;
    cart.forEach(item => {
        subTotal+=item.product.price * item.quantity
    });
    if (cart != null && cart.length > 0) {
      elementCartInfo = (
        <tr>
          <td colSpan={4}>
            There are <b>{cart.length}</b> items in your shopping cart.
          </td>
          <td colSpan={2} className="total-price text-left">
            {subTotal} USD
          </td>
        </tr>
      );
    }
    return <>{elementCartInfo}</>;
  }
}
