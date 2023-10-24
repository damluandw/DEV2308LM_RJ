import React from "react";
import ItemProduct from "../ItemProduct";

function Products() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section id="products">
      <div className="products-outstanding">
        <div className="container">
          <h3 className="cl-blue">Sản phẩm nổi bật</h3>
          <div className="list-product row">
           <ItemProduct/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
