import React, { useState, useLayoutEffect } from "react";
import { Navigate } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  const [token, setToken] = useState("");
  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token !== undefined) {
      setToken(token);
    }
  }, []);

  if (token !== null) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectRoute;
