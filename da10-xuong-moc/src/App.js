// import logo from './logo.svg';
import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./componnents/Header";
import Footer from "./componnents/Footer";

import Index from "./componnents/Index";
import {
  BrowserRouter,
  Switch,
  Routes,
  Route,
  Link,
  useParams,
  Navigate
} from "react-router-dom";
import Introduce from "./componnents/Introduce";
import Contact from "./componnents/Contact";
import Products from "./componnents/Products";

import axios from "./api/api-xm";
import axioslocal from "./api/api-local";
import AllProducts from "./componnents/AllProducts";
import News from "./componnents/News";
import Partner from "./componnents/Partner";
import PageNews from "./componnents/PageNews";
import ProductDetails from "./componnents/ProductDetails";

function App() {
  const [listCategories, setListCategories] = useState([]);
  const getListCategories = async () => {
    let response = await axios.get("Categories");
    setListCategories(response.data);
    // console.log("listCategories" , response.data);
  };
  //use Effect
  useEffect(() => {
    getListCategories();
  }, []);
  // renderAllProducts = listCategories.map((item, index) => {
  //   return <Route key={item.id} path={item.slug} element={<AllProducts />} />;
  // });

  const [listProduct, setlistProduct] = useState([]);
  const getListProduct = async () => {
    let response = await axioslocal.get("Products");
    setlistProduct(response.data);
    // console.log("listProduct" , response.data);
  };
  //use Effect
  useEffect(() => {
    getListProduct();
  }, []);


  return (
    <>
      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Index listCategories={listCategories} listProduct={listProduct} />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products listProduct={listProduct} listCategories={listCategories} />} />
          {listCategories.map((item, index) => {
            let ref = "/products/" + item.slug;
            return <Route key={index} path={ref} element={<AllProducts key={index} category={item} listProduct={listProduct} />} />;
          })}
          <Route path="/products/propduct-detail/:id" element={<ProductDetails listProduct={listProduct}/>} />

          <Route path="/news" element={<News />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/news/pagenews" element={<PageNews />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
      {/* Thư viện js  */}
    </>
  );
}

export default App;
