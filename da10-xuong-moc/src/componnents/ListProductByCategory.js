import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import ItemProduct from "./ItemProduct";
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
function ListProductByCategory({ category, listProduct, onBuyProduct,onWishlist ,pageSize}) {
  const [list, setList] = useState([]);
  let query = useQuery();
  const getListPage = (list, pageIndex) => {
    if (list != undefined) {
      let count = list.length;
      let start = (pageIndex - 1) * pageSize;
      let end = pageIndex * pageSize;
      let listTmp = [];
      // $('.product-page-conten .list-Products').html('');
      for (let i = start; i < end && i < count; i++) {
        let obj = list[i];
        listTmp.push(obj);
      }
      return listTmp;
    }
    return [];
  };

  useEffect(() => {
    let listTemp = listProduct;
    let list1 = listTemp.filter((x) => x.cid == category.id);
    let pageIndex = query.get("page");
    list1 = getListPage(list1,pageIndex)
    setList(list1);
  }, [category]);

  useEffect(() => {
    let listTemp = listProduct;
    let list1 = listTemp.filter((x) => x.cid == category.id);
    let pageIndex = query.get("page");
    console.log(pageIndex);
    list1 = getListPage(list1,pageIndex)
    setList(list1);
  }, []);
  useEffect(() => {
    let listTemp = listProduct;
    let list1 = listTemp.filter((x) => x.cid == category.id);
    let pageIndex = query.get("page");
    list1 = getListPage(list1,pageIndex)
    setList(list1);
  }, [query]);

  let handleBuy = (product) => {
    onBuyProduct(product);
  };
  let handleWishlist = (product) => {
    onWishlist(product);
  };
  let render = list.map((item, index) => {
    return (
      <ItemProduct
        key={item.id}
        renderProduct={item}
        rollNo={index + 1}
        onBuyProduct={handleBuy}
        onWishlist={handleWishlist}
      />
    );
  });


  return (
    <section id="products">
      <div className="products">
        <div className="container">
          <div className="d-flex justify-content-start">
            <h3>{category.title}</h3>
          </div>
          <div className="list-product row">{render}</div>
        </div>
      </div>
    </section>
  );
}

export default ListProductByCategory;
