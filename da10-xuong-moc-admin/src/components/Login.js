import React, { useState, useEffect } from "react";
import "./css/login.css";
import { useNavigate } from "react-router-dom";


function Login({ statusLogin, onLoginSubmit }) {
  const navigate = useNavigate();
  //   const userRef = useRef();
  //   const errRef = useRef();
  const [user, setUser] = useState("DamLuan");
  const [pwd, setPwd] = useState("6789");
  const [errMsg, setErrMsg] = useState("");
  const [susscess, setSusscess] = useState(statusLogin);
  useEffect(() => {
    // userRef.current.focus();
    console.log("statusLogin:", statusLogin);
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);
  const fn_handleSubmit = () => {

    console.log("login")
    if (user == "DamLuan" && pwd == "6789") {
      let statusLogin = true;
      let users = {
        user: user,
        pwd: pwd,
        susscess: true,
      };
      setSusscess(true);
      onLoginSubmit(true);
      sessionStorage.setItem("DEV2308LMJS_DA10ADMIN_LOGIN", JSON.stringify(users));
      navigate("/home");
    } else {
      let statusLogin = false;
      let users = {
        user: "",
        pwd: "",
        susscess: false,
      };
      setSusscess(false);
      onLoginSubmit(false);
      sessionStorage.setItem("DEV2308LMJS_DA10ADMIN_LOGIN", JSON.stringify(users));
    }

    setUser("");
    setPwd("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fn_handleSubmit()
  }
  return (
    <>
      <section id="login">
          <div>
            {/* <p
            ref={errRef}
            className={errMsg ? "errMsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p> */}
            <h1>Sign in</h1>
            <form >
              <label htmlFor="userName">UserName:</label>
              <input
                type="text"
                id="userName"
                //   ref={useRef}
                // autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                //   ref={useRef}
                // autoComplete="off"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
              />
              <button type="button" onClick={(e) => handleSubmit(e)}>Sign In</button>
            </form>
            <p>
              Need a Account? <br />
              <span className="line">
                <a href="#">Sign Up</a>
              </span>
            </p>
          </div>
        </section>
    </>
  );
}

export default Login;
