import React from "react";
import { Link, Outlet } from "react-router-dom";

function Button() {
  return (
    <>
      <header className="header">
        <div className="game-button">
          <Link to={"poetrycard"} className="button-link">
            Button
          </Link>
        </div>
      </header>
      <Outlet />
    </>
  );
}

export default Button;
