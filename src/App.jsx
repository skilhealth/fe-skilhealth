import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import BookingDetailPage from "./pages/booking-detail-page"
import HasilCariPage from "./pages/hasil-pencarian-page"
import ListBooking from "./pages/list-booking-page"
import PencarianDokter from "./pages/pencarian-dokter"
import Pembayaran from "./pages/pembayaran-page"
import CheckIn from "./pages/checkin-page"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        /* <Route path="/doctor/search" element={<PencarianDokter />} />
        <Route path="/doctor/result" element={<HasilCariPage />} />
        <Route path="/doctor/result/:id" element={<HasilCariPage />} />
        <Route path="/booking/:id" element={<BookingDetailPage />} />
      </Routes>
      
    </>
  )
}
export default App
