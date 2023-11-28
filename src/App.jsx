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
import ListUjiLab from "./pages/list-ujilab"
import UjilabDetail from "./pages/ujilab-detail-page"
import { useRef } from "react"
import { useEffect } from "react"
import CariHasil from "./pages/cari-hasil-doctor"
import Login from "./pages/login-pages"
import Register from "./pages/register.pages";
import ChangePassword from "./pages/ubah-password-page";
import OTPComponent from "./pages/ubah-password-otp-pages";
import LandingPageDoctor from "./pages/landing-page-doctor"
import LandingPage from "./pages/landing-page"
import { useState } from "react"
import ListJanjiPasien from "./pages/list-janji-pasien"
import HasilUjiLab from "./pages/hasil-ujilab-page.jsx"
import MenuProfile from "./pages/menu-profile-page"
import EditProfile from "./pages/edit-profile"
import CatatanMedis from "./pages/buat-uji-lab"
import EditProfileDokter from "./pages/Edit-profile -Dokter"
import Hospital from "./pages/rumah-sakit"

function App() {
  const windowWidth = useRef(window.innerWidth);
  const windowHeight = useRef(window.innerHeight);
  const [isLogin, setLogin] = useState(true)
  const [role,setRole]=useState("dokte");

  useEffect(() => {
    const handleResize = () => {
      windowWidth.current = window.innerWidth;
      windowHeight.current = window.innerHeight;
      console.log('width: ', windowWidth.current);
      console.log('height: ', windowHeight.current);
    };

    // Tambahkan event listener untuk mendengarkan perubahan ukuran window
    window.addEventListener('resize', handleResize);

    // Cleanup event listener pada saat komponen di-unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (

    <>
      <Navbar role={role} isLogin={isLogin} />
      <Routes>
        {role === "dokter" ?(
          (<Route path="/" element={<LandingPageDoctor />} />)
        ):(<Route path="/" element={<LandingPage />} />)}
        <Route path="/janjipasien" element={<ListJanjiPasien />} />
        <Route path="/janjipasien/:id" element={<HasilUjiLab />} />
        <Route path="/janjipasien/:id/edit" element={<CatatanMedis />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gantipass" element={<ChangePassword />} />
        <Route path="/otp" element={<OTPComponent />} />
        <Route path="/profile" element={<MenuProfile />} />
        {role === "dokter" ?(
          (<Route path="/profile/:id" element={<EditProfileDokter />} />)
        ):(<Route path="/profile/:id" element={<EditProfile />} />)}
        
        {windowWidth.current >= 1024 ?
          (<Route path="/doctor/search" element={<CariHasil />} />)
          : (<Route path="/doctor/search" element={<PencarianDokter />} />)}
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
      </Routes>
    </>
  )
}
export default App
