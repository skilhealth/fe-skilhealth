import { useEffect } from "react";
import { useState } from "react";
import Logo from "/LogoSkilHealth.png";
function Navbar() {
  const [navbar, setNav] = useState(false);
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    handleNavbar();
  }, []);
  const handleNavbar = (e) => {
    navbar ? setNav(false) : setNav(true);
  };
  return (
    <nav className=" bg-red-700 w-full h-20 text-lg font-bold">
      <div className="w-full h-full flex justify-between p-4">
        <div className="h-full aspect-square">
          <img src={Logo} alt="logo" className="w-auto h-full object-cover" />
        </div>
        <div
          className="h-full aspect-square flex flex-col items-center justify-center gap-2"
          onClick={handleNavbar}
        >
          <div className="bg-white h-1 w-9"></div>
          <div className="bg-white h-1 w-9"></div>
          <div className="bg-white h-1 w-9"></div>
        </div>
      </div>
      <ul
        className={`w-full text-red-700 flex-col px-4 absolute bg-white ${
          navbar ? "hidden" : "flex"
        }`}
      >
        <li className="py-4 w-full text-center border-slate-200 border-b-2">
          Home
        </li>
        <li className="py-4 w-full text-center border-slate-200 border-b-2">
          Cari Dokter
        </li>
        <li className="py-4 w-full text-center border-slate-200 border-b-2">
          Forum
        </li>
        {isLogin ? (
          <div>
            <li className="py-4 w-full text-center border-slate-200 border-b-2">
              Register
            </li>
            <li className="py-4 w-full text-center border-slate-200 border-b-2">
              Login
            </li>
          </div>
        ) : (
          <div>
            <li className="py-4 w-full text-center border-slate-200 border-b-2">
              Profil
            </li>
            <li className="py-4 w-full text-center border-slate-200 border-b-2">
              Logout
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
}
export default Navbar;
