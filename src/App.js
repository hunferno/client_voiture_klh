import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SingleCar from "./pages/SingleCar";
import AddCar from "./pages/AddCar";
import SpeedTest from "./pages/SpeedTest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/single-car/:id"} element={<SingleCar />} />
        <Route path={"/add-cart"} element={<AddCar />} />
        <Route path={"/speed-test"} element={<SpeedTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
