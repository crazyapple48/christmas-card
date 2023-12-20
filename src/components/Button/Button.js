import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

function Button() {
  const [card, setCard] = useState(false);

  function handleClick(e) {
    card ? setCard(false) : setCard(true);
  }

  return (
    <>
      <header className="header">
        {!card ? (
          <Link to={"poetrycard"} onClick={handleClick} className="button-link">
            <div className="game-button">Poem</div>
          </Link>
        ) : (
          <Link
            to={"christmascard"}
            onClick={handleClick}
            className="button-link"
          >
            <div className="game-button">Christmas Card</div>
          </Link>
        )}
      </header>
      <Outlet />
    </>
  );
}

export default Button;
