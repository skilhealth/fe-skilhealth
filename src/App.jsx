import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import HasilCariPage from "./pages/hasil-pencarian-page"
import PencarianDokter from "./pages/pencarian-dokter"
import Pembayaran from "./pages/pembayaran-page"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path="/doctor/search" element={<PencarianDokter />} />
        <Route path="/doctor/result" element={<HasilCariPage />} />
        <Route path="/doctor/result/:id" element={<HasilCariPage />} /> */}
        <Route path="/doctor/result/:id/pembayaran" element={<Pembayaran />} />
      </Routes>
      
    </>
  )
}
export default App
