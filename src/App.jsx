import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import BuatUjiLab from "./pages/buat-uji-lab"
import HasilCariPage from "./pages/hasil-pencarian-page"
import PencarianDokter from "./pages/pencarian-dokter"

function App() {
  return (
    <>
      <Navbar />
      <BuatUjiLab />
    </>
  )
}
export default App
