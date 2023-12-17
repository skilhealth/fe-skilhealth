import { useEffect } from "react"
import { useContext } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { userContext } from "../context/user-provider"
import Logo from "/LogoSkilHealth.png"
function Navbar() {
    const [navbar, setNav] = useState(false)
    const {role,Logout,isLogin} = useContext(userContext)

    useEffect(() => {
        handleNavbar()

    }, [])
    const handleNavbar = () => {
        setNav((prevNav) => !prevNav);
    }

    const closeNavbar = () => {
        setNav(false);
    }

    const handleLogout = () => {
        if(isLogin){
            Logout()
        }
    }
    return (
        <nav className=" bg-red-700 w-full h-20 text-lg lg:text-base font-bold lg:px-24 lg:flex z-50">
            <div className="w-full h-full flex justify-between p-4 lg:justify-start lg:gap-4 lg:w-min lg:flex-1">
                <Link to={"/"} className="lg:flex gap-3 items-center">
                    <div className="h-full aspect-square">
                        <img src={Logo} alt="logo" className="w-auto h-full object-cover" />
                    </div>
                    <div className="text-3xl hidden text-white lg:flex ">Skilhealth</div>
                </Link>
                <div className="h-full aspect-square flex flex-col items-center justify-center gap-2 lg:hidden" onClick={handleNavbar}>
                    <div className="bg-white h-1 w-9"></div>
                    <div className="bg-white h-1 w-9"></div>
                    <div className="bg-white h-1 w-9"></div>
                </div>
            </div>
            <ul className={`w-full text-red-700 flex-col px-4 absolute bg-white lg:w-auto lg:bg-transparent lg:text-white lg:relative lg:flex lg:flex-row lg:gap-5 lg:items-center ${navbar ? "hidden" : "flex"}`}>
                <Link to="/" >
                    <li onClick={handleNavbar} className="py-4 hover:opacity-70 transition duration-200 lg:px-4 lg:py-2 text-center border-slate-200 lg:border-0 border-b-2">Home</li>
                </Link>
                <Link to={`${role === "dokter" ? "/janjipasien" : "/doctor/search"}`}>
                    <li onClick={handleNavbar} className={`py-4 hover:opacity-70 transition duration-200 lg:px-4 lg:py-2 text-center border-slate-200 lg:border-0 border-b-2 ${role === "instansi"?"hidden":""}`}>{(role === "dokter") ? "Jadwal Janji Temu" : "Cari Dokter"}</li>
                </Link>
                <Link to="/forum">
                    <li onClick={handleNavbar} className={`py-4 hover:opacity-70 transition duration-200 lg:px-4 lg:py-2 text-center border-slate-200 lg:border-0 border-b-2 ${role === "instansi"?"hidden":""}`}>Forum</li>
                </Link>
                <Link to={`${isLogin ? "/profile" : "/register"}`}>
                    <li onClick={handleNavbar} className="py-4 hover:opacity-70 transition duration-200 lg:px-4 lg:py-2 text-center border-slate-200 lg:border-2 lg:rounded-lg lg:bg-white lg:text-red-700 border-b-2">{(isLogin) ? "Profile" : "Register"}</li>
                </Link>
                <Link to={`${isLogin ? "/" : "/login"}`}>
                    <li onClick={() => {handleLogout(); handleNavbar();}} className="py-4 hover:opacity-70 transition duration-200 lg:px-4 lg:py-2 text-center border-slate-200 lg:border-2 lg:rounded-lg border-b-2">{(isLogin) ? "Logout" : "Login"}</li>
                </Link>
            </ul>
        </nav>
    )
}
export default Navbar