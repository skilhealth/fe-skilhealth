import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Forum from "./pages/forum";
import Diskusi from "./pages/diskusi";
import BuatPertanyaan from "./pages/buat-pertanyaan";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Forum />} />
          <Route path="/buat-pertanyaan" element={<BuatPertanyaan />} />
          <Route path="/diskusi" element={<Diskusi />}/>
        </Routes>
      </>
    </Router>
  );
}

export default App;
