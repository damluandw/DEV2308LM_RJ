import React from "react";

function Banner() {
  return (
    <>
      <section id="banner">
        <div className="item-banner">
          <img
            src="../DA10-XuongMoc/images/san-pham/sp-banner.png"
            alt="Thế giới nội thất số 1 việt nam"
          />
          <div className="btn-banner">
            <button className="btn cl-blue btn-mua-ngay">mua ngay</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
