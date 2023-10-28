import React from "react";
import { NavLink } from 'react-router-dom'


function Header() {
  
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
                <NavLink className="nav-link" to="home" >
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
              <NavLink>
                <span>
                <i class="fa-solid fa-basket-shopping"></i>
                </span>
              </NavLink>          
            </div>
            <div className="icon icon-wishlist">
              <NavLink>
                <span>
                <i class="fa-regular fa-heart"></i>
                </span>
              </NavLink>          
            </div>
            <div className="icon icon-search">
              <NavLink>
                <span>
                <i class="fa-solid fa-magnifying-glass"></i>
                </span>
              </NavLink>          
            </div>

          </div>

        </nav>
      </div>
    </header>
  );
}

export default Header;
