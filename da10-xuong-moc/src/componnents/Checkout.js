import React, { useEffect, useState } from "react";
import "./css/checkout.css";
import axioslocal from "../api/api-local";
import { useNavigate } from "react-router-dom";

function Checkout({ listCart, onMessage, onCheckout }) {
  const navigate = useNavigate();
  const [total, setTotal] = useState([]);
  const getCartTotal = () => {
    let total = 0;
    {
      listCart?.map((item) => (total += item.product.priceNew * item.quantity));
    }
    setTotal(total);
  };

  useEffect(() => {
    getCartTotal();
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    getCartTotal();
  }, [listCart]);
  const renderCart = listCart.map((item, index) => {
    // getCartTotal();
    return (
      <li key={item.product.id} className="fw-normal">
        {item.product.title} <b>(SL: {item.quantity})</b>
        <span>{item.product.priceNew.toLocaleString()}</span>
      </li>
    );
  });
  const [register, setRegister] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    city: "",
    tel: "",
    email: "",
  });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");

  const checkInput = () => {
    let type = "warning";
    let title = "Warning";
    let message = "Vui lòng điền đầy đủ thông tin";
    if (firstName == "") {
      onMessage(type, title, message);
      return false;
    }
    if (lastName == "") {
      onMessage(type, title, message);
      return false;
    }
    if (country == "") {
      onMessage(type, title, message);
      return false;
    }
    if (streetAddress == "") {
      onMessage(type, title, message);
      return false;
    }
    if (city == "") {
      onMessage(type, title, message);
      return false;
    }
    if (tel == "") {
      onMessage(type, title, message);
      return false;
    }
    if (email == "") {
      onMessage(type, title, message);
      return false;
    }
    onMessage("success", "Thành công", "Thông tin đơn hàng đã được thêm!");
    return true;
  };
  const getDate = () => {
    const today = new Date();
    const second = today.getSeconds();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${year}${month}${date}${second}`;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (listCart == [] || listCart == undefined || listCart.length == 0 || listCart == null) {
      onMessage("warning", "Warning", "Không có sản phẩm trong đơn hàng! Vui lòng mua hàng trước khi thanh toán");
      navigate("/products");
      return;
    }
   
    let check = checkInput();
    if (!check) return;
    const reg = {
      firstName: firstName,
      lastName: lastName,
      companyName: companyName,
      country: country,
      streetAddress: streetAddress,
      city: city,
      tel: tel,
      email: email,
    };
    setRegister(reg);
    const today = new Date();
    let cart = {
      id: getDate(),
      listCart: listCart,
      infoUserBuy: reg,
    };
    let response = await axioslocal.post("InfoBuy", cart);

    localStorage.setItem("DEV2308LMJS_DA10_CARTS", JSON.stringify([]));
    localStorage.setItem(
      "DEV2308LMJS_DA10_CARTS_HISTORY",
      JSON.stringify(listCart)
    );
    onCheckout();
    navigate("/home");
  };
  return (
    <>
      <section className="checkout-section spad">
        <div className="container">
          <form action="#" className="checkout-form">
            <div className="row">
              <div className="col-lg-6">
                {/* <div className="checkout-content">
                  <a href="#" className="content-btn">
                    Click Here To Login
                  </a>
                </div> */}
                <h4>Biiling Details</h4>
                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor="fir">
                      First Name<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="fir"
                      name={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      value={firstName}
                    />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="last">
                      Last Name<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="last"
                      name={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      value={lastName}
                    />
                  </div>
                  <div className="col-lg-12">
                    <label htmlFor="cun-name">Company Name</label>
                    <input
                      type="text"
                      id="cun-name"
                      name={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      value={companyName}
                    />
                  </div>
                  <div className="col-lg-12">
                    <label htmlFor="cun">
                      Country<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="cun"
                      name={country}
                      onChange={(e) => setCountry(e.target.value)}
                      value={country}
                    />
                  </div>
                  <div className="col-lg-12">
                    <label htmlFor="street">
                      Street Address<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="street"
                      className="street-address"
                      name={streetAddress}
                      onChange={(e) => setStreetAddress(e.target.value)}
                      value={streetAddress}
                    />
                  </div>
                  <div className="col-lg-12">
                    <label htmlFor="town">
                      Town / City<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="town"
                      name={city}
                      onChange={(e) => setCity(e.target.value)}
                      value={city}
                    />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="email">
                      Email Address<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="email"
                      name={email}
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="phone">
                      Phone<span>*</span>
                    </label>
                    <input
                      type="text"
                      id="phone"
                      name={tel}
                      onChange={(e) => setTel(e.target.value)}
                      value={tel}
                    />
                  </div>
                  <div className="col-lg-12">
                    <div className="create-item">
                      <label htmlFor="acc-create">
                        Create an account?
                        <input type="checkbox" id="acc-create" />
                        <span className="checkmark" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                {/* <div className="checkout-content">
                  <input type="text" placeholder="Enter Your Coupon Code" />
                </div> */}
                <div className="place-order">
                  <h4>Your Order</h4>
                  <div className="order-total">
                    <ul className="order-table">
                      <li>
                        Product <span>Total</span>
                      </li>
                      {renderCart}
                      {/* <li className="fw-normal">
                        Subtotal <span>{total.toLocaleString()}</span>
                      </li> */}
                      <li className="total-price">
                        Total <span>{total.toLocaleString()}</span>
                      </li>
                    </ul>
                    {/* <div className="payment-check">
                      <div className="pc-item">
                        <label htmlFor="pc-check">
                          Cheque Payment
                          <input type="checkbox" id="pc-check" />
                          <span className="checkmark" />
                        </label>
                      </div>
                      <div className="pc-item">
                        <label htmlFor="pc-paypal">
                          Paypal
                          <input type="checkbox" id="pc-paypal" />
                          <span className="checkmark" />
                        </label>
                      </div>
                    </div> */}
                    <div className="order-btn">
                      <button
                        // type="submit"
                        className="site-btn place-btn"
                        onClick={(e) => handleSubmit(e)}
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Checkout;
