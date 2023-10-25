import React from "react";
import  "./css/lienhe.css";
function Contact() {
  return (
    <>
      <section id="banner-contact">
        <img
          src="images/lien-he/banner-lien-he.png"
          alt="banner-contact-lien-he.png"
          className="w-100 img-banner-contact-main"
        />
        <div className="banner-contact-box">
          <div className="container">
            <div className="item">
              <div>
                <div className="d-flex justify-content-center">
                  <img src="images/logo.png" alt="Xưởng mộc giá tốt" />
                </div>
                <h2>LIÊN HỆ</h2>
              </div>
            </div>
            <div className="box-white" />
          </div>
        </div>
      </section>
      {/* ./banner-contact  */}
      <section id="contact">
        <div className="lien-he-box">
          <div className="container">
            <div className="item-lien-he row">
              <div className="logo-lien-he col-lg-4">
                <img
                  className="w-100"
                  src="../images/lien-he/lien-he.png"
                  alt="lien-he.png"
                />
              </div>
              <div className="title-lien-he col-lg-8">
                <h3>Liên hệ với chúng tôi</h3>
                <div>
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Họ tên"
                  />
                  <input
                    className="form-control form-control-lg"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    className="form-control form-control-lg"
                    type="tel"
                    placeholder="Số điện thoại"
                  />
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    placeholder="Nội dung"
                  />
                  <button className="btn btn-lien-he">Gửi</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* lien-he */}
    </>
  );
}

export default Contact;
