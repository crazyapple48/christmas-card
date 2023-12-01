import "./App.css";
import Button from "./components/Button";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import InsultCard from "./components/InsultCard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Button />}>
      <Route path="insultcard" element={<InsultCard />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
