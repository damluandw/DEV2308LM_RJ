// import logo from './logo.svg';
import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./componnents/Header";
import Footer from "./componnents/Footer";

import Index from "./componnents/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Introduce from "./componnents/Introduce";
import Contact from "./componnents/Contact";
import Products from "./componnents/Products";

import axios from "./api/api-xm";
import AllProducts from "./componnents/AllProducts";
import News from "./componnents/News";
import Partner from "./componnents/Partner";
import PageNews from "./componnents/PageNews";
import ProductDetails from "./componnents/ProductDetails";

function App() {
  const [listCategories, setListCategories] = useState([]);
  //Lấy dữ liệu từ api local
  const getListCategories = async () => {
    let response = await axios.get("Categories");
    setListCategories(response.data);
    console.log(response.data);
  };
  //use Effect
  useEffect(() => {
    getListCategories();
  }, []);
  // renderAllProducts = listCategories.map((item, index) => {
  //   return <Route key={item.id} path={item.slug} element={<AllProducts />} />;
  // });

  const [listProduct, setlistProduct] = useState([]);
  //Lấy dữ liệu từ api local
  const getListProduct = async () => {
    let response = await axios.get("Products");
    console.log("Data api products :", response.data);
    setlistProduct(response.data);
  };
  //use Effect
  useEffect(() => {
    getListProduct();
  }, []);

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Index listCategories={listCategories}  listProduct ={listProduct}/>} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          {listCategories.map((item, index) => {
            let ref = "/products/" + item.slug;
            return <Route key={index} path={ref} element={<AllProducts />} />;
          })}
          <Route path="/products/propduct-detail" element={<ProductDetails />} />
          <Route path="/news" element={<News />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/news/pagenews" element={<PageNews />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      {/* Thư viện js  */}
    </>
  );
}

export default App;
