import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ItemProductSlick from "./componnetsItem/ItemProductSlick";
import "./assets/css/itemproduct.css";

export const ListProductSlick = ({
  lisProduct,
  arrows,
  filterNoiBat,
  filterCID,
}) => {
  const [list, setList] = useState([]);
  let getData = () => {
    lisProduct.then((products) => {
      let listTemp = products;
      if (
        filterNoiBat != null &&
        filterNoiBat != "" &&
        filterNoiBat != undefined
      ) {
        let list1 = listTemp.filter((x) => x.hot == filterNoiBat);
        setList(list1);
      }
      if (filterCID != null && filterCID != "" && filterCID != undefined) {
        let list1 = listTemp.filter((x) => x.cid == filterCID);
        setList(list1);
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [filterCID]);
  useEffect(() => {
    getData();
  }, [filterNoiBat]);

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
