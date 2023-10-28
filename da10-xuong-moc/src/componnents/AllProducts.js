import React from "react";
import styles from "./css/tatca-sanpham.css";
import BannerProducts from "./BannerProducts";
import ListProductByCategory from "./ListProductByCategory";
import Page from "./Page";

function AllProducts({index,category,listProduct}) {
  return (
    <>
      <BannerProducts/>
      <ListProductByCategory category ={category} listProduct={listProduct}/>
      <Page/>
    </>
  );
}

export default AllProducts;
