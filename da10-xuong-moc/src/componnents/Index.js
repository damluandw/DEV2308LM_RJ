import React from "react";
import "./css/index.css";
import AboutUs from "./AboutUs";
import DoiTac from "./DoiTac";
import LienHe from "./LienHe";
import ListProductSlick from "./ListProductSlick";
import Categories from "./Categories";
import IndexBanner from "./IndexBanner";
import NewsIndex from "./NewsIndex";

function Index({ listCategories, listProduct ,onBuyProduct}) {
  let arrows = true;
  const handleBuy = (product) => {
    onBuyProduct(product);
  };
  return (
    <>
      <IndexBanner />
      {/* .banner */}
      <Categories listCategories={listCategories} />
      {/* ./catalog  */}

      <section id="products">
        <div className="products-outstanding">
          <div className="container">
            <h3 className="cl-blue">Sản phẩm nổi bật</h3>
            <ListProductSlick listProduct={listProduct} arrows={arrows} filterNoiBat={true} filterCID={null} onBuyProduct={handleBuy}/>
          </div>
        </div>
      </section>

      {/* Sản phẩm nổi bật */}

      <AboutUs />
      {/* ./about-us  */}
      <NewsIndex />
      {/* ./tin-tuc  */}
      <DoiTac />
      {/* ./doi-tac  */}
      <LienHe />
      {/* ./lien-he  */}
    </>
  );
}

export default Index;
