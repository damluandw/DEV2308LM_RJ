import React, { useEffect, useState } from "react";
import "./css/tintuc.css";
import Page from "./Page";
import { NavLink, useLocation } from "react-router-dom";
import axios from "../api/api-xm";
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
function News({ news }) {
  const [pageSize, setPageSize] = useState(6);
  let query = useQuery();
  const [list, setList] = useState([]);
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
    }
    setPages(pages);
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
  const getNews = async () => {
    // let response = await axios.get("News");
    // setList(response.data);
  };
  useEffect(() => {
    console.log(news);
    let listTemp = news;
    if (listTemp == "") getNews();
    getPages(listTemp);
    let pageIndex = query.get("page");
    listTemp = getListPage(listTemp, pageIndex);
    setList(listTemp);
    setIndexPage(pageIndex);
  }, [news]);
  useEffect(() => {
    let listTemp = news;
    if (listTemp == []) getNews();
    getPages(listTemp);
    let pageIndex = query.get("page");
    listTemp = getListPage(listTemp, pageIndex);
    setList(listTemp);
    setIndexPage(pageIndex);
    
  }, []);
  useEffect(() => {
    let listTemp = news;
    if (listTemp == "") getNews();
    getPages(listTemp);
    let pageIndex = query.get("page");
    listTemp = getListPage(listTemp, pageIndex);
    setList(listTemp);
    setIndexPage(pageIndex);
    window.scrollTo(0, 0);
  }, [query]);

  let renderNews =
    list == [] ? (
      <></>
    ) : (
      list.map((item, index) => {
        let img = item.image.substring(
          item.image.search("/images"),
          item.image.length
        );

        return (
          <div key={index} className="item-tin-tuc col-lg-4">
            <div className="img-tin-tuc tin-tuc-top">
              <img className="w-100" src={axios.getUri()+item.image} alt={item.title} />
            </div>
            <div className="tin-tuc-bottom">
              <div className="title-tin-tuc">
                <h4>
                  <NavLink to={`/news/detail/${item.id}`}>{item.title}</NavLink>
                </h4>
              </div>
              <div className="describe-tin-tuc">
                <p>
                  {item.metaDescription}
                </p>
              </div>
            </div>
          </div>
        );
      })
    );
  return (
    <>
      <section id="tin-tuc">
        <div className="tin-tuc">
          <div className="container">
            <h3>Tin tức</h3>
            <div className="list-tin-tuc row">{renderNews}</div>
          </div>
        </div>
      </section>
      {/* ./tin-tuc  */}
      <Page pages={pages} indexPage={indexPage} />
      {/* page */}
    </>
  );
}

export default News;
