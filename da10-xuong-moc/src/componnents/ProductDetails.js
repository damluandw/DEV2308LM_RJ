import React, { useEffect, useState } from 'react'
import "./css/sanpham-chitiet.css";
import { useParams } from 'react-router-dom';
import axioslocal from "../api/api-local";
import ListProductSlick from './ListProductSlick';

function ProductDetails({ listProduct }) {
  const { id } = useParams();

  // const [cid, setCID] = useState(0);


  const [product, setProduct] = useState({});
  const getProduct = async () => {
    let response = await axioslocal.get("Products/" + id);
    setProduct(response.data);

    console.log("product", response.data);
  };
  useEffect(() => {
    getProduct();
  }, [id]);
  return (
    <>
      <section>
        <section id="list-title">
          <div className="container">
            <div className="list-title">
              <div>
                <a href="#">
                  <span className="cl-yellow">Trang chủ</span>
                </a>
                <span className="text-secondary">&gt;</span>
                <a href="#">
                  <span className="cl-yellow">Sản phẩm</span>
                </a>
                <span className="text-secondary">&gt;</span>
                <a href="#">
                  <span className="cl-yellow">Bàn uống nước</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* ./header  */}
      <section id="product">
        <div className="container">
          <div className="product">
            <h2>{product.title}</h2>
            <div className="main-product-top row">
              <div className="col-lg-6 main-product-top-left">
                <div className="img-main-product">
                  <img
                    className="w-100"
                    src="/images/san-pham-chi-tiet/product-1.png"
                    alt="/images/san-pham-chi-tiet/product-1.png"
                  />
                </div>
                <div className="img-secondary-product row my-4">
                  <div className="col-lg-3">
                    <img
                      className="w-100"
                      src="/images/san-pham-chi-tiet/sp-1.png"
                      alt="sp-1.png"
                    />
                  </div>
                  <div className="col-lg-3">
                    <img
                      className="w-100"
                      src="/images/san-pham-chi-tiet/sp-2.png"
                      alt="sp-2.png"
                    />
                  </div>
                  <div className="col-lg-3">
                    <img
                      className="w-100"
                      src="/images/san-pham-chi-tiet/sp-3.png"
                      alt="sp-3.png"
                    />
                  </div>
                  <div className="col-lg-3">
                    <img
                      className="w-100"
                      src="/images/san-pham-chi-tiet/sp-4.png"
                      alt="sp-4.png"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 main-product-top-right">
                <div className="chat-lieu">
                  <div>
                    <b>Chất liệu</b>
                  </div>
                  <div className="list-chat-lieu">
                    <button className="btn btn-chat-lieu">Gỗ sồi</button>
                    <button className="btn btn-chat-lieu">Gỗ lim</button>
                  </div>
                </div>
                <div className="price">
                  <div id="price-old">
                  {product.priceOld} <span>VNĐ</span>
                  </div>
                  <div id="price-new">
                  {product.priceNew} <span>VNĐ</span>
                  </div>
                </div>
                <label id="bao-hanh">
                  <div>
                    <img
                      src="/images/san-pham-chi-tiet/bao-hanh.png"
                      alt="bao-hanh.png"
                    />
                    <span>Bảo hành sản phẩm lên tới 36 tháng</span>
                  </div>
                </label>
              </div>
            </div>
            <div className="main-product-bottom">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item d-flex" role="presentation">
                  <button
                    className="nav-link active"
                    id="dac-trung-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#dac-trung"
                    type="button"
                    role="tab"
                    aria-controls="dac-trung"
                    aria-selected="true"
                  >
                    Đặc trưng
                  </button>
                </li>
                <li className="nav-item d-flex" role="presentation">
                  <button
                    className="nav-link"
                    id="thong-so-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#thong-so"
                    type="button"
                    role="tab"
                    aria-controls="thong-so"
                    aria-selected="false"
                  >
                    Thông số
                  </button>
                  <div className="line-col" />
                </li>
                <li className="nav-item d-flex" role="presentation">
                  <button
                    className="nav-link"
                    id="bao-quan-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#bao-quan"
                    type="button"
                    role="tab"
                    aria-controls="bao-quan"
                    aria-selected="false"
                  >
                    Bảo quản
                  </button>
                  <div className="line-col" />
                </li>
                <li className="nav-item d-flex" role="presentation">
                  <button
                    className="nav-link"
                    id="bao-hanh-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#bao-hanh"
                    type="button"
                    role="tab"
                    aria-controls="bao-hanh"
                    aria-selected="false"
                  >
                    Bảo hành
                  </button>
                  <div className="line-col" />
                </li>
                <li className="nav-item d-flex" role="presentation">
                  <button
                    className="nav-link"
                    id="cam-ket-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#cam-ket"
                    type="button"
                    role="tab"
                    aria-controls="cam-ket"
                    aria-selected="false"
                  >
                    Cảm kết
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="dac-trung"
                  role="tabpanel"
                  aria-labelledby="dac-trung-tab"
                >
                  <ul>
                    <li>- Bàn cà phê cugnws đơn giản với kệ nhở</li>
                    <li>- Phong cách hình học tối giản</li>
                    <li>
                      - Kệ bên trong có kích thước hoàn hảo cho tạp chí, đế lót ly
                      và các phụ kiện phòng khách khac
                    </li>
                    <li>
                      - Cóa thể được sử dụng như một bàn TV thấp - Kệ mỏng hoàn hoản
                      để chứa một hộp hàng đầu hoặc đầu phát blu-ray
                    </li>
                    <li>- Làm bằng gỗ Sheesham cao cấp</li>
                    <li>- Không cần lắp ráp</li>
                  </ul>
                </div>
                <div
                  className="tab-pane fade"
                  id="thong-so"
                  role="tabpanel"
                  aria-labelledby="thong-so-tab"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="bao-quan"
                  role="tabpanel"
                  aria-labelledby="bao-quan-tab"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="bao-hanh"
                  role="tabpanel"
                  aria-labelledby="bao-hanh-tab"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="cam-ket"
                  role="tabpanel"
                  aria-labelledby="cam-ket-tab"
                >
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ./banner  */}
      <section id="products-relate">
        <div className="products">
          <div className="container">
            <div className="d-flex justify-content-between">
              <h3>Sản phẩm tương tự</h3>
              <div className="xem-tat-ca cl-blue">
                <a href="#">XEM TẤT CẢ</a>
              </div>
            </div>
            <div className="list-product row">
              <ListProductSlick listProduct={listProduct} arrows={true} filterCID={product.cid} filterNoiBat={null} />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default ProductDetails