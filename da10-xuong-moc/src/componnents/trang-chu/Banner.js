import React from "react";
import "../../assets/css/index.css"
function Banner() {
  return (
    <section id="banner">
      <img
        src="../images/banner.png"
        alt="Thế giới nội thất số 1 việt nam"
        className="w-100"
      />
      <div className="banner-box">
        <div className="container">
          <div className="item">
            <h2>THẾ GIỚI NỘI THẤT SỐ 1 VIỆT NAM</h2>
            <h2>HOÀNG HOAN</h2>
            <p>
              Sứ mệnh của chúng tôi là kết hợp hài hòa giữa ý tưởng và mong muốn
              của khách hàng, đem lại những phút giây thư giãn tuyệt vời bên gia
              đình và những người thân yêu.
            </p>
            <a href="#">LIÊN HỆ NGAY</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
