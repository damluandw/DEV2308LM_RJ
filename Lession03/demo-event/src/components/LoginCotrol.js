import React from "react";
import LoginComp from "./LoginComp";
import LogoutComp from "./LogoutComp";

export default function LoginCotrol(props) {
  const isLogin = props.isLogin;
  if (isLogin) {
    return <LoginComp />;
  } else {
    return <LogoutComp />;
  }
}
