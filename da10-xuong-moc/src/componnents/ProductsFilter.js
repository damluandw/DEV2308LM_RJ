import React, { useState } from "react";

function ProductsFilter() {
  const [filterPrice, setFilterPrice] = useState();
  const [filterOrder, setFilterOrder] = useState();
  const handleChangePrice = (price) => {
    setFilterPrice(price);
  };
  const handleChangeOrder = (evt) => {
    // setFilterPrice(price);
  };

  return (
    <>
      <section id="product-filter">
        <div className="filter">
          <div className="container">
            <div className="d-flex justify-content-between">
              <div className="filter-price d-flex">
                <span>Chọn mức giá:</span>
                <ul className="d-flex">
                  <li
                    className="cl-yellow"
                    onClick={() => handleChangePrice("5")}
                  >
                    Dưới 5 triệu
                  </li>
                  <li
                    className="cl-yellow"
                    onClick={() => handleChangePrice("5-10")}
                  >
                    5-10 triệu
                  </li>
                  <li
                    className="cl-yellow"
                    onClick={() => handleChangePrice("10-15")}
                  >
                    10-15 triệu
                  </li>
                  <li
                    className="cl-yellow"
                    onClick={() => handleChangePrice("15")}
                  >
                    Trên 15 triệu
                  </li>
                </ul>
              </div>
              <div className="filter-sort">
                <select
                  className="form-select"
                  onClick={() => handleChangeOrder()}
                >
                  <option value="new" selected="">
                    Sắp xếp
                  </option>
                  <option value="pho-bien">Phổ biến nhất</option>
                  <option value="price-desc">Giá cao đến thấp</option>
                  <option value="price-asc">Giá thấp đến cao</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductsFilter;
