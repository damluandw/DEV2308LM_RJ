import React from "react";
import { NavLink } from "react-router-dom";

function IndexNews() {
  return (
    <>
      <section id="tin-tuc">
        <div className="tin-tuc">
          <div className="container">
            <h3>Tin tức</h3>
            <div className="row">
              <div className="col-7">
                <div className="tin-tuc-left w-90">
                  <img
                    className="w-100"
                    src="/assets/images/tin-tuc/tintuc-1.jpg"
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
                        src="/assets/images/tin-tuc/tintuc-1.png"
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
                        src="/assets/images/tin-tuc/tintuc-2.png"
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
                        src="/assets/images/tin-tuc/tintuc-3.png"
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
                    <NavLink to="/news?page=1" className="cl-yellow">
                      XEM THÊM
                      <span>
                        <i className="fa-solid fa-arrow-right" />
                      </span>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default IndexNews;
