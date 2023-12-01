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
import ListUjiLab from "./pages/list-ujilab"
import UjilabDetail from "./pages/ujilab-detail-page"
import Login from "./pages/login-pages"
import Register from "./pages/register.pages";
import ChangePassword from "./pages/ubah-password-page";
import OTPComponent from "./pages/ubah-password-otp-pages";
import LandingPageDoctor from "./pages/landing-page-doctor"
import LandingPage from "./pages/landing-page"
import ListJanjiPasien from "./pages/list-janji-pasien"
import HasilUjiLab from "./pages/hasil-ujilab-page.jsx"
import MenuProfile from "./pages/menu-profile-page"
import EditProfile from "./pages/edit-profile"
import CatatanMedis from "./pages/buat-uji-lab"
import EditProfileDokter from "./pages/Edit-profile-Dokter"
import Hospital from "./pages/rumah-sakit"
import Forum from "./pages/forum"
import Diskusi from "./pages/diskusi"
import BuatPertanyaan from "./pages/buat-pertanyaan"
import MenuAmbulance from "./pages/menu-ambulance"
import StatusAmbulance from "./pages/status-ambulance"
import StatusAmbulancee from "./pages/status-ambulance2"
import TingkatBiasa from "./pages/tingkat-biasa"
import TingkatDarurat from "./pages/tingkat-darurat"

import { Route, Routes, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useContext } from "react"
import { userContext } from "./context/user-provider"
import NotFound from "./pages/notfound"

function App() {
  const { user, role } = useContext(userContext)
  console.log(user)
  const [isLogin, setLogin] = useState()
  
  useEffect(() => {
    if (user === null) {
      setLogin(false);
    }

    if (user !== null) {
      setLogin(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col w-full">
      <Navbar role={role} isLogin={isLogin} setLogin={(logout) => setLogin(logout)} />
      <Routes>
        <Route path="/" element={role === "dokter"? <LandingPageDoctor role={role} /> : <LandingPage role={role} />} />
        <Route path="/janjipasien" element={<ListJanjiPasien />} />
        <Route path="/janjipasien/:id" element={<HasilUjiLab />} />
        <Route path="/janjipasien/:id/add" element={<CatatanMedis />} />
        <Route path="/janjipasien/:id/edit" element={<CatatanMedis />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gantipass" element={<ChangePassword />} />
        <Route path="/otp" element={<OTPComponent />} />
        <Route path="/profile" element={<MenuProfile role={role} />} />
        {role === "dokter" ? (
          (<Route path="/profile/:id" element={<EditProfileDokter />} />)
        ) : (<Route path="/profile/:id" element={<EditProfile />} />)}

        <Route path="/doctor/search" element={<PencarianDokter />} />
        <Route path="/doctor/" element={<HasilCariPage />} />
        <Route path="/doctor/:id" element={<DataDokter />} />
        <Route path="/booking/pembayaran" element={<Pembayaran />} />

        <Route path="/booking/" element={<ListBooking />} />
        <Route path="/booking/:id" element={<BookingDetailPage />} />
        <Route path="/booking/:id/reguler" element={<CheckIn />} />
        <Route path="/booking/:id/daring" element={<MenungguPanggilan />} />
        <Route path="/booking/:id/homecare" element={<Homecare />} />
        <Route path="/booking/:id/edit" element={<Editbooking />} />
        <Route path="/booking/:id/refund" element={<Refund />} />

        <Route path="/ujilab/" element={<ListUjiLab />} />
        <Route path="/ujilab/:id" element={<UjilabDetail />} />

        <Route path="/rumahsakit" element={<Hospital />} />

        <Route path="/forum" element={<Forum role={role} />} />
        <Route path="/forum/:id" element={<Diskusi />} />
        <Route path="/forum/tanya" element={<BuatPertanyaan />} />

        <Route path="/ambulan" element={<MenuAmbulance />} />
        <Route path="/ambulan/biasa" element={<TingkatBiasa />} />
        <Route path="/ambulan/darurat" element={<TingkatDarurat />} />
        <Route path="/ambulan/status" element={<StatusAmbulance />} />
        <Route path="/ambulan/status2" element={<StatusAmbulancee />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div >
  )
}
export default App
