import Backbutton from "../components/backbutton";
import imgambulancebiasa from "../assets/biasa.png"
import imgambulancedarurat from "../assets/darurat.png";
import AmbulanceCard from "../components/ambulance-card";

function MenuAmbulance () {
    return (
        <div>
             <Backbutton nama= "Ambulance" />
             <h1 className=" text-center text-xl font-bold">Anda Memanggil, Kami Merespon</h1>
             <div className=" flex flex-row justify-around mt-10">
                    <div className="w-24 h-24 rounded-lg bg-red-700 ml-10">
                        <a href="">
                        <img className="w-24 h-24 rounded-lg" src={imgambulancebiasa}></img>
                        <h6 className="font-bold text-center">Biasa</h6>
                        </a>
                    </div>

                    <div className="w-24 h-24 rounded-lg bg-red-700 mr-10">
                            <a href="">
                            <img className="w-20 h-20 rounded-lg ml-2" src={imgambulancedarurat}></img>
                            <h6 className="font-bold text-center mt-4">Darurat</h6>
                            </a>
                    </div>
             </div >

             <h2 className="mt-28 ml-10 font-bold text-lg">Rumah Sakit Terdekat</h2>
             <AmbulanceCard nama= "Skilvul Hospital Jakarta" alamat="JL.Laksada Adisucipto NO.15 Jakarta"></AmbulanceCard>
             <AmbulanceCard></AmbulanceCard>
             <AmbulanceCard></AmbulanceCard>
        </div>
    )
}

export default MenuAmbulance