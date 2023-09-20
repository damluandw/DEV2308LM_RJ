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
      quantity: 0,
    };
  }
  //hàm xử lý sự kiện cập nhật giỏ hàng
  handleUpdate = (product) => {
    this.props.updateItem(product, this.state.quantity);
    this.props.changNotify(MSG_UPDATE_SUCCESS);
  };

  //hàm xử lý sự kiện xoá sản phẩm trong giỏ hàng
  handleDelete = (product) => {
    if (window.confirm("Bạn có muốn xoá sản phẩm ra khỏi giỏ hàng không")) {
      this.props.deleteItem(product);
      this.props.changNotify(MSG_DELTE_SUCCESS);
    }
  };
  componentDidUpdate = (prevProps) => {
    if (this.props.carts !== prevProps.carts) {
      this.setState({
        quantity: this.props.renderCartItem.quantity,
      });
    }
  };

  render() {
    let { renderCartItem, rollNo } = this.props;
    // xử lý hiển thị số lượng
    let quantity =
      this.state.quantity == 0
        ? this.props.renderCartItem.quantity
        : this.state.quantity;
    
    // let quantity = renderCartItem.isChangeCart === false ? renderCartItem.quantity : this.state.quantity;

    return (
      <tr>
        <th scope="row">{rollNo}</th>
        <td>{renderCartItem.product.productName}</td>
        <td>{renderCartItem.product.price} USD</td>
        <td>
          <input
            name="cart-item-quantity-1"
            type="number"
            value={quantity}
            min={1}
            onChange={(evt) =>
              this.setState({
                quantity: evt.target.value,
              })
            }
          />
        </td>
        <td>
          <strong>{renderCartItem.product.price * quantity} USD</strong>
        </td>
        <td>
          <a
            className="label label-info update-cart-item"
            href="/#"
            data-product=""
            onClick={() => this.handleUpdate(renderCartItem.product)}
          >
            Update
          </a>
          <a
            className="label label-danger delete-cart-item"
            href="/#"
            data-product=""
            onClick={() => this.handleDelete(renderCartItem.product)}
          >
            Delete
          </a>
        </td>
      </tr>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    carts: state.cart,
  };
};
// map state trong store với props trong component
const mapDispatchToProps = (dispatch) => {
  return {
    updateItem: (product, quantity) => {
      dispatch(act_update_item(product, quantity, true));
    },
    deleteItem: (product) => {
      dispatch(act_delete_item(product));
    },
    changNotify: (content) => {
      dispatch(act_change_notify(content));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
