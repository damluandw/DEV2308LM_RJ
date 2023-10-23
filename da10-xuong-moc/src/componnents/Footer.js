import React from "react";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row py-5">
          <div className="col-lg-4 thong-tin-chung">
            <h6 className="cl-white">Thông tin chung</h6>
            {/* <div class="footer-line"></div> */}
            <div className="cl-white title-cong-ty">
              <b>CÔNG TY TNHH HOÀNG HOAN</b>
            </div>
            <ul>
              <li>
                <span>
                  <i className="fa-solid fa-phone cl-white" />
                </span>
                <a className="cl-white" href="tel:0936596425">
                  09999.999.999
                </a>
              </li>
              <li>
                <span>
                  <i className="fa-solid fa-envelope cl-white" />
                </span>
                <a className="cl-white" href="mail:buoidienvn@gmail.com">
                  cskh@hoanghoan.vn
                </a>
              </li>
              <li className="d-flex">
                <span>
                  <i className="cl-white fa-solid fa-location-dot" />
                </span>
                <address className="cl-white">
                  Số 1 Nguyễn Trãi, Thanh Xuân, Hà Nội
                </address>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 footer-about-us">
            <h6 className="cl-white">Về chúng tôi</h6>
            {/* <div class="footer-line"></div> */}
            <ul>
              <li>
                <a className="cl-white" href="#">
                  Giới thiêu
                </a>
              </li>
              <li>
                <a className="cl-white" href="#">
                  Sản phẩm
                </a>
              </li>
              <li>
                <a className="cl-white" href="#">
                  Tin tức
                </a>
              </li>
              <li>
                <a className="cl-white" href="#">
                  Đối tác
                </a>
              </li>
              <li>
                <a className="cl-white" href="#">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 ket-noi">
            <h6 className="cl-white">Kết nối với chúng tôi</h6>
            {/* <div class="footer-line"></div> */}
            <ul className="d-flex">
              <li className="d-flex flex-column justify-content-center">
                <a href="#">
                  <img src="../images/icon-facebook.png" alt="zalo-facebook" />
                </a>
              </li>
              <li className="d-flex flex-column justify-content-center">
                <a href="#">
                  <img src="../images/icon-zalo.png" alt="zalo-icon" />
                </a>
              </li>
              <li className="d-flex flex-column justify-content-center">
                <a href="#">
                  <img src="../images/icon-mail.png" alt="zalo-mail" />
                </a>
              </li>
            </ul>
            <div className="icon-da-thong-bao">
              <img src="../images/icon-da-thong-bao.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
