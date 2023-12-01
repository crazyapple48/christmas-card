import React from "react";
import { Link, Outlet } from "react-router-dom";

function Button() {
  return (
    <>
      <header>
        <button>
          <Link to={"/insultcard"}>Button</Link>
        </button>
      </header>
      <Outlet />
    </>
  );
}

export default Button;
