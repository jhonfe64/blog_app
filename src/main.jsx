import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import ArticleDetailed from "./pages/ArticleDetailed";
import { ArticleContextProvider } from "./context/ArticlesContext";
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ArticleContextProvider>
      <RouterProvider router={router} />
    </ArticleContextProvider>
  </React.StrictMode>
);
