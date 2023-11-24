import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Forum from "./pages/forum";
import Pertanyaan from "./pages/pertanyaan";
import Diskusi from "./pages/diskusi";
import HasilPencarianForum from "./pages/hasil-pencarian-forum";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Forum />} />
          <Route path="/pertanyaan" element={<Pertanyaan />} />
          <Route path="/diskusi" element={<Diskusi />}/>
          <Route path="/hasilpencarianforum" element={<HasilPencarianForum />}/>
        </Routes>
      </>
    </Router>
  );
}

export default App;
