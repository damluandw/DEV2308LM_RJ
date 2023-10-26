import React from "react";
import styles from "./css/tatca-sanpham.css";

function AllProducts() {
  return (
    <>
      <section id="banner">
        <div className="item-banner">
          <img
            src="../images/san-pham/sp-banner.png"
            alt="Thế giới nội thất số 1 việt nam"
          />
          <div className="btn-banner">
            <button className="btn cl-blue btn-mua-ngay">mua ngay</button>
          </div>
        </div>
      </section>
      <section id="product-filter">
        <div className="filter">
          <div className="container">
            <div className="d-flex justify-content-between">
              <div className="filter-price d-flex">
                <span>Chọn mức giá:</span>
                <ul className="d-flex">
                  <li className="cl-yellow">Dưới 5 triệu</li>
                  <li className="cl-yellow">5-10 triệu</li>
                  <li className="cl-yellow">10-15 triệu</li>
                  <li className="cl-yellow">Trên 15 triệu</li>
                </ul>
              </div>
              <div className="filter-sort">
                <select className="form-select">
                  <option value="new" selected="">
                    Sắp xếp
                  </option>
                  <option value="new">Mới nhất</option>
                  <option value="pho-bien">Phổ biến nhất</option>
                  <option value="price-desc">Giá cao đến thấp</option>
                  <option value="price-asc">Giá thấp đến cao</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ./banner  */}
      <section id="products">
        <div className="products">
          <div className="container">
            <div className="d-flex justify-content-start">
              <h3>Phòng khách</h3>
            </div>
            <div className="list-product row">
              <div className="item-product col-lg-3">
                <div className="img-product">
                  <img
                    className="w-100"
                    src="/images/san-pham-noi-bat/sp-1.jpg"
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
              <div className="item-product col-lg-3">
                <div className="img-product">
                  <img
                    className="w-100"
                    src="/images/san-pham-noi-bat/sp-1.jpg"
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
              <div className="item-product col-lg-3">
                <div className="img-product">
                  <img
                    className="w-100"
                    src="/images/san-pham-noi-bat/sp-1.jpg"
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
              <div className="item-product col-lg-3">
                <div className="img-product">
                  <img
                    className="w-100"
                    src="/images/san-pham-noi-bat/sp-1.jpg"
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
              <div className="item-product col-lg-3">
                <div className="img-product">
                  <img
                    className="w-100"
                    src="/images/san-pham-noi-bat/sp-1.jpg"
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
              <div className="item-product col-lg-3">
                <div className="img-product">
                  <img
                    className="w-100"
                    src="/images/san-pham-noi-bat/sp-1.jpg"
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
              <div className="item-product col-lg-3">
                <div className="img-product">
                  <img
                    className="w-100"
                    src="/images/san-pham-noi-bat/sp-1.jpg"
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
              <div className="item-product col-lg-3">
                <div className="img-product">
                  <img
                    className="w-100"
                    src="/images/san-pham-noi-bat/sp-1.jpg"
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
            </div>
          </div>
        </div>
      </section>
      {/* ./phong khach  */}
      <section id="pages">
        <div className="pages">
          <div className="container">
            <ul className="d-flex justify-content-center">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>
                <span>
                  <i className="fa-solid fa-angle-right" />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default AllProducts;
