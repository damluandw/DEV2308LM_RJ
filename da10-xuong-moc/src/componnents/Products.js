import React, { useEffect, useState } from "react";
import BannerProducts from "./BannerProducts";
import "./css/sanpham.css";
import ListProductSlick from "./ListProductSlick";

function Products({ listProduct, listCategories }) {


  let render = listCategories.map((item, index) => {
    return (
      <section id={`products-${item.slug}`}>
        <div className="products">
          <div className="container">
            <div className="d-flex justify-content-between">
              <h3>{item.title}</h3>
              <div className="xem-tat-ca cl-blue">
                <a href={`/products/${item.slug}`}>XEM TẤT CẢ</a>
              </div>
            </div>

            <ListProductSlick
              listProduct={listProduct}
              arrows={false}
              filterCID={7}
              filterNoiBat={null}
            />
          </div>
        </div>
      </section>
    );
  });


  return (
    <>
      <BannerProducts />

      {/* ./banner  */}
      <div id="list-products">
        {render}
      </div>
    </>
  );
}

export default Products;
