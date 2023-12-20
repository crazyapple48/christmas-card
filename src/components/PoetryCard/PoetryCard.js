import { useState } from "react";
import Poetry from "../Poetry/Poetry";
import Picture from "../Picture/Picture";
import styles from "./PoetryCard.module.css";

export default function PoetryCard({ array }) {
  const [poetryLine, setPoetryLine] = useState("");
  const [imgAlt, setImgAlt] = useState("");

  function handleClick() {
    for (let i = 0; i < array.length; i++) {
      delay(i);
    }

    function delay(i) {
      setTimeout(() => {
        setPoetryLine(array[i].message);
        setImgAlt(array[i].alt);
      }, 3000 * i);
    }
  }

  return (
    <>
      <div className={styles.poetryCard}>
        <button onClick={handleClick} className={styles.poemButton}>
          Start Poem
        </button>
        <Poetry poetryLine={poetryLine} />
        <Picture currentImg={imgAlt} />
      </div>
    </>
  );
}
