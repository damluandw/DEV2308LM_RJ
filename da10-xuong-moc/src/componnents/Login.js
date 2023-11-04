import React, { useRef, useState, useEffect, useContext }from "react";
import "./css/login.css";
import AuthContext from "./context/AuthProvider";

function Login() {
  //   const userRef = useRef();
  //   const errRef = useRef();
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [susscess, setSusscess] = useState(false);

  useEffect(() => {
    // userRef.current.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setUser("");
    setPwd("");
    setSusscess(true);
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
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                //   ref={useRef}
                autoComplete="off"
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
