import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ItemProductSlick from "./componnetsItem/ItemProductSlick";

export const ListProductSlick = ({ lisProduct, arrows }) => {
  const [list, setList] = useState([]);
  useEffect(() => {
    lisProduct.then((lisProduct) => {
      setList(lisProduct);
    });
  }, []);
  console.log(list)
  const settings = {
    dots: false,
    infinite: list.length > 5,
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
    ],
  };
  let render =
    list == [] ? (
      <> </>
    ) : (
      list.map((item, index) => {
        return (
          <ItemProductSlick
            key={item.id}
            renderProduct={item}
            rollNo={index + 1}
            // onBuyProduct={handleBuy}
            // onWishlist={handleWishlist}
          />
        );
      })
    );
  return (
    <>
      <div className="list-product">
        <Slider {...settings} className="row">
          {render}
        </Slider>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
    return {
        lisProduct: state.lisProduct,
    };
  };

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ListProductSlick);
