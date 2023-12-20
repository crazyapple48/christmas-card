import styles from "./Button.module.css";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

function Button() {
  const [card, setCard] = useState(false);

  function handleClick(e) {
    card ? setCard(false) : setCard(true);
  }

  return (
    <>
      <header className={styles.header}>
        {!card ? (
          <Link
            to={"poetrycard"}
            onClick={handleClick}
            className={styles.buttonLink}
          >
            <div className="game-button">Poem</div>
          </Link>
        ) : (
          <Link
            to={"christmascard"}
            onClick={handleClick}
            className={styles.buttonLink}
          >
            <div className={styles.gameButton}>Christmas Card</div>
          </Link>
        )}
      </header>
      <Outlet />
    </>
  );
}

export default Button;
