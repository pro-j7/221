import React, { useState } from "react";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="user-form-container">
      <p className="login-text">Register</p>
      <form className="register-form" onSubmit={submitHandler}>
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
        <button type="sumbit">Continue</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Please log in
      </button>
    </div>
  );
};

export default Register;
