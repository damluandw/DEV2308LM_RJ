import React from "react";
import { NavLink } from "react-router-dom";
import axios from "../api/api-xm";

function ItemWishlist({key, item, onDeleteWishlist}) {
  const handleDelete = (product) => {
    onDeleteWishlist(product);
  };
  return (
    <>
      <div className="box-item-wishlist w-100 d-flex justify-content-around my-3">
        <div className="image-item-wishlist margin-auto">
          <img className="w-100" src={axios.getUri() + item.product.image} alt="" />
        </div>
        <div className="title-item-wishlist margin-auto">
        <NavLink
              to={`/products/propduct-detail/${item.product.id}`}
              className="text-dark"
            >
              <h5>{item.product.title}</h5>
            </NavLink>
        </div>
        <div className="del-wishlist margin-auto">
          <button
            type="button"
            className="btn-del btn"
            onClick={() => handleDelete(item.product)}
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
    </>
  );
}

export default ItemWishlist;
