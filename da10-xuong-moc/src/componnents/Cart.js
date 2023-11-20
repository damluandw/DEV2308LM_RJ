import React from "react";
import ItemCart from "./ItemCart";
import "./css/cart.css";
import { NavLink } from "react-router-dom";

function Cart({ listCart, onDelete, onUpdate }) {
  const handleDelete = (product) => {
    onDelete(product);
  };
  const handleUpdate = (product, action) => {
    onUpdate(product, action);
  };

  let render =
    listCart.length > 0 ? (
      listCart.map((item, index) => {
        return (
          <ItemCart
            key={item.id}
            renderCart={item}
            rollNo={index + 1}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        );
      })
    ) : (
      <>
        {" "}
        <div className="item-cart">
          <div className="d-flex justify-content-center">
            Không có sản phẩm trong giỏ hàng
          </div>
        </div>
      </>
    );
  return (
    <>
      <div id="cart-modal">
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Giỏ Hàng
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body" />
              {render}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <NavLink
                  to="/checkout"
                  className="text-dark"
                  data-bs-dismiss="modal"
                >
                  <button type="button" className="btn btn-buy-modal">
                    Thanh Toán
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
