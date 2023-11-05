import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import ItemProduct from "./ItemProduct";
import Page from "./Page";
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
function SearchPage({ listProduct, onBuyProduct, pageSize }) {
  let query = useQuery();
  const [list, setList] = useState([]);
  const [keyWord, setkeyWord] = useState([]);
  const [indexPage, setIndexPage] = useState(0);
  const [pages, setPages] = useState([]);
  const getMaxPage = (list) => {
    if (list.length % pageSize == 0) return list.length / pageSize;
    else {
      return Math.round(list.length / pageSize + 0.5);
    }
  };
  const getPages = (list) => {
    console.log("getpage", list)
    if (list != undefined) {
      let maxPage = getMaxPage(list);
      let pages = [];
      // let page = 0;
      for (let i = 1; i <= maxPage; i++) {
        let page = i;
        pages.push(page);
        // console.log(pages);
      }
      setPages(pages);
    }


  };

  const getListSearch = (list, key) => {
    let listTmp = [];
    if (key !== "" && key !== null && key !== undefined) {
      listTmp = list.filter((x) =>
        x.title
          .toLocaleLowerCase()
          .trim()
          .includes(key.toLocaleLowerCase().trim())
      );
      return listTmp;
    }
  };
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
  const setListProduct = (key, pageIndex) => {
    let listTemp = listProduct;
    if (listTemp != undefined) {

      listTemp = getListSearch(listTemp, key);
      console.log("setListProduct", listTemp)
      getPages(listTemp);
      listTemp = getListPage(listTemp, pageIndex);

      setList(listTemp);
    }
  };

  useEffect(() => {
    let key = query.get("key");
    let pageIndex = query.get("page");
    setkeyWord(key);
    setIndexPage(pageIndex);
    setListProduct(key, pageIndex);
  }, []);

  useEffect(() => {
    let key = query.get("key");
    let pageIndex = query.get("page");
    setkeyWord(key);
    setIndexPage(pageIndex);
    setListProduct(key, pageIndex);
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
      <Page pages={pages} keyWord={keyWord} indexPage={indexPage} />
    </section>
  );
}

export default SearchPage;
