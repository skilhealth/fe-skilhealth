import Backbutton from "../components/backbutton";
import imgambulancebiasa from "../assets/biasa.png"
import imgambulancedarurat from "../assets/darurat.png";
import AmbulanceCard from "../components/ambulance-card";

function MenuAmbulance () {
    return (
        <div>
             <Backbutton  nama= "Ambulance" />
             <h1 className=" text-center text-xl font-bold">Anda Memanggil, Kami Merespon</h1>
             <div className=" flex flex-row gap-8 lg:flex-row justify-center lg:gap-8 mt-10">
                    <div className="w-24 h-24 rounded-lg bg-red-700 lg:ml-10">
                        <a href="">
                        <img className="w-24 h-24 rounded-lg" src={imgambulancebiasa}></img>
                        <h6 className="font-bold text-center">Biasa</h6>
                        </a>
                    </div>

                    <div className="w-24 h-24 rounded-lg bg-red-700 lg:mr-10">
                            <a href="">
                            <img className="w-20 h-20 rounded-lg lg:ml-2" src={imgambulancedarurat}></img>
                            <h6 className="font-bold text-center mt-4">Darurat</h6>
                            </a>
                    </div>
             </div >

             <h2 className="mt-14 p-2 ml-4 font-bold text-lg lg:text-center">Rumah Sakit Terdekat</h2>
            <div className="flex flex-col lg:flex-col justify-center lg:gap-8">
                 <AmbulanceCard nama= "Skilvul Hospital Jakarta" alamat="JL.Laksada Adisucipto NO.15 Jakarta"></AmbulanceCard>
                <AmbulanceCard></AmbulanceCard>
                <AmbulanceCard></AmbulanceCard>
            </div>
           

        </div>
    )
}

export default MenuAmbulance