import React, { useEffect, useState } from "react";
import ItemProduct from "./ItemProduct";
import axios from "./api/api-xm";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ListProductOneLine() {
  const [listProduct, setlistProduct] = useState([]);
  //Lấy dữ liệu từ api local
  const getListProduct = async () => {
    let response = await axios.get("Products");
    console.log("Object api user:", response);
    console.log("Data api user :", response.data);
    setlistProduct(response.data);
  };
  //use Effect
  useEffect(() => {
    getListProduct();
  }, []);

  let render = listProduct.map((item, index) => {
    return (
      <ItemProduct key={item.id} renderProduct={item} rollNo={index + 1} />
    );
  });

  return (
    <>
      <div className="list-product row">{render}</div>
    </>
  );
}

export default ListProductOneLine;
