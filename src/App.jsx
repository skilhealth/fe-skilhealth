import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import HasilCariPage from "./pages/hasil-pencarian-page"
import ListBooking from "./pages/list-booking-page"
import PencarianDokter from "./pages/pencarian-dokter"

function App() {
  return (
    <>
      <Navbar />
      <ListBooking />
    </>
  )
}
export default App
