import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import { useState } from "react";
import { ReactNotifications, Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Manage from "./components/Manage";

function App() {
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
  const [users, setUsers] = useState({
    user: "",
    pwd: "",
    susscess: false,
  });
  const getUsers = async () => {
    const users = JSON.parse(
      sessionStorage.getItem("DEV2308LMJS_DA10ADMIN_LOGIN")
    );
    setUsers(users);
    return users;
  };
  const handleLogin = (check) => {
    getUsers();
    if (check) {
      notify("success", "Thành công", "Đăng nhập thành công");
    } else {
      notify(
        "warning",
        "warning",
        "Tài khoản hoặc mật khẩu không chính xác! Vui lòng thử lại"
      );
    }
  };
  return (
    <>
      <ReactNotifications />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
          <Route
            path="/login"
            element={<Login onLoginSubmit={handleLogin} />}
          />
          <Route path="/home" element={<Manage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
