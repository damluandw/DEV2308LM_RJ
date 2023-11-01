import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import ItemProduct from "./ItemProduct";
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
function SearchPage({ listProduct, onBuyProduct }) {
  let query = useQuery();
  const [list, setList] = useState([]);
  const [keyWord, setkeyWord] = useState([]);
  const setListProduct = (key) => {
    let listTemp = listProduct;
    if (key !== "" && key !== null && key !== undefined) {
      listTemp = listTemp.filter((x) =>
        x.title
          .toLocaleLowerCase()
          .trim()
          .includes(key.toLocaleLowerCase().trim())
      );
      setList(listTemp);
    }
  };

  useEffect(() => {
    let key = query.get("key");
    setkeyWord(key);
    setListProduct(key);
  }, []);

  useEffect(() => {
    let key = query.get("key");
    setkeyWord(key);
    setListProduct(key);
  }, [query]);

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
  let rendertitle =
    list.length == 0 ? (
      <>
        {" "}
        <h3>{`Không tìm thấy kết quả nào cho từ khóa "${keyWord}"`}</h3>
      </>
    ) : (
      <h3>{`Kết quả nào cho từ khóa "${keyWord}"`}</h3>
    );
  return (
    <section id="products">
      <div className="products">
        <div className="container">
          <div className="d-flex justify-content-start">{rendertitle}</div>
          <div className="list-product row">{render}</div>
        </div>
      </div>
    </section>
  );
}

export default SearchPage;
