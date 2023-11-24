import Login from "./pages/login-pages";
import Register from "./pages/register.pages";
import ChangePassword from "./pages/ubah-password-page";
import OTPComponent from "./pages/ubah-password-otp-pages";
import { BrowserRouter,Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />} ></Route>
        <Route path="/LupaPassword" element={<OTPComponent />}></Route>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
