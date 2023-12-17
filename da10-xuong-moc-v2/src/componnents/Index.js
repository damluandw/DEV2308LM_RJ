import React from "react";
import IndexBanner from "./IndexBanner";
import IndexCategories from "./IndexCategories";
import ListProductSlick from "./ListProductSlick";
import './assets/css/index.css';
import IndexAboutUs from "./IndexAboutUs";
import IndexNews from "./IndexNews";
import IndexPartner from "./IndexPartner";
import IndexContact from "./IndexContact";

function Index() {
  let arrows = true;
  return (
    <>
      <IndexBanner />
      <IndexCategories />
      <section id="products">
        <div className="products-outstanding">
          <div className="container">
            <h3 className="cl-blue">Sản phẩm nổi bật</h3>
            <ListProductSlick arrows ={arrows}/>
          </div>
        </div>
      </section>
      <IndexAboutUs/>
      <IndexNews/>
      <IndexPartner/>
      <IndexContact/>
    </>
  );
}

export default Index;
