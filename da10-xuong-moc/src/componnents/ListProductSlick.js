import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ItemProductSlick from "./ItemProductSlick";

function ListProductSlick({ listProduct, arrows, filterCID, filterNoiBat }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    let listTemp = listProduct;
    // console.log(filterNoiBat);
    if (filterNoiBat != null && filterNoiBat != "" && filterNoiBat != undefined) {
      listTemp.filter((x) => x.home == filterNoiBat);
      setList(listTemp);
      // console.log("hot" ,list);
    }
    if (filterCID != null && filterCID != ""&& filterCID != undefined) {
      listTemp.filter((x) => x.cid == filterCID);
      setList(listTemp);
      //  console.log("CID",list);
    }
  });
  useEffect(() => {
    let listTemp = listProduct;
    // if (filterNoiBat != null || filterNoiBat != "") {
    //   listTemp.filter((x) => x.hot == filterNoiBat);
    //   setList(listTemp);
    //   // console.log(list);
    // }
    
    if (filterCID != null && filterCID != ""&& filterCID != undefined) {
      listTemp.filter((x) => x.cid == filterCID);
      setList(listTemp);
      // console.log(list);
      
    }
  }, []);
  useEffect(() => {
    let listTemp = listProduct;
    if (filterCID != null || filterCID != ""|| filterCID != undefined) {
      listTemp.filter((x) => x.cid == filterCID);
      setList(listTemp);
      // console.log(list);
    }
  }, [filterCID]);

  // useEffect(() => {
  //   if (filterNoiBat != null || filterNoiBat != "") {
  //     let listTemp = listProduct;
  //     listTemp.filter((x) => x.hot == filterNoiBat);
  //     setList(listTemp);
  //     // console.log(list);
  //   }
  // }, [filterNoiBat]);

  let render = list.map((item, index) => {
    return (
      <ItemProductSlick key={item.id} renderProduct={item} rollNo={index + 1} />
    );
  });
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: arrows,

    //   fade: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };

  return (
    <>
      <div className="list-product row">
        <Slider {...settings} className="row">
          {render}
        </Slider>
      </div>
    </>
  );
}

export default ListProductSlick;
