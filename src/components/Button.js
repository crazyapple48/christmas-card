import React from "react";
import { Link, Outlet } from "react-router-dom";

function Button() {
  return (
    <>
      <header className="header">
        <Link to={"poetrycard"} className="button-link">
          <div className="game-button">Button</div>
        </Link>
      </header>
      <Outlet />
    </>
  );
}

export default Button;
