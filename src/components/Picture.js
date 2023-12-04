import rose from "../images/red-rose.jpg";
import violet from "../images/blue-violet.jpg";
import monsters from "../images/Monsters.jpg";
import huddy from "../images/Huddy_Monster.jpg";

export default function Picture({ currentImg }) {
  if (currentImg === "Red Rose") {
    return <img src={rose} alt="Red Rose" />;
  } else if (currentImg === "Blue Violet") {
    return <img src={violet} alt="Blue Violet" />;
  } else if (currentImg === "Picture of monsters") {
    return <img src={monsters} alt="Monsters" />;
  } else if (currentImg === "Picture of Huddy") {
    return <img src={huddy} alt="Huddy" />;
  }
}
