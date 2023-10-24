import React from "react";
import "./css/index.css";
import Banner from "./trang-chu/Banner";
import Categories from "./trang-chu/Categories";
import Products from "./trang-chu/Products";
import AboutUs from "./trang-chu/AboutUs";
import News from "./trang-chu/News";
import DoiTac from "./trang-chu/DoiTac";
import LienHe from "./trang-chu/LienHe";
import ListProductOneLine from "./ListProductOneLine";

function Index() {
  return (
    <>
      <Banner />
      {/* .banner */}
      <Categories />
      {/* ./catalog  */}

      <section id="products">
      <div className="products-outstanding">
        <div className="container">
          <h3 className="cl-blue">Sản phẩm nổi bật</h3>
          <ListProductOneLine />
        </div>
      </div>
    </section>
      
      {/* Sản phẩm nổi bật */}

      <AboutUs />
      {/* ./about-us  */}
      <News />
      {/* ./tin-tuc  */}
      <DoiTac />
      {/* ./doi-tac  */}
      <LienHe />
      {/* ./lien-he  */}
    </>
  );
}

export default Index;
