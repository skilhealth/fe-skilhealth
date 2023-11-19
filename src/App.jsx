import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import HasilCariPage from "./pages/hasil-pencarian-page"
import ListUjiLab from "./pages/list-ujilab"
import PencarianDokter from "./pages/pencarian-dokter"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/ujilab/" element={<ListUjiLab />} />
        <Route path="/doctor/result" element={<HasilCariPage />} />
        <Route path="/doctor/result/:id" element={<HasilCariPage />} />
      </Routes>
      
    </>
  )
}
export default App
