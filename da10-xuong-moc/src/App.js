// import logo from './logo.svg';
import './App.css';
import Header from "./componnents/Header";
import Footer from "./componnents/Footer";
import Banner from "./componnents/trang-chu/Banner";

function App() {
  return (
    <>
      <Header />
      <Banner />
      {/* ./banner  */}
      <section id="catelog">
        <div className="catalog-box">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="item">
                  <img
                    src="images/loai-sp/icon-phong-khach.png"
                    alt="Phòng khách"
                  />
                  <h4>
                    <a className="cl-blue" href="#" title="Phòng khách">
                      Phòng khách
                    </a>
                  </h4>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <img
                    src="images/loai-sp/icon-phong-ngu.png"
                    alt="icon-phong-ngu.png"
                  />
                  <h4>
                    <a className="cl-blue" href="#" title="Phòng ngủ">
                      Phòng ngủ
                    </a>
                  </h4>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <img
                    src="images/loai-sp/icon-phong-bep.png"
                    alt="icon-phong-bep.png"
                  />
                  <h4>
                    <a className="cl-blue" href="#" title="Phòng bếp">
                      Phòng bếp
                    </a>
                  </h4>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <img
                    src="images/loai-sp/icon-phong-tam.png"
                    alt="Phòng tắm"
                  />
                  <h4>
                    <a className="cl-blue" href="#" title="Phòng tắm">
                      Phòng tắm
                    </a>
                  </h4>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <img
                    src="images/loai-sp/icon-phong-khach.png"
                    alt="Phòng khách"
                  />
                  <h4>
                    <a className="cl-blue" href="#" title="Phòng khách">
                      Phòng khách
                    </a>
                  </h4>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <img
                    src="images/loai-sp/icon-phong-khach.png"
                    alt="Phòng khách"
                  />
                  <h4>
                    <a className="cl-blue" href="#" title="Phòng khách">
                      Phòng khách
                    </a>
                  </h4>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <img
                    src="images/loai-sp/icon-phong-khach.png"
                    alt="Phòng khách"
                  />
                  <h4>
                    <a className="cl-blue" href="#" title="Phòng khách">
                      Phòng khách
                    </a>
                  </h4>
                </div>
              </div>
              <div className="col-md-3">
                <div className="item">
                  <img
                    src="images/loai-sp/icon-phong-khach.png"
                    alt="Phòng khách"
                  />
                  <h4>
                    <a className="cl-blue" href="#" title="Phòng khách">
                      Phòng khách
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div class="clearfix"></div> */}
      {/* ./catalog  */}
      <section id="products">
        <div className="products-outstanding">
          <div className="container">
            <h3 className="cl-blue">Sản phẩm nổi bật</h3>
            <div className="list-product row">
              <div className="item-product col-lg-3">
                <div className="img-product">
                  <img
                    src="../public/images/san-pham-noi-bat/sp-1.jpg"
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
                    src="../public/images/san-pham-noi-bat/sp-1.jpg"
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
                    src="../public/images/san-pham-noi-bat/sp-1.jpg"
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
                    src="../public/images/san-pham-noi-bat/sp-1.jpg"
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
                    src="../public/images/san-pham-noi-bat/sp-1.jpg"
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
                    src="../public/images/san-pham-noi-bat/sp-1.jpg"
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
      {/* Sản phẩm nổi bật */}
      <section id="about-us">
        <div className="about-us about-us-top">
          <div className="container">
            <h3>Về chúng tôi</h3>
            <div className="about-us-top row">
              <div className="col-lg-6 about-us-img">
                <img
                  src="../public/images/ve-chung-toi/ve-chung-toi.jpg"
                  alt="ve-chung-toi.jpg"
                />
              </div>
              <div className="col-lg-6">
                <div className="about-us-right ml-5">
                  <h6 className="text-uppercase">
                    Nội thất <b>Hoàng Hoan</b> <br />
                    Uy tín song hành chất lượng
                  </h6>
                  <p>
                    Nội thất <b>Hoàng Hoan</b> chúng tôi tự hào là đứa con tinh
                    thần ra đời sau hơn 30 năm hoạt động trong lĩnh vực kinh
                    doanh đồ gỗ nội thất với thương hiệu
                    <span className="text-uppercase">Đồ gỗ hoàng hoan</span> nổi
                    tiếng.
                  </p>
                  <p>
                    Tài nguyên của chúng tôi là đội ngũ kiến trúc sư tốt nghiệp
                    ĐH Kiến Trúc Hà Nội với nhiều năm kinh nghiệm, luôn tràn đầy
                    nhiệt huyết và sức sáng tạo của tuổi trẻ. Thế mạnh của chúng
                    tôi là sở hữu xưởng nội thất hơn 10.000m2 tại Hà Nội sản
                    xuất đa dạng các sản phẩm với giá cả luôn cạnh tranh.
                  </p>
                  <div>
                    <div className="about-us-imgs row">
                      <div className="about-us-img col-lg-3">
                        <img
                          src="../public/images/ve-chung-toi/ve-chung-toi-1.jpg"
                          alt="ve-chung-toi-1.jpg"
                        />
                      </div>
                      <div className="about-us-img col-lg-3">
                        <img
                          src="../public/images/ve-chung-toi/ve-chung-toi-2.jpg"
                          alt="ve-chung-toi-2.jpg"
                        />
                      </div>
                      <div className="about-us-img col-lg-3">
                        <img
                          src="../public/images/ve-chung-toi/ve-chung-toi-3.jpg"
                          alt="ve-chung-toi-3.jpg"
                        />
                      </div>
                      <div className="about-us-img col-lg-3">
                        <a href="#">Xem thêm &gt;</a>
                        <img
                          src="../public/images/ve-chung-toi/ve-chung-toi-4.jpg"
                          alt="ve-chung-toi-4.jpg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-us about-us-bottom">
          <div className="container">
            <h3>Tại sao nên chọn hoàng hoan?</h3>
            <div className="d-flex justify-content-between flex-lg-wrap-reverse">
              <div className="item-about-us d-flex py-2 mb-4">
                <div className="icon-about-us d-flex justify-content-center flex-column px-3">
                  <img
                    src="../public/images/ve-chung-toi/chinh-sach.jpg"
                    alt="chinh-sach.jpg"
                  />
                </div>
                <div className="title-item-about-us d-flex justify-content-center flex-column">
                  <div className="text-uppercase title-about-us">
                    <b>Chính sách giá</b>
                  </div>
                  <div className="text-dark">
                    <b>Tốt nhất và công khai trên website</b>
                  </div>
                </div>
              </div>
              <div className="item-about-us d-flex py-2 mb-4">
                <div className="icon-about-us d-flex justify-content-center px-3">
                  <img
                    src="../public/images/ve-chung-toi/san-pham.jpg"
                    alt="san-pham.jpg"
                  />
                </div>
                <div className="title-item-about-us d-flex justify-content-center flex-column">
                  <div className="text-uppercase title-about-us">
                    <b>Sản xuất</b>
                  </div>
                  <div className="text-dark">
                    <b>Trực tiếp sản xuất bởi đội ngũ nhân viên hàng đầu</b>
                  </div>
                </div>
              </div>
              <div className="item-about-us d-flex py-2 mb-4">
                <div className="icon-about-us d-flex justify-content-center flex-column px-3">
                  <img
                    src="../public/images/ve-chung-toi/chinh-sach.jpg"
                    alt="chinh-sach.jpg"
                  />
                </div>
                <div className="title-item-about-us d-flex justify-content-center flex-column">
                  <div className="text-uppercase title-about-us">
                    <b>Chính sách giá</b>
                  </div>
                  <div className="text-dark">
                    <b>Tốt nhất và công khai trên website</b>
                  </div>
                </div>
              </div>
              <div className="item-about-us d-flex py-2 mb-4">
                <div className="icon-about-us d-flex justify-content-center px-3">
                  <img
                    src="../public/images/ve-chung-toi/san-pham.jpg"
                    alt="san-pham.jpg"
                  />
                </div>
                <div className="title-item-about-us d-flex justify-content-center flex-column">
                  <div className="text-uppercase title-about-us">
                    <b>Sản xuất</b>
                  </div>
                  <div className="text-dark">
                    <b>Trực tiếp sản xuất bởi đội ngũ nhân viên hàng đầu</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ./about-us  */}
      <section id="tin-tuc">
        <div className="tin-tuc">
          <div className="container">
            <h3>Tin tức</h3>
            <div className="row">
              <div className="col-7">
                <div className="tin-tuc-left w-90">
                  <img
                    className="w-100"
                    src="../public/images/tin-tuc/tintuc-1.jpg"
                    alt="tintuc-1.jpg"
                  />
                  <div className="tilte-tin-tuc">
                    <h5 className="mx-lg-4 my-lg-2">
                      Cách chọn Sofa cho phòng khách nhà bạn thêm phần sang
                      trọng
                    </h5>
                    <p className="mx-lg-4 my-lg-2">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Harum velit omnis consectetur possimus minima, quam
                      similique eum odio beatae repudiandae temporibus
                      voluptates consequatur quis libero distinctio voluptatem
                      alias doloremque suscipit?
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-5">
                <div className="tin-tuc-right">
                  <div className="item-tin-tuc row">
                    <div className="img-tin-tuc col-4">
                      <img
                        className="w-100"
                        src="../public/images/tin-tuc/tintuc-1.png"
                        alt="tintuc-1.png"
                      />
                    </div>
                    <div className="tilte-tin-tuc col-8">
                      <h5>Trang trí phòng khách cho thêm năng động</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Harum velit omnis consectetur possimus minima,
                        quam similique eum odio beatae repudiandae temporibus
                        voluptates consequatur quis libero distinctio voluptatem
                        alias doloremque suscipit?
                      </p>
                    </div>
                  </div>
                  <div className="item-tin-tuc row">
                    <div className="img-tin-tuc col-4">
                      <img
                        className="w-100"
                        src="../public/images/tin-tuc/tintuc-2.png"
                        alt="tintuc-2.png"
                      />
                    </div>
                    <div className="tilte-tin-tuc col-8">
                      <h5>Trang trí phòng khách cho thêm năng động</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Harum velit omnis consectetur possimus minima,
                        quam similique eum odio beatae repudiandae temporibus
                        voluptates consequatur quis libero distinctio voluptatem
                        alias doloremque suscipit?
                      </p>
                    </div>
                  </div>
                  <div className="item-tin-tuc row">
                    <div className="img-tin-tuc col-4">
                      <img
                        className="w-100"
                        src="../public/images/tin-tuc/tintuc-3.png"
                        alt="tintuc-3.png"
                      />
                    </div>
                    <div className="tilte-tin-tuc col-8">
                      <h5>Trang trí phòng khách cho thêm năng động</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Harum velit omnis consectetur possimus minima,
                        quam similique eum odio beatae repudiandae temporibus
                        voluptates consequatur quis libero distinctio voluptatem
                        alias doloremque suscipit?
                      </p>
                    </div>
                  </div>
                  <div className="xem-them mt-3">
                    <a href="#" className="cl-yellow">
                      XEM THÊM
                      <span>
                        <i className="fa-solid fa-arrow-right" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ./tin-tuc  */}
      <section id="doi-tac">
        <div className="doi-tac">
          <div className="container">
            <h3>Đối tác</h3>
            <div className="doi-tac-list d-flex justify-content-end">
              <div className="item-doi-tac">
                <img
                  className="w-100"
                  src="../public/images/doi-tac/vinpearl.png"
                  alt="vinpearl.png"
                />
              </div>
              <div className="item-doi-tac">
                <img
                  className="w-100"
                  src="../public/images/doi-tac/muong-thanh.png"
                  alt="muong-thanh.png"
                />
              </div>
              <div className="item-doi-tac">
                <img
                  className="w-100"
                  src="../public/images/doi-tac/sheraton.png"
                  alt="sheraton.png"
                />
              </div>
              <div className="item-doi-tac">
                <img
                  className="w-100"
                  src="../public/images/doi-tac/the-coffee-house.png"
                  alt="the-coffee-house.png"
                />
              </div>
              <div className="item-doi-tac">
                <img
                  className="w-100"
                  src="../public/images/doi-tac/marvella.png"
                  alt="marvella.png"
                />
              </div>
              <div className="item-doi-tac">
                <img
                  className="w-100"
                  src="../public/images/doi-tac/sunrise-sapa.png"
                  alt="sunrise-sapa.png"
                />
              </div>
              <div className="item-doi-tac">
                <img
                  className="w-100"
                  src="../public/images/doi-tac/melissa.png"
                  alt="melissa.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ./doii-tac  */}
      <section id="lien-he">
        <div className="lien-he h-100">
          <div className="img-left">
            <img src="../public/images/lienhe-1.png" alt="lienhe-1.png" />
          </div>
          <div className="container d-flex justify-content-around h-100">
            <div className="d-flex flex-column justify-content-center">
              <div className="box-left">
                Trải nghiệm dịch vụ <br />
                <b>cùng Hoàng Hoan ngay</b>
                <div className="line" />
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center">
              <div className="box-right mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  <b>Thông tin liên hệ</b>
                </label>
                <div className="buttom-submit d-flex justify-content-around">
                  <input
                    className="form-control"
                    type="text"
                    name="text-lien-he"
                    id="text-lien-he"
                    placeholder="Email/Số điện thoại"
                  />
                  <button type="button" className="btn mx-3 btn-lien-he">
                    <b>Gửi</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ./lien-he  */}
      <Footer />
      {/* Thư viện js  */}
    </>
  );
}

export default App;
