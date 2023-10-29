import React from "react";
import "./css/titlenav.css";

function ListTitleNav() {
  return (
    <section id="list-title">
      <div className="container">
        <div className="list-title">
          <ul className="d-flex">
            <li>
              <a href="#">
                <span className="cl-yellow">Trang chủ</span>
              </a>
              <span className="text-secondary">&gt;</span>
            </li>
            <li>
              <a href="#">
                <span className="cl-yellow">Sản phẩm</span>
              </a>
              <span className="text-secondary">&gt;</span>
            </li>
            <li>
              <a href="#">
                <span className="cl-yellow">Bàn uống nước</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ListTitleNav;
