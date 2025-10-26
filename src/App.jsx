import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import DiscoverBatik from "./pages/DiscoverBatik";
import Feedback from "./pages/Feedback";
import Gratitude from "./pages/Gratitude";
import Navbar from "./components/Navbar";
import Gallery from "./pages/Gallery";
import GalleryDetail from "./pages/GalleryDetail";
import HistoryBatik from "./pages/HistoryBatik";
import MakingProcessBatik from "./pages/MakingProcessBatik";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="">
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:id" element={<GalleryDetail />} />
          <Route path="/history" element={<HistoryBatik />} />
          <Route path="/makingprocess" element={<MakingProcessBatik />} />
          <Route path="/discover-batik" element={<DiscoverBatik />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/gratitude" element={<Gratitude />} />
        </Routes>
      </div>
    </div>
  );
}
