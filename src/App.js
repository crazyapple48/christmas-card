import "./App.css";
import Button from "./components/Button/Button";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import PoetryCard from "./components/PoetryCard/PoetryCard";
import ChristmasCard from "./components/ChristmasCard/ChristmasCard";

const cardArray = [
  {
    message: "Roses are Red",
    alt: "Red Rose",
  },
  {
    message: "Violets are Blue",
    alt: "Blue Violet",
  },
  {
    message: `Y'all are monsters`,
    alt: "Picture of monsters",
  },
  {
    message: "Huddy, you are too",
    alt: "Picture of Huddy",
  },
];

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Button />}>
      <Route path="poetrycard" element={<PoetryCard array={cardArray} />} />
      <Route path="/christmascard" element={<ChristmasCard />} />
    </Route>
  )
);

function App() {
  return (
    <div className="background">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
