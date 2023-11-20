import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import HasilCariPage from "./pages/hasil-pencarian-page"
import PencarianDokter from "./pages/pencarian-dokter"
import UjilabDetail from "./pages/ujilab-detail-page"

function App() {
  return (
    <>
      <Navbar />
      <UjilabDetail />
      {/* <Routes>
        <Route path="/doctor/search" element={<PencarianDokter />} />
        <Route path="/doctor/result" element={<HasilCariPage />} />
        <Route path="/doctor/result/:id" element={<HasilCariPage />} />
      </Routes> */}
      
    </>
  )
}
export default App
