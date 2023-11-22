import React, { useState } from "react";

function ProductsFilter({ onFilter }) {
  const [filterPrice, setFilterPrice] = useState();
  const [filterOrder, setFilterOrder] = useState();
  const handleChangePrice = (filterPrice) => {
    setFilterPrice(filterPrice);
    onFilter(filterPrice, filterOrder);
  };
  const handleChangeOrder = (evt) => {

    setFilterOrder(evt.target.value);
    let filterOrder = evt.target.value;
    onFilter(filterPrice,filterOrder);
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
                    onClick={(evt) => handleChangePrice("5")}
                  >
                    Dưới 5 triệu
                  </li>
                  <li
                    className="cl-yellow"
                    onClick={(evt) => handleChangePrice("10")}
                  >
                    5-10 triệu
                  </li>
                  <li
                    className="cl-yellow"
                    onClick={(evt) => handleChangePrice("15")}
                  >
                    10-15 triệu
                  </li>
                  <li
                    className="cl-yellow"
                    onClick={(evt) => handleChangePrice("20")}
                  >
                    Trên 15 triệu
                  </li>
                </ul>
              </div>
              <div className="filter-sort">
                <select
                  className="form-select"
                  onChange={(evt) => handleChangeOrder(evt)}
                >
                  <option name={filterOrder} value="new" >
                    Sắp xếp
                  </option>
                  {/* <option name={filterOrder} value="pho-bien">
                    Phổ biến nhất
                  </option> */}
                  <option name={filterOrder} value="price-desc">
                    Giá cao đến thấp
                  </option>
                  <option name={filterOrder} value="price-asc">
                    Giá thấp đến cao
                  </option>
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
