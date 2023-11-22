import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import HasilCariPage from "./pages/hasil-pencarian-page"
import MenungguPanggilan from "./pages/menunggu-panggilan-page"
import PencarianDokter from "./pages/pencarian-dokter"

function App() {
  return (
    <>
      <Navbar />
      <MenungguPanggilan />
    </>
  )
}
export default App
