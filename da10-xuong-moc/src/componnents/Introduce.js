import React from "react";
import  "./css/gioithieu.css";

function Introduce() {
  return (
    <>
      <section id="banner-intro">
        <img
          src="images/doi-tac/banner-doi-tac-2.png"
          alt="Thế giới nội thất số 1 việt nam"
          className="w-100 img-banner-intro-main"
        />
        <div className="banner-intro-box">
          <div className="container">
            <div className="item">
              <div>
                <div className="d-flex justify-content-center">
                  <img src="images/logo.png" alt="Xưởng mộc giá tốt" />
                </div>
                <h2>ĐỐI TÁC</h2>
              </div>
            </div>
            <div className="box-white" />
          </div>
        </div>
      </section>
      {/* ./banner-intro  */}
      <section id="gioi-thieu">
        <div className="gioi-thieu-box">
          <div className="container">
            <div className="list-gioi-thieu">
              <div className="item-gioi-thieu row">
                <h3>Thành lập và phát triển</h3>
                <div className="logo-gioi-thieu col-lg-6">
                  <div className="ms-5">
                    <img
                      className="w-100 img-thanh-lap"
                      src="../images/gioi-thieu/gioi-thieu.png"
                      alt="gioi-thieu.png"
                    />
                  </div>
                </div>
                <div className="title-gioi-thieu col-lg-6">
                  <p className="me-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus eveniet rem commodi. Commodi, ut error deserunt
                    aliquid vitae architecto rerum nesciunt exercitationem cum.
                  </p>
                  <p className="me-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus eveniet rem commodi. Commodi, ut error deserunt
                    aliquid veritatis animi dolores voluptatum id harum eligendi
                    vitae architecto rerum nesciunt exercitationem cum.
                  </p>
                  <p className="me-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus eveniet rem commodi. Commodi, ut error deserunt
                    aliquid veritatis animi dolores voluptatum id harum eligendi
                    vitae architecto rerum nesciunt exercitationem cum.
                  </p>
                </div>
              </div>
              <div className="item-gioi-thieu">
                <h3>Tầm nhìn</h3>
                <div className="logo-gioi-thieu">
                  <div className="mx-5">
                    <img
                      className="w-100"
                      src="../images/gioi-thieu/gioi-thieu-2.png"
                      alt="vinpearl.png"
                    />
                  </div>
                </div>
                <div className="title-gioi-thieu">
                  <p className="mx-5 my-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus eveniet rem commodi. Commodi, ut error deserunt
                    aliquid veritatis animi dolores voluptatum id harum eligendi
                    vitae architecto rerum nesciunt exercitationem cum. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Possimus
                    eveniet rem commodi. Commodi, ut error deserunt aliquid
                    veritatis animi dolores voluptatum id harum eligendi vitae
                    architecto rerum nesciunt exercitationem cum.
                  </p>
                </div>
              </div>
              <div className="item-gioi-thieu">
                <h3>Sứ mệnh</h3>
                <div className="list-su-menh row">
                  <div className="item-su-menh col-lg-6">
                    <div className="row">
                      <div className="col-3">
                        <div className="d-flex justify-content-center align-content-center">
                          <img
                            src="../images/gioi-thieu/logo-1.png"
                            alt="logo-1.png"
                          />
                        </div>
                      </div>
                      <div className="col-lg-9">
                        <h5>Với xã hội</h5>
                        <p className="para-su-menh">
                          Hài hòa lợi ích doanh nghiệp với lợi ích xã hội, tích
                          cực cùng cộng đồng xây dựng môi trường sống bền vững.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item-su-menh col-lg-6">
                    <div className="row">
                      <div className="col-3">
                        <div className="d-flex justify-content-center align-content-center">
                          <img
                            src="../images/gioi-thieu/logo-2.png"
                            alt="logo-2.png"
                          />
                        </div>
                      </div>
                      <div className="col-lg-9">
                        <h5>Với nhân viên</h5>
                        <p className="para-su-menh">
                          Hài hòa lợi ích doanh nghiệp với lợi ích xã hội, tích
                          cực cùng cộng đồng xây dựng môi trường sống bền vững.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item-su-menh col-lg-6">
                    <div className="row">
                      <div className="col-3">
                        <div className="d-flex justify-content-center align-content-center">
                          <img
                            src="../images/gioi-thieu/logo-3.png"
                            alt="logo-3.png"
                          />
                        </div>
                      </div>
                      <div className="col-lg-9">
                        <h5>Với đối tác</h5>
                        <p className="para-su-menh">
                          Hài hòa lợi ích doanh nghiệp với lợi ích xã hội, tích
                          cực cùng cộng đồng xây dựng môi trường sống bền vững.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="item-su-menh col-lg-6">
                    <div className="row">
                      <div className="col-3">
                        <div className="d-flex justify-content-center align-content-center">
                          <img
                            src="../images/gioi-thieu/logo-4.png"
                            alt="logo-4.png"
                          />
                        </div>
                      </div>
                      <div className="col-lg-9">
                        <h5>Với thị trường</h5>
                        <p className="para-su-menh">
                          Hài hòa lợi ích doanh nghiệp với lợi ích xã hội, tích
                          cực cùng cộng đồng xây dựng môi trường sống bền vững.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* gioi-thieu */}
    </>
  );
}

export default Introduce;
