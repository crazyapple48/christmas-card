import React from "react";
import christmasCard from "../images/ChristmasCard.jpg";

const ChristmasCard = () => {
  return (
    <>
      <div className="christmas-container">
        '<h1 className="christmas-declaration">Merry Chrismas!!!</h1>
        <img src={christmasCard} alt="Us at Enchant" id="christmas-card" />
      </div>
    </>
  );
};

export default ChristmasCard;
