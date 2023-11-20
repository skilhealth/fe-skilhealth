import Backbutton from "../components/backbutton";
import imgambulancebiasa from "../assets/biasa.png"


function TingkatBiasa () {
    return (
        <div>
             <Backbutton nama= "Biasa" />
             <div className="px-20 py-20 bg-gray-100 flex sm:text-sm" >
             <img className="w-24 h-24" src={imgambulancebiasa}></img>
             </div>
        </div>
    )
}

export default TingkatBiasa