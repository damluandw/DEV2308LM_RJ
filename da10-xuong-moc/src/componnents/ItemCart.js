import React from "react";
import { NavLink } from "react-router-dom";
import axios from "../api/api-xm";

function ItemCart({ key, renderCart, rollNo, onDelete, onUpdate }) {
  const handleDelete = (product) => {
    onDelete(product);
  };
  const handleUpdate = (product, action) => {
    onUpdate(product, action);
  };
  return (
    <>
      <div className="item-cart" >
        <div className="d-flex justify-content-around">
          <div className="image-item-cart">
            <img className="w-100" src={axios.getUri() + renderCart.product.image} alt="" />
          </div>
          <div className="title-item-cart">
            <NavLink to={`/products/propduct-detail/${renderCart.product.id}`} className="text-dark" data-bs-dismiss="modal"><h5>{renderCart.product.title}</h5></NavLink>
          </div>
          <div className="price-item-cart">
            <span>{renderCart.product.priceNew.toLocaleString()}</span>
            <span> VNĐ</span>
          </div>
          <div className="quantity-item-cart">
            <button type="button" className="btn-sub btn"
              onClick={() => handleUpdate(renderCart.product, "sub")}>
              -
            </button>
            <span>{renderCart.quantity} </span>
            <button type="button" className="btn-add btn"
              onClick={() => handleUpdate(renderCart.product, "add")}>
              +
            </button>
          </div>
          <div className="del-cart">
            <button
              type="button"
              className="btn-del btn"
              onClick={() => handleDelete(renderCart.product)}
            >
              <span>
                <i className="fa-solid fa-trash-can" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCart;
