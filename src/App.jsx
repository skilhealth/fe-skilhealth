import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import HasilCariPage from "./pages/hasil-pencarian-page"
import PencarianDokter from "./pages/pencarian-dokter"
import Pembayaran from "./pages/pembayaran-page"

function App() {
  return (
    <>
      <Navbar />
      <Pembayaran />
      
    </>
  )
}
export default App
