import "./App.css";
import Button from "./components/Button";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import PoetryCard from "./components/PoetryCard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Button />}>
      <Route path="poetrycard" element={<PoetryCard />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
