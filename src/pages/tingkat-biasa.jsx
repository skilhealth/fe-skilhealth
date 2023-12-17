import Backbutton from "../components/backbutton";
import imgambulancebiasa from "../assets/biasa.png"
import crash from "../assets/crash.svg"
import heart from "../assets/heart.svg"
import darah from "../assets/darah.svg"
import tubuh from "../assets/tubuh.svg"
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { instansiContext } from "../context/instansi-provider";
import Loading from "../components/loading";
import axios from "axios";

const TingkatBiasa = () => {
    const { instansi } = useContext(instansiContext)
    const user_id = localStorage.getItem("userid")
    const [event, setEvent] = useState()
    const [Alamat, setAlamat] = useState()
    const location = useLocation()
    const navigate = useNavigate()
    const Rs_id = location.state && location.state.Rs;
    const call = async (konten) =>{
        try{
            const response = await axios.post("https://be-skilhealth.up.railway.app/respon",konten)
            console.log(response.data)
            return response.data
        }catch(err){
            console.error(err)
        }
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newRequest = {
            instansi_id:Rs_id,
            alamat:Alamat,
            tingkat:"biasa",
            kejadian:event,
            user_id:user_id
        }
        if(!Alamat||!event){
            return alert("Tolong Lengkapi Data Dahulu")
        }
        if(!user_id){
            return alert("Tolong Login Terlebih dahulu")
        }
        const {message,data} = await call(newRequest)

        if(message=="Berhasil Membuat Request")
        return navigate("/ambulan/status",{state:{data}});
        return alert("Gagal Membuat Request, Mohon Ulangin Lagi")        
    };
    if (!instansi) return (
        <Loading />
    )
    const data = instansi.filter((rs) => rs.id == Rs_id)
    return (
        <div className="p-4 lg:px-24 flex flex-col items-center h-screen">
            <Backbutton nama="Biasa" />
            <div className="max-w-[800px] w-full h-full flex flex-col">
                <div className="bg-slate-200 rounded-lg flex items-center mb-4">
                    <div className="w-28 flex">
                        <img src={imgambulancebiasa} alt="" />
                    </div>
                    <div>
                        <div className="font-semibold text-[18px]">{data[0].nama}</div>
                        <div>{data[0].alamat}</div>
                        <div>{data[0].no_tlp}</div>
                    </div>
                </div>
                <h3 className="text-xl font-semibold text-center">Apa yang terjadi???</h3>
                <div className="w-full flex justify-center mb-8">
                    <div className="mt-4 flex gap-2 max-w-[600px] w-full justify-center flex-wrap gap-y-8">
                        <label>
                            <input type="radio" name="event" value={"kecelakaan"} className="hidden" onChange={(e) => setEvent(e.target.value)} />
                            <div className={`w-28 h-28 aspect-square  rounded-lg justify-center flex items-center flex-col font-medium text-center ${event == "kecelakaan" ? "scale-105 bg-red-600" : ""}`}>
                                <div className="w-14">
                                    <img src={crash} alt="" className="w-full" />
                                </div>
                                Kecelakaan
                            </div>
                        </label>
                        <label>
                            <input type="radio" name="event" value={"jantung"} className="hidden" onChange={(e) => setEvent(e.target.value)} />
                            <div className={`w-28 h-28 aspect-square  rounded-lg justify-center flex items-center flex-col font-medium text-center ${event == "jantung" ? "scale-105 bg-red-600" : ""}`}>
                                <div className="w-14">
                                    <img src={heart} alt="" className="w-full" />
                                </div>
                                Serangan Jantung
                            </div>
                        </label>
                        <label>
                            <input type="radio" name="event" value={"pendarahan"} className="hidden" onChange={(e) => setEvent(e.target.value)} />
                            <div className={`w-28 h-28 aspect-square  rounded-lg justify-center flex items-center flex-col font-medium text-center ${event == "pendarahan" ? "scale-105 bg-red-600" : ""}`}>
                                <div className="w-14">
                                    <img src={darah} alt="" className="w-full" />
                                </div>
                                Pendarahan
                            </div>
                        </label>
                        <label>
                            <input type="radio" name="event" value={"gagalfungsi"} className="hidden" onChange={(e) => setEvent(e.target.value)} />
                            <div className={`w-28 h-28 aspect-square  rounded-lg justify-center flex items-center flex-col font-medium text-center ${event == "gagalfungsi" ? "scale-105 bg-red-600" : ""}`}>
                                <div className="w-14">
                                    <img src={tubuh} alt="" className="w-full" />
                                </div>
                                Gagal Fungsi Tubuh
                            </div>
                        </label>
                        <label>
                            <input type="radio" name="event" value={"lainnya"} className="hidden" onChange={(e) => setEvent(e.target.value)} />
                            <div className={`w-28 h-28 aspect-square  rounded-lg justify-center flex items-center flex-col font-medium text-center ${event == "lainnya" ? "scale-105 bg-red-600" : ""}`}>
                                <div className="w-14 flex h-8 justify-center gap-2 items-center">
                                    <div className="h-2 w-2 rounded-full bg-black"></div>
                                    <div className="h-2 w-2 rounded-full bg-black"></div>
                                    <div className="h-2 w-2 rounded-full bg-black"></div>
                                </div>
                                Lainnya
                            </div>
                        </label>
                    </div>
                </div>
                <div>
                <h3 className="text-xl font-semibold text-center mb-4">Masukan Alamat</h3>
                <textarea className="w-full border-2 border-slate-300 rounded-lg p-4" name="alamat" id="" rows="4" value={Alamat} onChange={(e)=>setAlamat(e.target.value)}></textarea>
                </div>
                <div className="w-full mt-auto mb-20">
                    <button type="submit" className="p-2 w-full rounded-lg bg-red-600 text-white font-medium" onClick={handleSubmit}>Hubungi Ambulance</button>
                </div>
            </div>

        </div>
    )
}
export default TingkatBiasa