import React, { Component } from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import Notify from "./Notify";
//connect
import { connect } from "react-redux";

class Cart extends Component {
  render() {
    let { cart } = this.props;
    let elementCart = cart.map((cartItem, index) => {
      return <CartItem key={index} renderCartItem={cartItem} stt={index + 1} />;
    });
    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h1 className="panel-title">Your Cart</h1>
          </div>
          <div className="panel-body">
            <table className="table">
              <thead>
                <tr>
                  <th width="4%">#</th>
                  <th>Pokemon</th>
                  <th width="15%">Price</th>
                  <th width="4%">Quantity</th>
                  <th width="20%">Subtotal</th>
                  <th width="25%">Action</th>
                </tr>
              </thead>
              <tbody id="my-cart-body">
                {/* CART BODY */}
                {elementCart}
              </tbody>
              <tfoot id="my-cart-footer">
                {/* CART FOOTER */}
                <CartTotal cart={cart} />
              </tfoot>
            </table>
          </div>
        </div>
        <Notify />
      </div>
    );
  }
}
// map state trong store với props trong component
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

export default connect(mapStateToProps, null)(Cart);
