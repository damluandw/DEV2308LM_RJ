import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import { useState } from "react";
import { Store } from "react-notifications-component";

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
    const users = JSON.parse(localStorage.getItem("DEV2308LMJS_DA10_LOGIN"));
    setUsers(users);
  };
  const handleLogin = () => {
    // getUsers();
    console.log("applogin");
    // notify("success", "Thành công", "Đăng nhập thành công");
    // if (users.susscess) {
    //    notify("success", "Thành công", "Đăng nhập thành công");
    // }
  };
  return (
    <>
      <Login onLoginSubmit={handleLogin} />
    </>
  );
}

export default App;
