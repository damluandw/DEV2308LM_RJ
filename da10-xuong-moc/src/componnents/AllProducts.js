import React, { useEffect, useState } from "react";
import styles from "./css/tatca-sanpham.css";
import BannerProducts from "./BannerProducts";
import ListProductByCategory from "./ListProductByCategory";
import Page from "./Page";
import { useLocation } from "react-router-dom";
import ProductsFilter from "./ProductsFilter";
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
function AllProducts({ index, category, listProduct, onBuyProduct,onWishlist, pageSize }) {
  let handleBuy = (product) => {
    onBuyProduct(product);
  };
  let handleWishlist = (product) => {
    onWishlist(product);
  };
  let query = useQuery();

  const [indexPage, setIndexPage] = useState(1);
  const [pages, setPages] = useState([]);
  const getMaxPage = (list) => {
    if (list.length % pageSize == 0) return list.length / pageSize;
    else {
      return Math.round(list.length / pageSize + 0.5);
    }
  };
  const getPages = (list) => {
    let maxPage = getMaxPage(list);
    let pages = [];
    // let page = 0;
    for (let i = 1; i <= maxPage; i++) {
      let page = i;
      pages.push(page);
      // console.log(pages);
    }
    setPages(pages);
  };

  useEffect(() => {
    let listTemp = listProduct;
    let list1 = listTemp.filter((x) => x.cid == category.id);
    getPages(list1);
    let pageIndex = query.get("page");
    setIndexPage(pageIndex);
  }, [category]);

  useEffect(() => {
    let listTemp = listProduct;
    let list1 = listTemp.filter((x) => x.cid == category.id);
    getPages(list1);
    let pageIndex = query.get("page");
    setIndexPage(pageIndex);
  }, []);
  useEffect(() => {
    let listTemp = listProduct;
    let list1 = listTemp.filter((x) => x.cid == category.id);
    getPages(list1);
    let pageIndex = query.get("page");
    setIndexPage(pageIndex);
  }, [query]);
  return (
    <>
      <BannerProducts />
      {/* <ProductsFilter/> */}
      <ListProductByCategory
        category={category}
        listProduct={listProduct}
        onBuyProduct={handleBuy}
        pageSize={pageSize}
        onWishlist={handleWishlist}
      />
      <Page pages={pages} indexPage={indexPage} />
    </>
  );
}

export default AllProducts;
