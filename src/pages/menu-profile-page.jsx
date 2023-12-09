
import Backbutton from "../components/backbutton";
import imgplus from "../assets/ei_plus.png";
import imgout from "../assets/ic_sharp-log-out.png";
import { Link } from "react-router-dom";

function MenuProfile({role}) {
     return (
          <div className="p-4 lg:px-24 flex flex-col items-center">
               <Backbutton nama="Profil saya" />
               <div className=" flex flex-col space-y-2 max-w-md w-full">
                    <div className="flex flex-row space-x-3 border-b border-black items-center" >
                         <img className="w-10 h-10" src={imgplus} alt="icon plus"></img>
                         <h2 className="font-semibold hover:font-bold"><Link to="1">Profile {role}</Link></h2>
                    </div>

                    <div className=" flex flex-row space-x-3 border-b border-black" >
                         <img className="w-8 h-8 ml-1" src={imgout} alt="icon Logout"></img>
                         <h2 className="font-semibold px-1 hover:font-bold "><Link to="/">Keluar</Link></h2>
                    </div>
               </div>
          </div>


     )
}

export default MenuProfile