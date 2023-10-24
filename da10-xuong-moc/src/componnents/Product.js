import React from "react";

function Product() {
  return (
    <>
      <div className="item-product col-lg-3">
        <div className="img-product">
          <img
            src="/DA10-XuongMoc/images/san-pham-noi-bat/sp-1.jpg"
            alt="sp-1.jpg"
          />
        </div>
        <div className="product-info text-center">
          <h4>Giường Châu Âu</h4>
          <div className="image5">
            <p className="vote m-0">
              <span>
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </span>
            </p>
          </div>
          <div className="product-describe">(Size lớn,trắng sữa)</div>
          <div className="product-price">
            8.999.000
            <span>VNĐ</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
