import React from "react";
import { Link, NavLink } from "react-router-dom";

function ItemProduct({ renderProduct, onBuyProduct, onWishlist }) {
  let handleBuy = (product) => {
    onBuyProduct(product);
  };
  let handleWishlist = (product) => {
    onWishlist(product);
  };
  return (
    <>
      <div className="item-product col-lg-3">
        <div className="img-product">
          <img
            className="w-100"
            src={renderProduct.image}
            alt={renderProduct.image}
          />
        </div>
        <div className="product-info text-center">
          <Link to={`/products/propduct-detail/${renderProduct.id}`}>
            <h4>{renderProduct.title}</h4>
          </Link>
          <div className="image5">
            <p className="vote m-0">
              <span>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </span>
            </p>
          </div>
          <div className="product-describe">(Size lớn,trắng sữa)</div>
          <div className="product-price">
            {renderProduct.priceNew}
            <span>VNĐ</span>
          </div>
        </div>
        <div className="product-hover">
          <div className="product-description navbar-collapse">
            <div className="btn-product d-flex justify-content-end">
              <a href="#">
                <button className="btn btn-wishlist "
                  onClick={(ev) => handleWishlist(renderProduct)}
                  >
                  <span className="d-flex justify-content-center">
                    <i className="fa-regular fa-heart"></i>
                  </span>
                </button>
              </a>
              <NavLink
                data-bs-toggle="modal"
                to="#staticBackdrop"
                role="button"
              >
                <button
                  className="btn btn-buy"
                  onClick={(ev) => handleBuy(renderProduct)}

                >
                  <span className="d-flex justify-content-center">
                    <i className="fa-solid fa-basket-shopping"></i>
                  </span>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemProduct;
