import React, { useEffect, useState } from "react";
import BannerProducts from "./BannerProducts";
import "./css/sanpham.css";
import ListProductSlick from "./ListProductSlick";
import { NavLink } from "react-router-dom";

function Products({ listProduct, listCategories, onBuyProduct }) {
  let handleBuy = (product) => {
    onBuyProduct(product);
  };
  let render = listCategories.map((item, index) => {
    return (
      <section key={item.id} id={`products-${item.slug}`}>
        <div className="products">
          <div className="container">
            <div className="d-flex justify-content-between">
              <h3>{item.title}</h3>
              <div className="xem-tat-ca cl-blue">
                <NavLink to={`/products/${item.slug}?page=1`}>XEM TẤT CẢ</NavLink>
              </div>
            </div>

            <ListProductSlick
              listProduct={listProduct}
              arrows={false}
              filterCID={item.id}
              filterNoiBat={null}
              onBuyProduct={handleBuy}
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
      <div id="list-products">{render}</div>
    </>
  );
}

export default Products;
