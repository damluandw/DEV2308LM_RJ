import React, { useEffect, useState } from "react";
import BannerProducts from "./BannerProducts";
import "./css/sanpham.css";
import ListProductSlick from "./ListProductSlick";

function Products({ listProduct }) {
  const [listPhongKhach, setlistPhongKhach] = useState([]);

  // useEffect(() => {
  //   let listPhongKhach = listProduct;
  //   listPhongKhach.filter((x) => x.cid == 7);
  // }, []);
  useEffect(() => {
    console.log("list", listProduct);
  }, []);

  return (
    <>
      <BannerProducts />
      {/* ./banner  */}
      <div id="list-products">
        <section id="products-phong-khach">
          <div className="products">
            <div className="container">
              <div className="d-flex justify-content-between">
                <h3>Phòng khách</h3>
                <div className="xem-tat-ca cl-blue">
                  <a href="#">XEM TẤT CẢ</a>
                </div>
              </div>

              <ListProductSlick
                listProduct={listPhongKhach}
                arrows={false}
                filterCID={7}
              />
            </div>
          </div>
        </section>
        {/* ./phong khach  */}
        <section id="products-phong-ngu">
          <div className="products">
            <div className="container">
              <div className="d-flex justify-content-between">
                <h3>Phòng ngủ</h3>
                <div className="xem-tat-ca cl-blue">
                  <a href="#">XEM TẤT CẢ</a>
                </div>
              </div>
              <div className="list-product row">
                <div className="item-product col-lg-3">
                  <div className="img-product">
                    <img
                      src="../images/san-pham-noi-bat/sp-1.jpg"
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
                      src="../images/san-pham-noi-bat/sp-1.jpg"
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
                      src="../images/san-pham-noi-bat/sp-1.jpg"
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
                      src="../images/san-pham-noi-bat/sp-1.jpg"
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
        {/* ./phong ngu  */}
        <section id="products-phong-bep">
          <div className="products">
            <div className="container">
              <div className="d-flex justify-content-between">
                <h3>Phòng bếp</h3>
                <div className="xem-tat-ca cl-blue">
                  <a href="#">XEM TẤT CẢ</a>
                </div>
              </div>
              <div className="list-product row">
                <div className="item-product col-lg-3">
                  <div className="img-product">
                    <img
                      src="../images/san-pham-noi-bat/sp-1.jpg"
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
                      src="../images/san-pham-noi-bat/sp-1.jpg"
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
                      src="../images/san-pham-noi-bat/sp-1.jpg"
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
                      src="../images/san-pham-noi-bat/sp-1.jpg"
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
        {/* ./phong bep  */}
        <section id="products-phong-tam">
          <div className="products">
            <div className="container">
              <div className="d-flex justify-content-between">
                <h3>Phòng tắm</h3>
                <div className="xem-tat-ca cl-blue">
                  <a href="#">XEM TẤT CẢ</a>
                </div>
              </div>
              <div className="list-product row">
                <div className="item-product col-lg-3">
                  <div className="img-product">
                    <img
                      src="../images/san-pham-noi-bat/sp-1.jpg"
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
                      src="../images/san-pham-noi-bat/sp-1.jpg"
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
                      src="../images/san-pham-noi-bat/sp-1.jpg"
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
                      src="../images/san-pham-noi-bat/sp-1.jpg"
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
        {/* ./phong tắm  */}
        <section id="products-tre-em">
          <div className="products">
            <div className="container">
              <div className="d-flex justify-content-between">
                <h3>trẻ em</h3>
                <div className="xem-tat-ca cl-blue">
                  <a href="#">XEM TẤT CẢ</a>
                </div>
              </div>
              <div className="list-product row">
                <div className="item-product col-lg-3">
                  <div className="img-product">
                    <img
                      src="../images/san-pham-noi-bat/sp-1.jpg"
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
                      src="../images/san-pham-noi-bat/sp-1.jpg"
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
                      src="../images/san-pham-noi-bat/sp-1.jpg"
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
                      src="../images/san-pham-noi-bat/sp-1.jpg"
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
        {/* ./tre em  */}
        <section id="products-van-phong">
          <div className="products">
            <div className="container">
              <div className="d-flex justify-content-between">
                <h3>Văn phòng</h3>
                <div className="xem-tat-ca cl-blue">
                  <a href="#">XEM TẤT CẢ</a>
                </div>
              </div>
              <div className="list-product row">
                <div className="item-product col-lg-3">
                  <div className="img-product">
                    <img
                      src="../images/san-pham-noi-bat/sp-1.jpg"
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
                      src="../images/san-pham-noi-bat/sp-1.jpg"
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
                      src="../images/san-pham-noi-bat/sp-1.jpg"
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
                      src="../images/san-pham-noi-bat/sp-1.jpg"
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
        {/* ./van phong  */}
        <section id="products-cau-thang">
          <div className="products">
            <div className="container">
              <div className="d-flex justify-content-between">
                <h3>Cầu thang</h3>
                <div className="xem-tat-ca cl-blue">
                  <a href="#">XEM TẤT CẢ</a>
                </div>
              </div>
              <div className="list-product row">
                <div className="item-product col-lg-3">
                  <div className="img-product">
                    <img
                      src="../images/san-pham-noi-bat/sp-1.jpg"
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
                      src="../images/san-pham-noi-bat/sp-1.jpg"
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
                      src="../images/san-pham-noi-bat/sp-1.jpg"
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
                      src="../images/san-pham-noi-bat/sp-1.jpg"
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
        {/* ./cau thang  */}
        <section id="products-trang-tri">
          <div className="products">
            <div className="container">
              <div className="d-flex justify-content-between">
                <h3>Trang trí</h3>
                <div className="xem-tat-ca cl-blue">
                  <a href="#">XEM TẤT CẢ</a>
                </div>
              </div>
              <div className="list-product row">
                <div className="item-product col-lg-3">
                  <div className="img-product">
                    <img
                      src="../images/san-pham-noi-bat/sp-1.jpg"
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
                      src="../images/san-pham-noi-bat/sp-1.jpg"
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
                      src="../images/san-pham-noi-bat/sp-1.jpg"
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
                      src="../images/san-pham-noi-bat/sp-1.jpg"
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
        {/* ./trang tri  */}
      </div>
    </>
  );
}

export default Products;
