import { Route, Routes } from "react-router-dom";
import Login from "./pages/login-pages";
import Register from "./pages/register.pages";
import ChangePassword from "./pages/ubah-password-page";
import OTPComponent from "./pages/ubah-password-otp-pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/regis" element={<Register />} />
        <Route path="/user/lupaPasssword" element={<OTPComponent/>} />
        <Route path="/user/ubahPassword" element={<ChangePassword/>} />
      </Routes>
    </>
  )
}

export default App
