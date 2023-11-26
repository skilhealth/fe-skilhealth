import Navbar from "./components/navbar"
import Hospital from "./pages/rumah-sakit"
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <>
       <Navbar></Navbar>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hospital />}></Route>
        </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
