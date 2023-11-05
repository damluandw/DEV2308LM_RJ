import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
function Page({ pages, keyWord, indexPage }) {
  const local = useLocation();
  // const query = useQuery();
  // console.log(pages);
  // console.log("pagelocal",local);
  // console.log("query", query.get("key"));

  // const [url, setUrl] = useState();
  // useEffect(() => {
  //   getPageInfo();
  // }, [keyWord]);
  // const [pageInfo, setPageInfo] = useState({
  //   pages: [],
  //   keyWord: "",
  //   indexPage: 0,
  // });
  // const getPageInfo = () => {
  //   let infoPage = [];
  //   infoPage.pages = keyWord;
  //   infoPage.keyWord = keyWord;
  //   infoPage.indexPage = indexPage;
  //   console.log(infoPage);
  //   setPageInfo(infoPage);
  // };
  // useEffect(() => {
  //   getPageInfo();
  //   console.log(pageInfo);
  // }, []);
  // useEffect(() => {
  //   getPageInfo();
  // }, [indexPage]);
  // useEffect(() => {
  //   getPageInfo();
  // }, [pages]);
  // useEffect(() => {
  //   getPageInfo();
  // }, [keyWord]);

  let renderPage =
    pages != undefined && pages != [] && pages != "" ? (
      pages.map((item, index) => {
        return indexPage == index + 1 ? (
          <li key={index} className="active">
            <NavLink to={local.pathname + ((keyWord != undefined && keyWord != null) ? ("?key=" + keyWord + "&") : "?") + "page=" + (index + 1)}>
              {index + 1}
            </NavLink>
          </li>
        ) : (
          <li key={index}>
            <NavLink to={local.pathname + ((keyWord != undefined && keyWord != null) ? ("?key=" + keyWord + "&") : "?") + "page=" + (index + 1)}>
              {index + 1}
            </NavLink>
          </li>
        );
      })
    ) : (
      // <></>
      <></>
    );
  let renderPageLeft = (
    pages != undefined && pages != [] && pages != "" ? (
      indexPage == 1 ? (
        <></>
      ) : (
        <li>
          <NavLink to={local.pathname + ((keyWord != undefined && keyWord != null) ? ("?key=" + keyWord + "&") : "?") + "page=" + (indexPage - 1)}>
            <span>
              <i className="fa-solid fa-angle-left" />
            </span>
          </NavLink>
        </li>
      )
    ) : (
      <></>
    ));
  let renderPageRight = (
    pages != undefined && pages != [] && pages != "" ? (
      pages.length == indexPage ? (
        <></>
      ) : (
        <li>
          <NavLink to={local.pathname + ((keyWord != undefined && keyWord != null) ? ("?key=" + keyWord + "&") : "?") + "page=" + (++indexPage)}>
            <span>
              <i className="fa-solid fa-angle-right" />
            </span>
          </NavLink>
        </li>
      )
    ) : (
      <></>
    ));

  return (
    <>
      <section id="pages">
        <div className="pages">
          <div className="container">
            <ul className="d-flex justify-content-center">
              {renderPageLeft}
              {renderPage}
              {renderPageRight}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
