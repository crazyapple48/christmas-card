import "./App.css";
import Button from "./components/Button";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import PoetryCard from "./components/PoetryCard";
import rose from "./images/red-rose.jpg";

const cardArray = [
  {
    message: "Roses are Red",
    src: rose,
    alt: "Red Rose",
  },
  {
    message: "Violets are Blue",
    src: "../images/blue-violet.jpg",
    alt: "Blue Violet",
  },
  {
    message: `Y'all are monsters`,
    src: null,
    alt: "Picture of monsters",
  },
  {
    message: "Huddy, you are too",
    src: null,
    alt: "Picture of Huddy",
  },
];

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Button />}>
      <Route path="poetrycard" element={<PoetryCard array={cardArray} />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
