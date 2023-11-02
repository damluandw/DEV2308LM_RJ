import React, { useEffect, useState } from "react";

function Page(pages) {
  //   const [pages, setPages] = useState([]);
  //   let getPages = () => {
  //     let pages;
  //     let page = { stt: 0 };
  //     for (let i = 1; i <= maxPage; i++) {
  //       page.stt = i;
  //       pages.push(page);
  //     }
  //     return pages;
  //   };
  //   useEffect(() => {
  //     let pages = getPages();
  //     //   console.log(pages)
  //     setPages(pages);
  //   }, []);
  //   useEffect(() => {
  //     let pages = getPages();
  //     //   console.log(pages)
  //     setPages(pages);
  //   }, [maxPage]);
  console.log(pages);
  let renderPage =
    pages != undefined ? (
      pages.pages.map((item, index) => {
        return <li key={index}>{index + 1}</li>;
      })
    ) : (
      <></>
    );

  return (
    <>
      <section id="pages">
        <div className="pages">
          <div className="container">
            <ul className="d-flex justify-content-center">
              {renderPage}
              <li>
                <span>
                  <i className="fa-solid fa-angle-right" />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
