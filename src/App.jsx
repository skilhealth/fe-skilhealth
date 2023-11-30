import Navbar from "./components/navbar"
import MenuAmbulance from "./pages/menu-ambulance"
import TingkatBiasa from "./pages/tingkat-biasa"
import TingkatDarurat from "./pages/tingkat-darurat"
import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {
  return (
    <>
    <Navbar></Navbar>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MenuAmbulance />}></Route>
      <Route path="/biasa" element={<TingkatBiasa />}></Route>
      <Route path="/darurat" element={<TingkatDarurat />}></Route>
    </Routes>
    </BrowserRouter>
      

    </>
  )
}

export default App
