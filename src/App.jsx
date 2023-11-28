import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Diskusi from "./pages/diskusi";
import BuatPertanyaan from "./pages/buat-pertanyaan";
import DiskusiDokter from "./pages/diskusi-dokter";
import Forum from "./pages/forum";


function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Forum />} />
          <Route path="/buat-pertanyaan" element={<BuatPertanyaan />} />
          <Route path="/diskusi" element={<Diskusi />}/>
          <Route path="/diskusi-dokter" element={<DiskusiDokter/>}/>
        </Routes>
      </>
    </Router>
  );
}

export default App;
