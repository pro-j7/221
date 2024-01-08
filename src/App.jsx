// App.jsx
import React, { useState } from "react";
import ReactDOM from "react-dom";
// import Main from "./pages/main/main";
import Header from "./components/header";
import Login from "./pages/login/login";
import Register from "./pages/login/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthContext from "./context/AuthContext";

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const taggleForm = (formName) => {
    setCurrentForm(formName);

    return <RouterProvider router={router} />;
  };

  return (
    <div className="App">
      {currentForm === "login" ? (
        <Login onFormSwitch={taggleForm} />
      ) : (
        <Register onFormSwitch={taggleForm} />
      )}
    </div>
  );
}

export default App;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
