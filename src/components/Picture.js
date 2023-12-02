import rose from "../images/red-rose.jpg";
import violet from "../images/blue-violet.jpg";

export default function Picture({ currentImg }) {
  if (currentImg === "Red Rose") {
    return <img src={rose} alt="Red Rose" />;
  } else if (currentImg === "Blue Violet") {
    return <img src={violet} alt="Blue Violet" />;
  }
}
