
import Backbutton from "../components/backbutton";
import imgplus from "../assets/ei_plus.png";
import imgout from "../assets/ic_sharp-log-out.png";

function MenuProfileDokter () {
     return (
      <div>
           <Backbutton nama= "Profil saya" />
           <div className=" flex flex-col space-y-2">
           <div className=" flex flex-row space-x-3 border-b border-black" >
               <img className="w-10 h-10" src={imgplus}></img>
               <h2 className="font-semibold mt-2"><a href="">Profile Dokter</a></h2>
          </div>

          <div className=" flex flex-row space-x-3 border-b border-black" >
               <img className="w-8 h-8 ml-1" src={imgout}></img>
               <h2 className="font-semibold mt-1"><a href="">Keluar</a></h2>
          </div>
           </div>
      </div>
      
        
     )
}

export default MenuProfileDokter