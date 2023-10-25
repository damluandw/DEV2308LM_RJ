import React from "react";
import styles from "./css/index.css";
import AboutUs from "./AboutUs";
import News from "./News";
import DoiTac from "./DoiTac";
import LienHe from "./LienHe";
import ListProductOneLine from "./ListProductOneLine";
import Categories from "./Categories";
import IndexBanner from "./IndexBanner";

function Index() {
  return (
    <>
      <IndexBanner />
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
