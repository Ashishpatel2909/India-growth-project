import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Timeline from "./pages/Timeline";
import MapPage from "./pages/Map";
import Charts from "./pages/Charts";
import About from "./pages/About";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/about" element={<About />} />
      </Routes>

      {location.pathname !== "/" && <Footer />}
    </>
  );
}

export default App;
