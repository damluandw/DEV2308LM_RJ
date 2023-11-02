import React, { useState } from "react";
import styles from "./css/tatca-sanpham.css";
import BannerProducts from "./BannerProducts";
import ListProductByCategory from "./ListProductByCategory";
import Page from "./Page";

function AllProducts({ index, category, listProduct, onBuyProduct, pageSize }) {
  let handleBuy = (product) => {
    onBuyProduct(product);
  };
  const [countPage, setCountPage] = useState();

  return (
    <>
      <BannerProducts />
      <ListProductByCategory
        category={category}
        listProduct={listProduct}
        onBuyProduct={handleBuy}
        pageSize ={pageSize}
      />
      <Page listProduct={listProduct} pageSize={pageSize}/>
    </>
  );
}

export default AllProducts;
