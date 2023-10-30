// import logo from './logo.svg';
import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./componnents/Header";
import Footer from "./componnents/Footer";

import Index from "./componnents/Index";
import { BrowserRouter, Routes, Route, Navigate, useSearchParams } from "react-router-dom";
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
import SearchPage from "./componnents/SearchPage";

function App() {
  const [listCategories, setListCategories] = useState([]);
  const getListCategories = async () => {
    let response = await axios.get("Categories");
    setListCategories(response.data);
  };

  //use Effect
  useEffect(() => {
    getListCategories();
  }, []);

  const [listProduct, setListProduct] = useState([]);
  const getListProduct = async () => {
    let response = await axioslocal.get("Products");
    setListProduct(response.data);
  };

  //use Effect
  useEffect(() => {
    getListProduct();
  }, []);

  const [listCart, setListCart] = useState([]);
  const getListCart = async () => {
    const list = JSON.parse(localStorage.getItem("DEV2308LMJS_DA10_CARTS"));
    if (list === null) {
      let response = await axioslocal.get("Carts");
      setListCart(response.data);
    } else setListCart(list);
  };
  useEffect(() => {
    getListCart();
  }, []);

  const getIndexByProduct = (listCart, product) => {
    for (let index = 0; index < listCart.length; index++) {
      if (listCart[index].product.id === product.id) {
        return index; //sản phẩm đã tồn tại trong giỏ hàng
      }
    }
    return -1; // sản phẩm chưa có trong giỏ hàng
  };

  const handleBuy = (product) => {
    let quantity = 1;
    let item = { product, quantity };
    let index = -1;
    let listTemp = listCart;
    if (listTemp.length === 0) {
      //khách hàng chưa mua hàng và giỏ hàng của khách chưa có sản phẩm nào
      //thêm sản phẩm vào giỏ hàng
      listTemp.push(item);
    } else {
      // giỏ hàng của khách đã tồn tại
      //TH1/TH2
      // dựa vào index để xác định => viết hàm kiểm tra sản phẩm đã có trong giỏ hàng chưa
      index = getIndexByProduct(listTemp, product);
      if (index === -1) {
        listTemp.push(item);
      } else {
        // nếu sản phẩm mua đã có trong giỏ hàng, thực hiện cập nhật số lượng
        listTemp[index].quantity =
          parseInt(listTemp[index].quantity) + parseInt(quantity);
      }
    }
    // cập nhật localStorage
    localStorage.setItem("DEV2308LMJS_DA10_CARTS", JSON.stringify(listTemp));
    getListCart();
  };
  const handleDelete = (product) => {
    let index = -1;
    let listTemp = listCart;
    index = getIndexByProduct(listTemp, product);
    if (index >= 0) {
      listTemp.splice(index, 1);
    }
    localStorage.setItem("DEV2308LMJS_DA10_CARTS", JSON.stringify(listTemp));
    getListCart();
  };
  const handleUpdate = (product, action) => {
    let index = -1;
    let listTemp = listCart;
    index = getIndexByProduct(listTemp, product);
    if (action == "add") {
      listTemp[index].quantity++;
    } else {
      listTemp[index].quantity =
        parseInt(listTemp[index].quantity) === 1
          ? 1
          : listTemp[index].quantity - 1;
    }

    localStorage.setItem("DEV2308LMJS_DA10_CARTS", JSON.stringify(listTemp));
    getListCart();
  };
  const [isShowSearch, setIsShowSearch] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const handleSearch = (value) => {
    setIsShowSearch(!isShowSearch);
    if (value != "") {
      setValueSearch(value);
    }
  };
  return (
    <>
      <BrowserRouter>
        <Header
          listCart={listCart}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
          isShowSearch={isShowSearch}
          onSearch={handleSearch}
          valueSearch  ={valueSearch}
        />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route
            path="/home"
            element={
              <Index
                listCategories={listCategories}
                listProduct={listProduct}
                onBuyProduct={handleBuy}
              />
            }
          />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/products"
            element={
              <Products
                listProduct={listProduct}
                listCategories={listCategories}
              />
            }
          />
          {listCategories.map((item, index) => {
            let ref = "/products/" + item.slug;
            return (
              <Route
                key={index}
                path={ref}
                element={
                  <AllProducts
                    key={index}
                    category={item}
                    listProduct={listProduct}
                    onBuyProduct={handleBuy}
                  />
                }
              />
            );
          })}
          <Route
            path="/products/propduct-detail/:id"
            element={<ProductDetails listProduct={listProduct} />}
          />

          <Route path="/news" element={<News />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/news/pagenews" element={<PageNews />} />
          <Route path={`/search?key=${valueSearch}`} element={<SearchPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      {/* Thư viện js  */}
    </>
  );
}

export default App;
