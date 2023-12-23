import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Wishlist from "./Wishlist";

export const Header = ({ listCart, wishlist }) => {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    setCarts(listCart);
  }, []);

  useEffect(() => {
    setCarts(listCart);
  }, [listCart]);

  let renderQtyCart =
    carts != undefined ? (
      carts.length > 0 ? (
        <div className="qty">{carts.length}</div>
      ) : (
        <></>
      )
    ) : (
      <></>
    );
    let renderQtyWishlist =
    wishlist != undefined ? (
      wishlist.length > 0 ? (
        <div className="qty">{wishlist.length}</div>
      ) : (
        <></>
      )
    ) : (
      <></>
    );
  let renderBoxEmptyWishlist =
    wishlist.length > 0 ? (
      // <></>
      <Wishlist wishlist={wishlist} />
    ) : (
      <>
        <p>Danh sách yêu thích trống</p>
        <NavLink to="/products" className="d-flex justify-content-center">
          <button className="btn btn-mua-ngay-header">Xem thêm sản phẩm</button>
        </NavLink>
      </>
    );
  return (
    <>
      <header>
        <div id="header">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <NavLink className="navbar-brand" to="home">
                <img
                  className="w-100"
                  src="/assets/images/logo.png"
                  alt="Xưởng mộc giá tốt"
                />
              </NavLink>

              <div
                className="collapse navbar-collapse justify-content-end"
                id="navbarNav"
              >
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <NavLink className="nav-link" to="home">
                      TRANG CHỦ
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="introduce"
                      title="GIỚI THIỆU"
                    >
                      GIỚI THIỆU
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="products"
                      title="SẢN PHẨM"
                    >
                      SẢN PHẨM
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="news?page=1"
                      title="TIN TỨC"
                    >
                      TIN TỨC
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="partner" title="ĐỐI TÁC">
                      ĐỐI TÁC
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="contact" title="LIÊN HỆ">
                      LIÊN HỆ
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="group-icon  navbar-collapse justify-content-end">
                <div className="icon icon-cart">
                  <NavLink
                    data-bs-toggle="modal"
                    to="#staticBackdrop"
                    role="button"
                  >
                    <span>
                      <i className="fa-solid fa-basket-shopping"></i>
                    </span>
                    {renderQtyCart}
                  </NavLink>
                </div>
                <div className="icon icon-wishlist">
                  <NavLink
                    data-bs-toggle="modal"
                    to="#staticBackdropWishlist"
                    role="button"
                  >
                    <span>
                      <i className="fa-regular fa-heart"></i>
                    </span>
                    {renderQtyWishlist}
                  </NavLink>
                  <div className="box box-wishlist"></div>
                </div>
                <div className="icon icon-search">
                  {/* <NavLink onClick={() => handlShowSearch("")}>
              <span>
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
            </NavLink> */}
                  <label>
                    <span>
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                  </label>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

const mapStateToProps = (state) => ({
  listCart: state.carts,
  wishlist: state.wishlist,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
