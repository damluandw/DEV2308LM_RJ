// import logo from './logo.svg';
import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./componnents/Header";
import Footer from "./componnents/Footer";

import Index from "./componnents/Index";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useSearchParams,
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
import SearchPage from "./componnents/SearchPage";
import Login from "./componnents/Login";
import { ReactNotifications, Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import Register from "./componnents/Register";

function App() {
  //categories
  const [listCategories, setListCategories] = useState([]);
  const getListCategories = async () => {
    let response = await axios.get("Categories");
    setListCategories(response.data);
  };
  useEffect(() => {
    getListCategories();
  }, []);
  //products
  const [listProduct, setListProduct] = useState([]);
  const getListProduct = async () => {
    let response = await axioslocal.get("Products");
    setListProduct(response.data);
  };
  useEffect(() => {
    getListProduct();
  }, []);
  //carts
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
  //wishlist
  const [wishlist, setWishlist] = useState([]);
  const getWishlist = async () => {
    const list = JSON.parse(localStorage.getItem("DEV2308LMJS_DA10_WISHLIST"));
    if (list === null) {
      let response = await axioslocal.get("wishlist");
      setWishlist(response.data);
    } else setWishlist(list);
  };
  useEffect(() => {
    getWishlist();
  }, []);

  const getIndexByProduct = (list, product) => {
    for (let index = 0; index < list.length; index++) {
      if (list[index].product.id === product.id) {
        return index; //sản phẩm đã tồn tại trong giỏ hàng
      }
    }
    return -1; // sản phẩm chưa có trong giỏ hàng
  };

  //handle
  const handleBuy = (product) => {
    let quantity = 1;
    let item = { product, quantity };
    let index = -1;
    let listTemp = listCart;
    if (listTemp.length === 0) {
      //khách hàng chưa mua hàng và giỏ hàng của khách chưa có sản phẩm nào
      //thêm sản phẩm vào giỏ hàng
      listTemp.push(item);
      notify("success", "Thành công", "Sản phẩm đã được thêm vào giỏ hàng");
    } else {
      // giỏ hàng của khách đã tồn tại
      //TH1/TH2
      // dựa vào index để xác định => viết hàm kiểm tra sản phẩm đã có trong giỏ hàng chưa
      index = getIndexByProduct(listTemp, product);
      if (index === -1) {
        listTemp.push(item);
        notify("success", "Thành công", "Sản phẩm đã được thêm vào giỏ hàng");
      } else {
        // nếu sản phẩm mua đã có trong giỏ hàng, thực hiện cập nhật số lượng
        listTemp[index].quantity =
          parseInt(listTemp[index].quantity) + parseInt(quantity);
        notify("success", "Thành công", "Sản phẩm đã có trong giỏ hàng");
      }
    }
    // cập nhật localStorage
    localStorage.setItem("DEV2308LMJS_DA10_CARTS", JSON.stringify(listTemp));
    getListCart();
  };

  let handleWishlist = (product) => {
    // let quantity = 1;
    let item = { product };
    let index = -1;
    let listTemp = wishlist;
    if (listTemp.length === 0) {
      //khách hàng chưa mua hàng và giỏ hàng của khách chưa có sản phẩm nào
      //thêm sản phẩm vào giỏ hàng
      listTemp.push(item);
      notify(
        "success",
        "Thành công",
        "Sản phẩm đã được thêm vào danh sách yêu thích"
      );
    } else {
      // giỏ hàng của khách đã tồn tại
      //TH1/TH2
      // dựa vào index để xác định => viết hàm kiểm tra sản phẩm đã có trong giỏ hàng chưa
      index = getIndexByProduct(listTemp, product);
      if (index === -1) {
        notify(
          "success",
          "Thành công",
          "Sản phẩm đã được thêm vào danh sách yêu thích"
        );
        listTemp.push(item);
      } else {
        // nếu sản phẩm mua đã có trong giỏ hàng, thực hiện cập nhật số lượng
        // alert("Sản phẩm đã có trong giỏ hàng");
        notify("warning", "Warning", "Sản phẩm đã có trong mục yêu thích");
      }
    }
    // cập nhật localStorage
    localStorage.setItem("DEV2308LMJS_DA10_WISHLIST", JSON.stringify(listTemp));
    getWishlist();
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

  //search
  const [isShowSearch, setIsShowSearch] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const handleSearch = (value) => {
    setIsShowSearch(!isShowSearch);
    if (value !== "" && value !== null && value !== undefined) {
      setValueSearch(value);
    }
    setValueSearch("");
  };
  const handleShowSearch = () => {
    setIsShowSearch(!isShowSearch);
  };
  const handleDeleteWishlist = (product) => {
    let index = -1;
    let listTemp = wishlist;
    index = getIndexByProduct(listTemp, product);
    if (index >= 0) {
      listTemp.splice(index, 1);
    }
    localStorage.setItem("DEV2308LMJS_DA10_WISHLIST", JSON.stringify(listTemp));
    getWishlist();
  };

  const [pageSize, setPageSize] = useState(4);

  const [news, setNews] = useState([]);
  const getNews = async () => {
    let response = await axios.get("News");
    setNews(response.data);
  };
  useEffect(() => {
    getNews();
  }, []);
  const notify = (type, title, message) => {
    Store.addNotification({
      title: title,
      message: message,
      type: type,
      insert: "top",
      // content: (
      //   <div>
      //     <div>success</div> <span onClick={this.remove}>undo</span>
      //   </div>
      // ),
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 3000,
        onScreen: true,
        pauseOnHover: true,
      },
      onNotificationRemoval: () => this.remove(),
    });
  };
  const handleLogin = (statusLogin) => {
    console.log(statusLogin)
    // if (statusLogin)
    //   notify("success", "Thành công", "Bạn đã đăng nhập thành công");
    // else{
    //   notify("warning", "Cảnh báo", "Tên đăng nhập hoặc mật khẩu của bạn không đúng! Vui lòng thử lại");
    // }
  };

  return (
    <>
      <div className="app-container">
        <ReactNotifications />
      </div>
      <BrowserRouter>
        <Header
          listCart={listCart}
          wishlist={wishlist}
          onDelete={handleDelete}
          onUpdate={handleUpdate}
          isShowSearch={isShowSearch}
          onSearch={handleSearch}
          onShowSearch={handleShowSearch}
          valueSearch={valueSearch}
          onDeleteWishlist={handleDeleteWishlist}
        />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route
            path="/home"
            element={
              <Index
                listCategories={listCategories}
                listProduct={listProduct}
                onBuyProduct={handleBuy}
                onWishlist={handleWishlist}
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
                onBuyProduct={handleBuy}
                onWishlist={handleWishlist}
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
                    onWishlist={handleWishlist}
                    pageSize={pageSize}
                  />
                }
              />
            );
          })}
          <Route
            path="/products/propduct-detail/:id"
            element={
              <ProductDetails
                listProduct={listProduct}
                onBuyProduct={handleBuy}
                onWishlist={handleWishlist}
              />
            }
          />

          <Route
            path="/news"
            element={<News news={news} pageSize={pageSize} />}
          />
          <Route path="/partner" element={<Partner />} />
          <Route path="/news/pagenews" element={<PageNews />} />
          <Route
            path={`/search`}
            element={
              <SearchPage
                listProduct={listProduct}
                pageSize={pageSize}
                onBuyProduct={handleBuy}
                onWishlist={handleWishlist}
              />
            }
          />
          <Route path={`/register`} element={<Register />} />
          <Route
            path={`/login`}
            element={<Login onStatusLogin={handleLogin} />}
          />
        </Routes>
        <Footer />
        {/* <Routes>
          <AuthProvider>
            <Route path="/login" element={<Login />} />
          </AuthProvider>
        </Routes> */}
      </BrowserRouter>

      {/* Thư viện js  */}
    </>
  );
}

export default App;
