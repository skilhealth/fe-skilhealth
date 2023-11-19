import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import BookingDetailPage from "./pages/booking-detail-page"
import HasilCariPage from "./pages/hasil-pencarian-page"
import ListBooking from "./pages/list-booking-page"
import PencarianDokter from "./pages/pencarian-dokter"
import Pembayaran from "./pages/pembayaran-page"
import CheckIn from "./pages/checkin-page"
import DataDokter from "./pages/data-doctor-page"
import MenungguPanggilan from "./pages/menunggu-panggilan-page"
import Homecare from "./pages/homecare-page"
import Editbooking from "./pages/editbooking"
import Refund from "./pages/refund-page"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/doctor/search" element={<PencarianDokter />} />
        <Route path="/doctor/" element={<HasilCariPage />} />
        <Route path="/doctor/:id" element={<DataDokter />} />
        <Route path="/booking/pembayaran" element={<Pembayaran />} />
        <Route path="/booking/" element={<ListBooking />} />
        <Route path="/booking/:id" element={<BookingDetailPage />} />
        <Route path="/booking/:id/luring" element={<CheckIn />} />
        <Route path="/booking/:id/daring" element={<MenungguPanggilan />} />
        <Route path="/booking/:id/homecare" element={<Homecare />} />
        <Route path="/booking/:id/edit" element={<Editbooking />} />
        <Route path="/booking/:id/refund" element={<Refund />} />
      </Routes>
      
    </>
  )
}
export default App
