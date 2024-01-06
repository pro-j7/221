// App.jsx
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Navigate,
  Outlet,
} from "react-router-dom";
import Main from "./pages/main/main";

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

      { path: "lifestyle", element: <Lifestyle /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
