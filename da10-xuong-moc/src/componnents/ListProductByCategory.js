import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ItemProduct from "./ItemProduct";

function ListProductByCategory({ category, listProduct, onBuyProduct ,pageSize}) {
  const [list, setList] = useState([]);

  useEffect(() => {
    let listTemp = listProduct;
    let list1 = listTemp.filter((x) => x.cid == category.id);
    setList(list1);
  }, [category]);

  useEffect(() => {
    let listTemp = listProduct;
    let list1 = listTemp.filter((x) => x.cid == category.id);
    setList(list1);
  }, []);
  let handleBuy = (product) => {
    onBuyProduct(product);
  };
  let render = list.map((item, index) => {
    return (
      <ItemProduct
        key={item.id}
        renderProduct={item}
        rollNo={index + 1}
        onBuyProduct={handleBuy}
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
