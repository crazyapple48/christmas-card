import Poetry from "./Poetry";
import Picture from "./Picture";

// const poetryArray = [
//   "Roses are Red",
//   "Violets are Blue",
//   "Kayla smells like poo",
//   "Huddy does too",
// ];

// const imgArray = [
//   {
//     src: "../images/red-rose.jpg",
//     alt: "Red Rose",
//   },
//   {
//     src: "../images/blue-violet.jpg",
//     alt: "Blue Violet",
//   },
// ];

// let poetryLine = "";

// let currentImg = {};

// const interval = setInterval((poetryArray, imgObject) => {}, interval);

export default function PoetryCard() {
  return (
    <>
      <div className="poetryCard">
        <Poetry />
        <Picture />
      </div>
    </>
  );
}
