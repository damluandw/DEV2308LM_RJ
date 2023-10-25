import React, { useEffect, useState } from "react";
import ItemCategory from "./ItemCategory";
import axios from "../api/api-xm";

function Categories() {
    const [listCategories, setListCategories] = useState([]);
    //Lấy dữ liệu từ api local
    const getListCategories = async () => {
      let response = await axios.get("Categories");
      setListCategories(response.data);
    };
  //use Effect
  useEffect(() => {
    getListCategories();
  }, []);
  let render = listCategories.map((item, index) => {
    return (
      <ItemCategory key={item.id} renderCategory={item} rollNo={index + 1} />
    );
  });
  return (
    <section id="catelog">
      <div className="catalog-box">
        <div className="container">
          <div className="row">
            {render}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
