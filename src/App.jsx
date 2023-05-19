import React from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Egg from "./pages/Egg";
import Chicken from "./pages/Chicken";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/egg" element={<Egg />} />
        <Route path="/chicken" element={<Chicken />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
