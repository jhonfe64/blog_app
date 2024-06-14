import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ArticleDetailed from "./pages/ArticleDetailed";
import { ArticleContextProvider } from "./context/ArticlesContext";
import Users from "./pages/Users";
import Login from "./pages/Login";
import ProtectRoute from "./components/ProtectRoute";
import Error from "./pages/Error";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" />,
    errorElement: <Error />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/article/:id",
    element: <ArticleDetailed />,
  },
  {
    path: "/users",
    element: (
      <ProtectRoute>
        <Users />
      </ProtectRoute>
    ),
  },
  {
    path: "/logIn",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ArticleContextProvider>
      <RouterProvider router={router} />
    </ArticleContextProvider>
  </React.StrictMode>
);
