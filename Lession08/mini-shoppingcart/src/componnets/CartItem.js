import React, { Component } from "react";
import { MSG_DELTE_SUCCESS, MSG_UPDATE_SUCCESS } from "../constants/message";
import {
  act_change_notify,
  act_delete_item,
  act_update_item,
} from "../actions";
import { connect } from "react-redux";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1,
    };
  }
  componentWillMount = () => {
    let { renderCartItem } = this.props;
    this.setState({
      quantity: renderCartItem.quantity,
    });
  };
  componentWillReceiveProps = (nextProps) => {
    let { renderCartItem } = nextProps;
    this.setState({
      quantity: renderCartItem.quantity,
    });
  };

  handleChange = (e) => {
    this.setState({
      quantity: e.target.value,
    });
  };
  handleUpdate = (e) => {
    let { renderCartItem } = this.props;
    this.props.updateItem(renderCartItem.product, this.state.quantity);
    this.props.changNotify(MSG_UPDATE_SUCCESS);
  };

  handleDelete = (e) => {
    let { renderCartItem } = this.props;
    this.props.deleteItem(renderCartItem.product);
    this.props.changNotify(MSG_DELTE_SUCCESS);
  };

  render() {
    let { renderCartItem, stt } = this.props;
    // console.log(renderCartItem);
    let subTotal = renderCartItem.product.price * this.state.quantity;
    return (
      <tr>
        <th scope="row">{stt}</th>
        <td>{renderCartItem.product.productName}</td>
        <td>{renderCartItem.product.price} USD</td>
        <td>
          <input
            name="cart-item-quantity-1"
            type="number"
            value={this.state.quantity}
            min={1}
            onChange={this.handleChange}
          />
        </td>
        <td>
          <strong>{subTotal} USD</strong>
        </td>
        <td>
          <a
            className="label label-info update-cart-item"
            href="#"
            data-product=""
            onClick={this.handleUpdate}
          >
            Update
          </a>
          <a
            className="label label-danger delete-cart-item"
            href="#"
            data-product=""
            onClick={this.handleDelete}
          >
            Delete
          </a>
        </td>
      </tr>
    );
  }
}
// map state trong store với props trong component
const mapDispatchToProps = (dispatch) => {
  return {
    updateItem: (product, quantity) => {
      dispatch(act_update_item(product, quantity));
    },
    deleteItem: (product) => {
      dispatch(act_delete_item(product));
    },
    changNotify: (content) => {
      dispatch(act_change_notify(content));
    },
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
