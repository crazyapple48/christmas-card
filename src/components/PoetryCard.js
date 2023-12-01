import Poetry from "./Poetry";
// import Picture from "./Picture";

export default function PoetryCard({ array }) {
  let poetryLine = array[0].message;

  // let currentImg = {
  //   src: "rose",
  //   alt: "Red Rose",
  // };

  function handleClick() {
    for (let i = 0; i < array.length; i++) {
      poetryLine = array[i].message;
      poetryLine = console.log(poetryLine);
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
