import React from "react";

function LienHe() {
  return (
    <>
      <section id="lien-he">
        <div className="lien-he h-100">
          <div className="img-left">
            <img src="../images/lienhe-1.png" alt="lienhe-1.png" />
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

    </>
  );
}

export default LienHe;
