import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      className="p-4 text-white bg-red-600 text-xl font-semibold flex
    justify-between"
    >
      Blog
      <Link to="/users">Usuarios</Link>
    </header>
  );
}

export default Header;
