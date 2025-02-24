import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./styles/Global.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import General from "./pages/General";
import Sports from "./pages/Sports";
import Technology from "./pages/Technology";
import Business from "./pages/Business";
import Entertainment from "./pages/Entertainment";

function App() {
  return (
    <main>
      <Navbar></Navbar>
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/general" element={<General />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/business" element={<Business />} />
        <Route path="/entertainment" element={<Entertainment />} />
      </Routes>
    </main>
  );
}

export default App;
