import React from 'react'

function AboutUs() {
  return (
    <>   <section id="about-us">
    <div className="about-us about-us-top">
      <div className="container">
        <h3>Về chúng tôi</h3>
        <div className="about-us-top row">
          <div className="col-lg-6 about-us-img">
            <img
              src="../images/ve-chung-toi/ve-chung-toi.jpg"
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
                      src="../images/ve-chung-toi/ve-chung-toi-1.jpg"
                      alt="ve-chung-toi-1.jpg"
                    />
                  </div>
                  <div className="about-us-img col-lg-3">
                    <img
                      src="../images/ve-chung-toi/ve-chung-toi-2.jpg"
                      alt="ve-chung-toi-2.jpg"
                    />
                  </div>
                  <div className="about-us-img col-lg-3">
                    <img
                      src="../images/ve-chung-toi/ve-chung-toi-3.jpg"
                      alt="ve-chung-toi-3.jpg"
                    />
                  </div>
                  <div className="about-us-img col-lg-3">
                    <a href="#">Xem thêm &gt;</a>
                    <img
                      src="../images/ve-chung-toi/ve-chung-toi-4.jpg"
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
                src="../images/ve-chung-toi/chinh-sach.jpg"
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
                src="../images/ve-chung-toi/san-pham.jpg"
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
                src="../images/ve-chung-toi/chinh-sach.jpg"
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
                src="../images/ve-chung-toi/san-pham.jpg"
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
    </>
  )
}

export default AboutUs