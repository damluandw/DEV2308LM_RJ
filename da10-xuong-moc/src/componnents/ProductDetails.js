import React, { useEffect, useState } from "react";
import "./css/sanpham-chitiet.css";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import axioslocal from "../api/api-local";
import axios from "../api/api-xm";
import ListProductSlick from "./ListProductSlick";
import ListTitleNav from "./ListTitleNav";

function ProductDetails({ listProduct, onBuyProduct, onWishlist }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState({});
  const [productImages, setProductImages] = useState([]);
  const [img, setImg] = useState("");
  const [extensions, setExtensions] = useState([]);

  const getProduct = async () => {
    let resProducts = await axios.get("api/Products/" + id);
    setProduct(resProducts.data);
    setImg(axios.getUri() + resProducts.data.image);
    let resCategories = await axios.get(
      "api/Categories/" + resProducts.data.cid
    );
    setCategory(resCategories.data);
    let resProductImages = await axios.get("api/ProductImages/");
    let images = resProductImages.data;
    images = images.filter((x) => x.pid == id);
    setProductImages(images);
    let resExtensions = await axios.get("api/Extensions/");
    setExtensions(resExtensions.data);
    
  };
  useEffect(() => {
    getProduct();
    window.scrollTo(0, 0);
  }, [id]);

  const handleBuy = (product) => {
    onBuyProduct(product,quantity);
  };
  const handleWishlist = (product) => {
    onWishlist(product);
  };
  const renderImage = productImages.map((item, index) => {
    return (
      <div className="col-lg-3">
        <img
          className="w-100"
          src={axios.getUri() + item.image}
          alt={product.title}
          onClick={() => {
            setImg(axios.getUri() + item.image);
          }}
        />
      </div>
    );
  });
  const handleUpdateQuantity = (evt) => {
    let qty = quantity;
    if (evt == "add") qty++;
    else qty = qty == 1 ? qty : --qty;
    setQuantity(qty);
  };
  return (
    <>
      <ListTitleNav />
      {/* ./header  */}
      <section id="product">
        <div className="container">
          <div className="product">
            <h2>{product.title}</h2>
            <div className="main-product-top row">
              <div className="col-lg-6 main-product-top-left">
                <div className="img-main-product">
                  <img className="w-100 h-100" src={img} alt={product.title} />
                </div>
                <div className="img-secondary-product row my-4">
                  {renderImage}
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
                    {product.priceOld == undefined
                      ? 0
                      : product.priceOld.toLocaleString()}{" "}
                    <span>VNĐ</span>
                  </div>
                  <div id="price-new">
                    {product.priceNew == undefined
                      ? 0
                      : product.priceNew.toLocaleString()}{" "}
                    <span>VNĐ</span>
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
                <br />
                <div className="quantity-item-cart mb-2">
                  <button
                    type="button"
                    className="btn-sub btn "
                    onClick={() => handleUpdateQuantity("sub")}
                  >
                    -
                  </button>
                  <span className="mx-3">{quantity}</span>
                  <button
                    type="button"
                    className="btn-add btn "
                    onClick={() => handleUpdateQuantity("add")}
                  >
                    +
                  </button>
                </div>
                <div>
                  <NavLink
                    data-bs-toggle="modal"
                    to="#staticBackdrop"
                    role="button"
                  >
                    <button
                      className="btn btn-mua"
                      onClick={() => handleBuy(product)}
                    >
                      Đặt mua
                    </button>
                  </NavLink>
                  <NavLink>
                    <button
                      className="btn btn-wishlist"
                      onClick={() => handleWishlist(product)}
                    >
                      Yêu thích
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="main-product-bottom">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                {/* {renderExtensions1} */}
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
                  <div className="line-col" />
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
              <div className="tab-content mt-3" id="myTabContent">
                {/* {renderExtensions2} */}
                <div
                  className="tab-pane fade show active"
                  id="dac-trung"
                  role="tabpanel"
                  aria-labelledby="dac-trung-tab"
                >
                  <ul>
                    <li>- Bàn cà phê cũng đơn giản với kệ nhở</li>
                    <li>- Phong cách hình học tối giản</li>
                    <li>
                      - Kệ bên trong có kích thước hoàn hảo cho tạp chí, đế lót
                      ly và các phụ kiện phòng khách khac
                    </li>
                    <li>
                      - Cóa thể được sử dụng như một bàn TV thấp - Kệ mỏng hoàn
                      hoản để chứa một hộp hàng đầu hoặc đầu phát blu-ray
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
                  thông số
                </div>
                <div
                  className="tab-pane fade"
                  id="bao-quan"
                  role="tabpanel"
                  aria-labelledby="bao-quan-tab"
                >
                  bảo quản
                </div>
                <div
                  className="tab-pane fade"
                  id="bao-hanh"
                  role="tabpanel"
                  aria-labelledby="bao-hanh-tab"
                >
                  bảo hành
                </div>
                <div
                  className="tab-pane fade"
                  id="cam-ket"
                  role="tabpanel"
                  aria-labelledby="cam-ket-tab"
                >
                  cam kết
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
                <NavLink
                  to={`/products/${category.slug}`}
                  // onClick={() => navigate("/products/" + category.slug)}
                >
                  XEM TẤT CẢ
                </NavLink>
              </div>
            </div>
            <div className="list-product">
              <ListProductSlick
                listProduct={listProduct}
                arrows={true}
                filterCID={category.id}
                filterNoiBat={null}
                onBuyProduct={handleBuy}
                onWishlist={handleWishlist}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
