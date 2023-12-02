import { useState } from "react";
import Poetry from "./Poetry";
import Picture from "./Picture";

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
      <div className="poetryCard">
        <button onClick={handleClick} className="poem-button">
          Start Poem
        </button>
        <Poetry poetryLine={poetryLine} />
        <Picture currentImg={imgAlt} />
      </div>
    </>
  );
}
