import { useEffect } from "react"
import { useContext } from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { userContext } from "../context/user-provider"
import Logo from "/LogoSkilHealth.png"
function Navbar({ role, isLogin,setLogin }) {
    const [navbar, setNav] = useState(false)
    const {Logout} = useContext(userContext)

    useEffect(() => {
        handleNavbar()

    }, [])
    const handleNavbar = (e) => {
        (navbar) ? setNav(false) : setNav(true)
    }
    const handleLogout = () => {
        if(isLogin){
            Logout()
            setLogin(false)
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
                    <li className="py-4 lg:px-4 lg:py-2 text-center border-slate-200 lg:border-0 border-b-2">Home</li>
                </Link>
                <Link to={`${role === "dokter" ? "/janjipasien" : "/doctor/search"}`}>
                    <li className="py-4 lg:px-4 lg:py-2 text-center border-slate-200 lg:border-0 border-b-2">{(role === "dokter") ? "Jadwal Janji Temu" : "Cari Dokter"}</li>
                </Link>
                <Link to="/forum">
                    <li className="py-4 lg:px-4 lg:py-2 text-center border-slate-200 lg:border-0 border-b-2">Forum</li>
                </Link>
                <Link to={`${isLogin ? "/profile" : "/register"}`}>
                    <li className="py-4 lg:px-4 lg:py-2 text-center border-slate-200 lg:border-2 lg:rounded-lg lg:bg-white lg:text-red-700 border-b-2">{(isLogin) ? "Profile" : "Register"}</li>
                </Link>
                <Link to={`${isLogin ? "/" : "/login"}`}>
                    <li onClick={handleLogout} className="py-4 lg:px-4 lg:py-2 text-center border-slate-200 lg:border-2 lg:rounded-lg border-b-2">{(isLogin) ? "Logout" : "Login"}</li>
                </Link>
            </ul>
        </nav>
    )
}
export default Navbar