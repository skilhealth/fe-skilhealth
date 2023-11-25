import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import HasilCariPage from "./pages/hasil-pencarian-page"
import HasilUjiLab from "./pages/hasil-ujilab-page.jsx"
import PencarianDokter from "./pages/pencarian-dokter"

function App() {
  return (
    <>
      <Navbar />
      <HasilUjiLab />
    </>
  )
}
export default App
