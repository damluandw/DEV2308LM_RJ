import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <footer>
            <div className="text-uppercase fw-bold">
              Viện công nghẹ và đào tạo{" "}
              <span className="text-danger">devmaster</span>
            </div>
            <div>
              Tòa{" "}
              <span className="text-primary text-uppercase fw-bold">
                Viện Công nghệ
              </span>
              . Số 25 Phố Vũ Ngọc Phan, Láng Hạ, Đống Đa, Hà Nội
            </div>
          </footer>
    )
  }
}
