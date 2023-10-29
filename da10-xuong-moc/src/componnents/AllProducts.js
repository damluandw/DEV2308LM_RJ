import React from "react";
import styles from "./css/tatca-sanpham.css";
import BannerProducts from "./BannerProducts";
import ListProductByCategory from "./ListProductByCategory";
import Page from "./Page";

function AllProducts({index,category,listProduct,onBuyProduct}) {
  let handleBuy = (product) => {
    onBuyProduct(product);
  };
  return (
    <>
      <BannerProducts/>
      <ListProductByCategory category ={category} listProduct={listProduct} onBuyProduct={handleBuy}/>
      <Page/>
    </>
  );
}

export default AllProducts;
