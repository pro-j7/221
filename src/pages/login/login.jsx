import React, { useState } from "react";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      {/* <div className="logo-img">
        <img src="NYTimesLogo.png" />
      </div> */}
      <p className="login-text">Login</p>
      <div className="user-form-container">
        <form className="login-form" onSubmit={submitHandler}>
          <label for="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="Email Address"
            placeholder="Please enter your email"
            id="email"
            name="email"
          />
          <label for="password">Password</label>
          <input
            value={password}
            onChange={(p) => setPassword(p.target.value)}
            type="Password"
            placeholder="**********"
            id="password"
            name="password"
          />
          <button
            type="sumbit"
            // onClick={() => {
            //   mainPage;
            // }}
          >
            Continue
          </button>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("register")}
        >
          Don't have an account? Register
        </button>
      </div>
    </main>
  );
};

export default Login;
