import React, { useState, useEffect } from "react";

const User = {
  email: "test@example.com",
  password: "test2323@@@",
};

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  };

  const onClickConfirmButton = () => {
    if (email === User.email && password === User.password) {
      alert("로그인에 성공했습니다.");
    } else {
      alert("등록되지 않은 회원입니다.");
    }
  };

  useEffect(() => {
    if (emailValid && passwordValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, passwordValid]);

  return (
    <div className="contentWrap">
      <p className="login-text">Login</p>
      <div className="user-form-container">
        <form className="login-form">
          <label for="email">Email</label>
          <input
            onChange={handleEmail}
            type="Email Address"
            placeholder="Please enter your email"
            id="email"
            name="email"
          />
          <div className="errorMessage">
            {!emailValid && email.length > 0 && (
              <div>Please enter valid email address</div>
            )}
          </div>

          <label for="password">Password</label>
          <input
            onChange={handlePassword}
            type="Password"
            placeholder="**********"
            id="password"
            name="password"
          />
          <div className="errorMessage">
            {!passwordValid && password.length > 0 && (
              <div>
                Please enter more than 8-digit password
                <br />
                including numbers and special character
              </div>
            )}
          </div>

          <button type="submit">Continue</button>
        </form>
        <div>
          <button
            className="link-btn"
            onClick={() => props.onFormSwitch("register")}
          >
            Don't have an account? Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
