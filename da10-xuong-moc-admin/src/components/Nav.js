import React from "react";
import "./css/style.css";
function Nav() {
  return (
    <>
      <div className="left-side-bar">
        <div className="brand-logo">        
          <div className="close-sidebar" data-toggle="left-sidebar-close">
            <i className="ion-close-round" />
          </div>
        </div>
        <div className="menu-block customscroll">
          <div className="sidebar-menu">
            
            <ul id="accordion-menu">
              <li>
                <a href="#" className="dropdown-toggle no-arrow">
                  <span className="micon dw dw-invoice" />
                  <span className="mtext">Bảng điều khiển</span>
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-toggle no-arrow">
                  <span className="micon dw dw-invoice" />
                  <span className="mtext">Quản lý tài khoản</span>
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-toggle no-arrow">
                  <span className="micon dw dw-invoice" />
                  <span className="mtext">Quản lý banner</span>
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-toggle no-arrow">
                  <span className="micon dw dw-invoice" />
                  <span className="mtext">Quản lý giới thiệu</span>
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-toggle no-arrow">
                  <span className="micon dw dw-invoice" />
                  <span className="mtext">Danh mục tin tức</span>
                </a>
              </li>
              <li>
                <a href="#" className="dropdown-toggle no-arrow">
                  <span className="micon dw dw-invoice" />
                  <span className="mtext">Danh sách khách hàng</span>
                </a>
              </li>
              <li class="dropdown">
                <a href="javascript:;" class="dropdown-toggle">
                  <span class="micon dw dw-edit2"></span>
                  <span class="mtext">Quản lý sản phẩm</span>
                </a>
                <ul class="submenu">
                  <li>
                    <a href="form-basic.html">Danh mục sản phẩm</a>
                  </li>
                  <li>
                    <a href="advanced-components.html">Thêm sản phẩm</a>
                  </li>
                 
                </ul>
              </li>
              <li>
                <a href="#" className="dropdown-toggle no-arrow">
                  <span className="micon dw dw-invoice" />
                  <span className="mtext">Quản lý giỏ hàng</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
