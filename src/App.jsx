// App.jsx
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Navigate,
  Outlet,
  Link,
} from "react-router-dom";
import Main from "./pages/main/Main";
import Login from "./pages/login/Login";
import Us from "./pages/main/subSection/Us";
import Arts from "./pages/main/subSection/Arts";
import Business from "./pages/main/subSection/Business";
import World from "./pages/main/subSection/World";

const HeaderLayout = () => (
  <div>
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/main" replace={true} />,
  },
  {
    path: "/main",
    element: <HeaderLayout />,
    children: [
      { index: true, element: <Main /> },
      { path: "login", element: <Login /> },
      { path: "us", element: <Us /> },
      { path: "business", element: <Business /> },
      { path: "arts", element: <Arts /> },
      { path: "world", element: <World /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
