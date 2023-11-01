import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Cart from "./Cart";

function Header({ listCart, onDelete, onUpdate, isShowSearch, onSearch ,onShowSearch}) {
  const handleDelete = (product) => {
    onDelete(product);
  };
  const handleUpdate = (product, action) => {
    onUpdate(product, action);
  };
  let renderQtyCart =
    listCart.length > 0 ? <div className="qty">{listCart.length}</div> : <></>;
  let renderBoxEmpty =
    listCart.length > 0 ? (
      <></>
    ) : (
      <div className="box box-cart">
        <p>Giỏ hàng của bạn đang trống</p>
        <NavLink to="/products" className="d-flex justify-content-center">
          <button className="btn btn-mua-ngay-header">Mua hàng ngay</button>
        </NavLink>
      </div>
    );

  const [valueSearch, setValueSearch] = useState("");

  let renderLabel =
    valueSearch === "" ? (
      <label htmlFor="search">Bạn cần tìm sản phẩm gì?</label>
    ) : (
      <></>
    );
  const handlSearch = () => {
    onSearch(valueSearch);
  };
  const handlShowSearch = () => {
    console.log(valueSearch);
    onShowSearch();
  };

  let renderSearch = isShowSearch ? (
    <>
      <div className="search-form">
        <input
          id="search"
          type="text"
          className="search-box"
          value={valueSearch}
          onChange={(e) => setValueSearch(e.target.value)}
        />
        {renderLabel}
        <div className="btn-search-form" onClick={() => handlSearch()}>
          <NavLink to={`/search?key=${valueSearch}`}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </NavLink>
        </div>
      </div>
    </>
  ) : (
    <></>
  );

  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <NavLink className="navbar-brand" to="home">
            <img src="/images/logo.png" alt="Xưởng mộc giá tốt" />
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
                <NavLink className="nav-link" to="introduce" title="GIỚI THIỆU">
                  GIỚI THIỆU
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="products" title="SẢN PHẨM">
                  SẢN PHẨM
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="news" title="TIN TỨC">
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
              {renderBoxEmpty}
            </div>
            <div className="icon icon-wishlist">
              <NavLink>
                <span>
                  <i className="fa-regular fa-heart"></i>
                </span>
              </NavLink>
              <div className="box box-wishlist">
                <p>Danh sách yêu thích trống</p>
                <NavLink
                  to="/products"
                  className="d-flex justify-content-center"
                >
                  <button className="btn btn-mua-ngay-header">
                    Xem thêm sản phẩm
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="icon icon-search">
              <NavLink onClick={() => handlShowSearch("")}>
                <span>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
              </NavLink>
              {renderSearch}
            </div>
          </div>
        </nav>
      </div>
      <Cart
        listCart={listCart}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </header>
  );
}

export default Header;
