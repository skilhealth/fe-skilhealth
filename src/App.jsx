import Navbar from "./components/navbar"
import MenuAmbulance from "./pages/menu-ambulance"
import StatusAmbulance from "./pages/status-ambulance"
import StatusAmbulancee from "./pages/status-ambulance2"
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
      <Route path="/status" element={<StatusAmbulance/>}></Route>
      <Route path="/statuss" element={<StatusAmbulancee/>}></Route>
    </Routes>
    </BrowserRouter>
      

    </>
  )
}

export default App
