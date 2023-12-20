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
            <h2 className={styles.gameButton}>Poem</h2>
          </Link>
        ) : (
          <Link
            to={"christmascard"}
            onClick={handleClick}
            className={styles.buttonLink}
          >
            <h2 className={styles.gameButton}>Christmas Card</h2>
          </Link>
        )}
      </header>
      <Outlet />
    </>
  );
}

export default Button;
