import { Route, Routes } from "react-router-dom";

import "./styles/Global.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import General from "./pages/General";
import Sports from "./pages/Sports";
import Technology from "./pages/Technology";
import Business from "./pages/Business";
import Entertainment from "./pages/Entertainment";
import Article from "./pages/Article";

import "./services/api";
import { NewsProvider } from "./context/NewsProvider";

function App() {
  return (
    <main>
      <Navbar></Navbar>
      <NewsProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/general" element={<General />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/business" element={<Business />} />
          <Route path="/entertainment" element={<Entertainment />} />
          <Route
            path="/article/:articleDate/:articleTitle"
            element={<Article />}
          />
        </Routes>
      </NewsProvider>
    </main>
  );
}

export default App;
