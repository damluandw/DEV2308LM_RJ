import React from "react";

function Header() {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="#">
            <img src="../images/logo.png" alt="Xưởng mộc giá tốt" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="\" title="TRANG CHỦ">
                  TRANG CHỦ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="\introduce" title="GIỚI THIỆU">
                  GIỚI THIỆU
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="\products" title="SẢN PHẨM">
                  SẢN PHẨM
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="\news" title="TIN TỨC">
                  TIN TỨC
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="\partner" title="ĐỐI TÁC">
                  ĐỐI TÁC
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="\contact" title="LIÊN HỆ">
                  LIÊN HỆ
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
