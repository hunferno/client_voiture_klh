import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddCar from "./pages/AddCar";
import Home from "./pages/Home";
import SpeedTest from "./pages/SpeedTest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/add-cart"} element={<AddCar />} />
        <Route path={"/speed-test"} element={<SpeedTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
