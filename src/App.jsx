import Navbar from "./components/navbar"
import EditProfile from "./pages/edit-profile"
import MenuProfile from "./pages/menu-profile-page"
import { BrowserRouter, Routes, Route } from "react-router-dom"




function App() {
  return (
    <>
    <Navbar></Navbar>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MenuProfile />}></Route>
        <Route path="/editProfile" element={<EditProfile />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
