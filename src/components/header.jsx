import React from "react";
import ReactDOM from "react-dom";

const headerStyles = {
  topContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //margin: "0 20px",
    //padding: "10px 0",
    // borderBottom: "1px solid rgb(141, 135, 135)",
  },

  logo: {
    maxWidth: "300px",
    height: "auto",
  },

  empty: {
    width: "100px",
    height: "auto",
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "15px 20px",
    paddingBottom: "10px",
    borderBottom: "thick double #020d11",
  },

  categories: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "none",
    display: "flex",
  },

  headerLeftRight: {
    color: "rgb(0, 0, 0)",
    cursor: "pointer",
  },

  category: {
    padding: "8px",
    color: "rgb(0, 0, 0)",
    cursor: "pointer",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "none",
  },

  categoryHover: {
    backgroundColor: "#003366",
  },
};

function Header() {
  return (
    <header>
      <div style={headerStyles.topContainer}>
        <img src="NYTimesLogo.png" alt="Logo" style={headerStyles.logo} />
        <div style={headerStyles.empty}></div>
      </div>
      <div style={headerStyles.container}>
        <div style={headerStyles.headerLeftRight}>Jan 01, 2024</div>
        <div style={headerStyles.categories}>
          <div style={headerStyles.category}>U.S.</div>
          <div style={headerStyles.category}>World</div>
          <div style={headerStyles.category}>Business</div>
          <div style={headerStyles.category}>Arts</div>
          <div style={headerStyles.category}>Lifestyle</div>
        </div>
        <div style={headerStyles.headerLeftRight}>Login</div>
      </div>
    </header>
  );
}

export default Header;

// import React, { useState, useEffect, useReducer, useContext } from "react";

// import Card from "../UI/Card/Card";
// import classes from "./Login.module.css";
// import Button from "../UI/Button/Button";
// import AuthContext from "../../context/AuthContext";

// const emailReducer = (state, action) => {
//   // 값이 바뀌는 경우. setEnteredEail
//   if (action.type === "USER_INPUT") {
//     return {
//       value: action.val,
//       isValid: action.val.includes("@"),
//     };
//   }
//   // 유효성 검사를 해야하는 경우. setEmailIsValid
//   if (action.type === "INPUT_BLUR") {
//     return {
//       value: state.value,
//       isvalid: state.value.includes("@"),
//     };
//   }
//   return {
//     value: "",
//     isValid: null,
//   };
// };

// const passwordReducer = (state, action) => {
//   // 값이 바뀌는 경우. setEnteredPassword
//   if (action.type === "USER_INPUT") {
//     return {
//       value: action.val,
//       isValid: action.val.trim().length > 6,
//     };
//   }
//   // 유효성 검사를 해야하는 경우. setPasswordIsValid
//   if (action.type === "INPUT_BLUR") {
//     return {
//       value: state.value,
//       isvalid: state.value.trim().length > 6,
//     };
//   }
//   return {
//     value: "",
//     isValid: null,
//   };
// };

// const Login = () => {
//   const context = useContext(AuthContext);

//   // const [enteredEmail, setEnteredEmail] = useState("");
//   // const [emailIsValid, setEmailIsValid] = useState();
//   // const [enteredPassword, setEnteredPassword] = useState("");
//   // const [passwordIsValid, setPasswordIsValid] = useState();
//   const [formIsValid, setFormIsValid] = useState(false);
//   const [emailState, dispatchEmail] = useReducer(emailReducer, {
//     value: "",
//     isValid: null,
//   });
//   const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
//     value: "",
//     isValid: null,
//   });

//   useEffect(() => {
//     console.log("EFFECT RUNNING");

//     return () => {
//       console.log("EFFECT CLEANUP");
//     };
//   }, []);

//   // identifier가 끝나고 기억하고 있다가 다른 이벤트가 실행되지 않으면 유지,
//   // 새로운 이벤트가 생기면 useEffect가 실행되면 그 전꺼에 덮어쓰기가 된다
//   // useEffect(() => {
//   //   const identifier = setTimeout(() => {
//   //     setFormIsValid(
//   //       enteredEmail.includes("@") && enteredPassword.trim().length > 6
//   //     );
//   //   }, 500);
//   //   return () => {
//   //     clearTimeout(identifier);
//   //   };
//   // }, [enteredEmail, enteredPassword]);

//   const emailChangeHandler = (event) => {
//     dispatchEmail({ type: "USER_INPUT", val: event.target.value });

//     setFormIsValid(emailState.isValid && passwordState.isValid);
//   };

//   const passwordChangeHandler = (event) => {
//     dispatchPassword({ type: "USER_INPUT", val: event.target.value });
//     setFormIsValid(emailState.isValid && passwordState.isValid);
//   };

//   const validateEmailHandler = () => {
//     dispatchEmail({ type: "INPUT_BLUR" });
//   };

//   const validatePasswordHandler = () => {
//     dispatchPassword({ type: "INPUT_BLUR" });
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     context.onLogin(emailState.value, passwordState.value);
//   };

//   return (
//     <Card className={classes.login}>
//       <form onSubmit={submitHandler}>
//         <div
//           className={`${classes.control} ${
//             emailState.isValid === false ? classes.invalid : ""
//           }`}
//         >
//           <label htmlFor="email">이메일</label>
//           <input
//             type="email"
//             id="email"
//             value={emailState.value}
//             onChange={emailChangeHandler}
//             onBlur={validateEmailHandler}
//           />
//         </div>
//         <div
//           className={`${classes.control} ${
//             passwordState.isValid === false ? classes.invalid : ""
//           }`}
//         >
//           <label htmlFor="password">비밀번호</label>
//           <input
//             type="password"
//             id="password"
//             value={passwordState.value}
//             onChange={passwordChangeHandler}
//             onBlur={validatePasswordHandler}
//           />
//         </div>
//         <div className={classes.actions}>
//           <Button type="submit" className={classes.btn} disabled={!formIsValid}>
//             로그인
//           </Button>
//         </div>
//       </form>
//     </Card>
//   );
// };

// export default Login;
