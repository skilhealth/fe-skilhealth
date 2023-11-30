import moment from "moment/moment"
import { useNavigate } from "react-router-dom"

function PasienLanding({pasien}) {
    const navigate = useNavigate()
    const toJanjiDetail = () =>{
        navigate(`/janjipasien/${pasien.id}`)
    }
    return (
        <div className="bg-slate-100 w-full h-24 lg:h-auto flex p-2 gap-3 rounded-xl mb-2" onClick={toJanjiDetail}>
            <div className="h-full">
                <img src={`${pasien.img}`} alt="" className="h-full rounded-xl object-cover lg:h-20" />
            </div>
            <div className="flex flex-col">
                <div className="text-sm flex items-center">
                    <div className={` p-1 rounded-lg text-xs  ${(pasien.status == "Belum Mulai") ? "bg-yellow-400" : "bg-slate-400"}`}>{pasien.status}</div>
                </div>
                <div className="text-xl font-bold">{pasien.nama}</div>
                <div className="font-normal">{pasien.tipe} , {moment(pasien.date).format("DD MMMM YYYY")}</div>
            </div>
        </div >
    )
}
export default PasienLanding