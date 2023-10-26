import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ItemProductSlick from "./ItemProductSlick";

function ListProductOneLine({ listProduct }) {
  let render = listProduct.map((item, index) => {
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
    arrows: true,

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

export default ListProductOneLine;
