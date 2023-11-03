import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Page({ pages, keyWord, indexPage }) {
  // console.log("pagelocal",local);
  let renderPage =
    pages != undefined ? (
      pages.map((item, index) => {
        return indexPage == index + 1 ? (
          <li key={index} className="active">
            <NavLink to={`/search?key=${keyWord}&page=${index + 1}`}>
              {index + 1}
            </NavLink>
          </li>
        ) : (
          <li key={index}>
            <NavLink to={`/search?key=${keyWord}&page=${index + 1}`}>
              {index + 1}
            </NavLink>
          </li>
        );
      })
    ) : (
      <></>
    );
  let renderPageLeft = () => {
    indexPage == 1 ? (
      <></>
    ) : (
      <li>
        <NavLink to={`/search?key=${keyWord}&page=${indexPage + 1}`}>
          <span>
            <i className="fa-solid fa-angle-left" />
          </span>
        </NavLink>
      </li>
    );
  };
  let renderPageRight = () => {
    pages.length == indexPage ? (
      <></>
    ) : (
      <li>
        <NavLink to={`/search?key=${keyWord}&page=${indexPage + 1}`}>
          <span>
            <i className="fa-solid fa-angle-right" />
          </span>
        </NavLink>
      </li>
    );
  };

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
