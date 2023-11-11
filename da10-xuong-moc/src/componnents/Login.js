import React, { useRef, useState, useEffect, useContext } from "react";
import "./css/login.css";
import AuthContext from "./context/AuthProvider";

function Login({ statusLogin, onLogin }) {
  //   const userRef = useRef();
  //   const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [susscess, setSusscess] = useState(statusLogin);

  useEffect(() => {
    // userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user == "DamLuan" && pwd == "6789") {
      let statusLogin = true;
      let users = {
        user: user,
        pwd: pwd,
        susscess: true,
      };
      setSusscess(true);
      // onLogin();
      localStorage.setItem("DEV2308LMJS_DA10_LOGIN", JSON.stringify(users));
    } else {
      let statusLogin = false;
      let users = {
        user: "",
        pwd: "",
        susscess: false,
      };
      setSusscess(false);
      localStorage.setItem("DEV2308LMJS_DA10_LOGIN", JSON.stringify(users));
    }

    setUser("");
    setPwd("");
  };
  return (
    <>
      {susscess ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to home</a>
          </p>
        </section>
      ) : (
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
            <form onSubmit={handleSubmit}>
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
              <button>Sign In</button>
            </form>
            <p>
              Need a Account? <br />
              <span className="line">
                <a href="#">Sign Up</a>
              </span>
            </p>
          </div>
        </section>
      )}
    </>
  );
}

export default Login;
