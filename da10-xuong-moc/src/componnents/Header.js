import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

function Header({
  listCart,
  wishlist,
  onDelete,
  onUpdate,
  isShowSearch,
  onSearch,
  onShowSearch,
  onDeleteWishlist,
}) {
  const { local } = useLocation();

  const handleDelete = (product) => {
    onDelete(product);
  };

  const handleUpdate = (product, action) => {
    onUpdate(product, action);
  };
  let renderQtyCart =
    listCart != undefined ? (
      listCart.length > 0 ? (
        <div className="qty">{listCart.length}</div>
      ) : (
        <></>
      )
    ) : (
      <></>
    );
  let renderBoxEmptyCart =
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

  const handleDeleteWishlist = (product) => {
    // console.log(product)
    onDeleteWishlist(product);
  };

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
      <Wishlist wishlist={wishlist} onDeleteWishlist={handleDeleteWishlist} />
    ) : (
      <>
        <p>Danh sách yêu thích trống</p>
        <NavLink to="/products" className="d-flex justify-content-center">
          <button className="btn btn-mua-ngay-header">Xem thêm sản phẩm</button>
        </NavLink>
      </>
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
    // setValueSearch("");
  };
  const handlShowSearch = () => {
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
          <NavLink
            to={valueSearch == "" ? local : `/search?key=${valueSearch}&page=1`}
            // to={`/search?key=${valueSearch}&page=1`}
          >
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
                <NavLink className="nav-link" to="news?page=1" title="TIN TỨC">
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
              {renderBoxEmptyCart}
            </div>
            <div className="icon icon-wishlist">
              <NavLink>
                <span>
                  <i className="fa-regular fa-heart"></i>
                </span>
                {renderQtyWishlist}
              </NavLink>
              <div className="box box-wishlist">{renderBoxEmptyWishlist}</div>
            </div>
            <div className="icon icon-search">
              {/* <NavLink onClick={() => handlShowSearch("")}>
                <span>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
              </NavLink> */}
              <label>
                <span onClick={() => handlShowSearch()}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
              </label>
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
