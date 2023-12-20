import styles from "./ChristmasCard.module.css";
import React, { useEffect, useState } from "react";
import christmasCard from "../../images/ChristmasCard.jpg";

const ChristmasCard = () => {
  const [color, setColor] = useState("red");

  useEffect(() => {
    const handle = setInterval(() => {
      if (color === "red") {
        setColor("blue");
      } else if (color === "blue") {
        setColor("green");
      } else {
        setColor("red");
      }
    }, 500);
    return () => clearInterval(handle);
  }, [color]);

  return (
    <>
      <div className={styles.christmasContainer}>
        '
        <h1 className={styles.christmasDeclaration} style={{ color: color }}>
          Merry Christmas!!!
        </h1>
        <img src={christmasCard} alt="Us at Enchant" id="christmas-card" />
      </div>
    </>
  );
};

export default ChristmasCard;
