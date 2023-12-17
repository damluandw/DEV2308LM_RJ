import React from "react";
import BannerListProduct from "./BannerListProduct";
import ListProductSlick from "./ListProductSlick";

import "./assets/css/product.css";

function PageListProduct() {
  let arrows = false;
  return (
    <>
      <BannerListProduct />
      <section id="products">
        <div className="products-outstanding">
          <div className="container">
            <ListProductSlick arrows={arrows} />
          </div>
        </div>
      </section>
    </>
  );
}

export default PageListProduct;
