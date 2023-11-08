import React from "react";
import { NavLink } from "react-router-dom";

function ItemWishlistShow({ key, render, rollNo, onDelete }) {
  const handleDelete = (product) => {
    onDelete(product);
  };
  return (
    <>
      <div className="item-cart">
        <div className="d-flex justify-between">
          <div className="image-item-cart margin-auto">
            <img className="w-100" src={render.product.image} alt="" />
          </div>
          <div className="title-item-cart margin-auto">
            <NavLink
              to={`/products/propduct-detail/${render.product.id}`}
              className="text-dark"
              data-bs-dismiss="modal"
            >
              <h5>{render.product.title}</h5>
            </NavLink>
          </div>
          <div className="price-item-cart margin-auto">
            <span>{render.product.priceNew.toLocaleString()}</span>
            <span> VNĐ</span>
          </div>
          <div className="del-wishlist margin-auto">
            <button
              type="button"
              className="btn-del btn"
              onClick={() => handleDelete(render.product)}
            >
              <span>
                <i className="fa-regular fa-heart" />
              </span>
              <span>
                <i className="fa-solid fa-heart"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemWishlistShow;
