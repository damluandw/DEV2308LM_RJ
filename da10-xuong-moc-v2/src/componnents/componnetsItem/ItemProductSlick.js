import React from "react";
import { connect } from "react-redux";
import axios from "../../api/api-xm.js";
import { Link, NavLink } from "react-router-dom";
import { act_add_wishlist, act_buy_item, act_change_notify, act_delete_item, act_update_item } from "../../actions";

export const ItemProductSlick = ({
  renderProduct,addItem,addWishList,changNotify
}) => {
  let handleBuy = (product) => {
    addItem(product,1);
  };
  let handleWishlist = (product) => {
    addWishList(product);
    changNotify("success", "Thành công", "Sản phẩm đã được thêm vào giỏ hàng");
  };
  return (
    <>
      <div className="item-product col-12 d-flex justify-content-center">
        <div className="w-90 box-item">
          <div className="img-product">
            <img
              className="w-100"
              src={axios.getUri() + renderProduct.image}
              alt={renderProduct.title}
            />
          </div>
          <div className="product-info text-center w-100 mt-3">
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
            {/* <div className="product-describe">(Size lớn,trắng sữa)</div> */}
            <div className="product-price">
              {renderProduct.priceNew.toLocaleString()}
              <span> VNĐ</span>
            </div>
          </div>

          <div className="product-hover">
            <div className="product-description navbar-collapse">
              <div className="btn-product d-flex justify-content-end">
                <button
                  className="btn btn-wishlist "
                  onClick={(ev) => handleWishlist(renderProduct)}
                >
                  <span className="d-flex justify-content-center">
                    <i className="fa-regular fa-heart"></i>
                  </span>
                </button>
                <button
                  className="btn btn-buy"
                  onClick={(ev) => handleBuy(renderProduct)}
                >
                  <span className="d-flex justify-content-center">
                    <i className="fa-solid fa-basket-shopping"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({});

const mapDispatchToProps =(dispatch) =>{
  return {
    addItem: (product, quantity) => {
      dispatch(act_buy_item(product, quantity));
    },
    addWishList: (product) => {
      dispatch(act_add_wishlist(product));
    },
    changNotify: (typeMess, title,message) => {
      dispatch(act_change_notify(typeMess, title,message));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemProductSlick);
