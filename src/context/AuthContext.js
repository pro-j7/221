import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: (emailpassword) => {},
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 사이드 이펙트 1
  useEffect(() => {
    // 만약 로그인이 되어있다면 isLoggedIn = true
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn"); //로그인을 안하면 null, 하면 1
    if (storedUserLoggedInInfo === "1") setIsLoggedIn(true);
    // 만약 로그인이 되어있지 않다면 isLoggedIn = false
    else setIsLoggedIn(false);
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1"); //로그인하고 새로고침을 해도 계속 로그인이 되어있게 하기 위해 사용
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn"); //로그아웃을 하고 계속 로그인이 되어있지 않게 하기 위해 사용
    setIsLoggedIn(false);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.chilren}
    </AuthContext.Provider>
  );
  //{props.children}을 쓰면 그 안에 있는 문법을 다 가져오게 됨
};

export default AuthContext;
