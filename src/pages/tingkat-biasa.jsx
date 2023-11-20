import Backbutton from "../components/backbutton";
import imgambulancebiasa from "../assets/biasa.png"


function TingkatBiasa () {
    return (
        <div>
             <Backbutton nama= "Biasa" />
             <div className=" w-full h-32 px-4 py-2 bg-gray-100 rounded-lg mt-10 sm:text-sm" >
                <div>
                    <img className="w-20 h-20" src={imgambulancebiasa}></img>
                    <h5 className="font-lg font-bold ml-5">Biasa</h5>
                </div>
             
             </div>
        </div>
    )
}

export default TingkatBiasa