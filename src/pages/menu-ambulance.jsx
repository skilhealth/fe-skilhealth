import Backbutton from "../components/backbutton";
import imghospital from "../assets/rs.png"
import imgambulancebiasa from "../assets/biasa.png"
import imgambulancedarurat from "../assets/darurat.png";
import AmbulanceCard from "../components/ambulance-card";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { instansiContext } from "../context/instansi-provider";
import Loading from "../components/loading";
import HospitalCard from "../components/rs-card";

function MenuAmbulance() {
    const navigate = useNavigate()
    const [Rs,setRS] = useState(0)
    const { instansi } = useContext(instansiContext)
    const ToDarurat = (e) =>{
        e.preventDefault()
        if(Rs==0){
            return alert("Tolong Pilih Rumah sakit dahulu")
        }
        navigate(`/ambulan/darurat`,{state:{Rs}})
    }
    const ToBiasa = (e) =>{
        e.preventDefault()
        if(Rs==0){
            return alert("Tolong Pilih Rumah sakit dahulu")
        }
        navigate(`/ambulan/biasa`,{state:{Rs}})
    }
    
    if (!instansi) return (
        <Loading />
    )
    return (
        <div className="p-4 lg:px-24">
            <Backbutton nama="Ambulance" />
            <h1 className=" text-center text-xl font-bold lg:mt-11">Anda Memanggil, Kami Merespon</h1>
            <div className=" flex flex-row gap-8 lg:flex-row justify-center lg:gap-8 mt-10">
                <div className="w-24 h-24 rounded-lg bg-red-700 lg:ml-10">
                    <div onClick={ToBiasa}>
                        <img className="w-24 h-24 rounded-lg" src={imgambulancebiasa}></img>
                        <h6 className="font-bold text-center">Biasa</h6>
                    </div>
                </div>

                <div className="w-24 h-24 rounded-lg bg-red-700 lg:mr-10">
                    <div onClick={ToDarurat}>
                        <img className="ml-2 mt-4 w-20 h-19 rounded-lg lg:ml-2" src={imgambulancedarurat}></img>
                        <h6 className="font-bold text-center mt-5">Darurat</h6>
                    </div>
                </div>
            </div >

            <h2 className="mt-14 p-2 ml-4 font-bold text-lg lg:text-center">Pilih Rumah Sakit</h2>
            <div className="flex flex-col lg:flex-col justify-center gap-2 lg:gap-8">
                {
                    instansi.map((item, index) => (
                        <label className={`${+Rs == item.id?"border-4 scale-105":""} bg-slate-100 border-2 border-slate-200 p-4 rounded-lg `}>
                            <input type="radio" className="hidden" name="instansi" value={item.id} onChange={(e)=>setRS(e.target.value)}/>
                            {/* <HospitalCard key={index} name={item.nama} area={item.area} alamat={item.alamat} /> */}
                            <div className="flex gap-4 items-center">
                                <div className="w-24">
                                    <img src={imghospital} alt="" />
                                </div>
                                <div>
                                    <div className="text-lg font-bold">{item.nama}</div>
                                    <div>{item.area}</div>
                                    <div>{item.alamat}</div>
                                </div>
                            </div>
                        </label>
                    ))
                }
            </div>


        </div>
    )
}

export default MenuAmbulance