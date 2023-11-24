import Navbar from "./components/navbar"
import EditProfileDokter from "./pages/Edit-profile -Dokter"
import MenuProfileDokter from "./pages/menu-profile-dokter"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
    <Navbar></Navbar>
    <BrowserRouter>
      <Routes>
        <Route>
        <Route path="/" element={<MenuProfileDokter />}></Route>
        <Route path="/editProfileDokter" element={<EditProfileDokter />}></Route>
        </Route>
      </Routes>

    </BrowserRouter>

    </>
  )
}

export default App
