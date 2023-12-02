import { useState } from "react";
import Poetry from "./Poetry";
// import Picture from "./Picture";

export default function PoetryCard({ array }) {
  const [state, setState] = useState(true);

  let poetryLine = "";

  // let currentImg = {
  //   src: "rose",
  //   alt: "Red Rose",
  // };

  function handleClick() {
    for (let i = 0; i < array.length; i++) {
      delay(i);
    }

    function delay(i) {
      setTimeout(() => {
        poetryLine = array[i].message;
        if (state === true) {
          setState(false);
        }
        setState(true);
        console.log(poetryLine);
      }, 2000 * i);
    }
  }

  return (
    <>
      <div className="poetryCard">
        <button onClick={handleClick} className="poem-button">
          Start Poem
        </button>
        <Poetry poetryLine={poetryLine} />
        {/* <Picture currentImg={currentImg} /> */}
      </div>
    </>
  );
}
