import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SingleCar from "./pages/SingleCar";
import AddCar from "./pages/AddCar";
import SpeedTest from "./pages/SpeedTest";
import ModifyCar from "./pages/ModifyCar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/single-car/:id"} element={<SingleCar />} />
        <Route path={"/add-car"} element={<AddCar />} />
        <Route path={"/modify-car/:id"} element={<ModifyCar />} />
        <Route path={"/speed-test"} element={<SpeedTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
