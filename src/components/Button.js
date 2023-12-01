import React from "react";
import { Link, Outlet } from "react-router-dom";

function Button() {
  return (
    <>
      <header className="header">
        <button>
          <Link to={"poetrycard"}>Button</Link>
        </button>
      </header>
      <Outlet />
    </>
  );
}

export default Button;
