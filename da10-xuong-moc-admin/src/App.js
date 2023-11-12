import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState({
    user: "",
    pwd: "",
    susscess: false,
  });
  const getUsers = async () => {
    const users = JSON.parse(localStorage.getItem("DEV2308LMJS_DA10_LOGIN"));
    setUsers(users);
  };
  const handleLogin = (x) => {
    console.log("x:", x);
    getUsers();
    if (users.susscess) {
      // notify("success", "Thành công", "Đăng nhập thành công");
    }
  };
  return (
    <>
  <Login onLoginSubmit ={handleLogin}/>
    </>
  );
}

export default App;
