import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ArticleDetailed from "./pages/ArticleDetailed";
import { ArticleContextProvider } from "./context/ArticlesContext";
import Users from "./pages/Users";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "article/:id",
    element: <ArticleDetailed />,
  },
  {
    path: "users",
    element: <Users />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="306740953961-nn6402ad1bf57osus2j2k5k0jkk3p3s3.apps.googleusercontent.com">
      <ArticleContextProvider>
        <RouterProvider router={router} />
      </ArticleContextProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
