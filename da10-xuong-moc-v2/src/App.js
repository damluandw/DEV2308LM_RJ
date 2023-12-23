import logo from "./logo.svg";
import "./App.css";
import { ReactNotifications, Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./componnents/Header";
import Index from "./componnents/Index";
import Footer from "./componnents/Footer";
import PageListProduct from "./componnents/PageListProduct";
import { connect } from "react-redux";
import { useEffect } from "react";

export const App = ({ notify }) => {
  const setNotify = (typeMess, title, message) => {
    Store.addNotification({
      title: title,
      message: message,
      type: typeMess,
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
  console.log(notify);
  useEffect(() => {
    
    if (notify.typeMess != "" || notify.type != undefined){
      setNotify(notify.typeMess, notify.title, notify.message);
    }
      
  }, [notify]);
  return (
    <>
      <div className="app-container">
        <ReactNotifications />
      </div>

      <BrowserRouter>
        <Header />
        <div className="fix-header"></div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Index />} />
          <Route path="/products" element={<PageListProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    notify: state.notify,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
