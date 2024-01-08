import React, { useState, useEffect } from "react";
import "./login.css";

const User = {
  email: "soojin0869@gmail.com",
  password: "!tnwls0869",
};

const Register = (props) => {
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
      alert("Thanks for Register");
    } else {
      alert("Please try again");
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

          <button
            onClick={onClickConfirmButton}
            disabled={notAllow}
            className="submitButton"
          >
            Continue
          </button>
        </form>

        <div>
          <button
            className="link-btn"
            onClick={() => props.onFormSwitch("login")}
          >
            Already have an account? Please log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
