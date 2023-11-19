
import Backbutton from "../components/backbutton";

function MenuProfile () {
     return (
      <div>
           <Backbutton nama= "Profil saya" />
           <ul className="w-full flex-col px-4 absolute list-none" >
               <li className="py-4 w-full text-left border-black-200 border-b-2 font-semibold"><a href="pages/profil-pasien.jsx">Profile pasien</a></li>
               <li className="py-4 w-full text-left border-black-200 border-b-2 font-semibold"><a href="#">Keluar</a></li>
           </ul> 
      </div>
      
        
     )
}

export default MenuProfile