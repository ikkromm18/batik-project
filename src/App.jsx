import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import DiscoverBatik from "./pages/DiscoverBatik";
import Feedback from "./pages/Feedback";
import Gratitude from "./pages/Gratitude";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="">
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/discover-batik" element={<DiscoverBatik />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/gratitude" element={<Gratitude />} />
        </Routes>
      </div>
    </div>
  );
}
