import moment from "moment/moment";
import { useNavigate } from "react-router-dom";
import "moment/locale/id"
function BookingCard({ data }) {
    moment.locale("id")
    const tipe = (data) => {
        if (data.Jadwal.tipe === "reguler") return "bg-green-500 text-white font-bold";
        if (data.Jadwal.tipe === "daring") return "bg-yellow-500 text-black font-bold";
        return "bg-red-800 text-white font-bold"
    }
    const tgl = moment(data.Jadwal.date) 
    const navigate  = useNavigate()
    const toDetailPage = (e) =>{
        e.preventDefault()
        navigate(`/booking/${data.id}`)
    }
    return (
        <div className={`${data.status?"bg-slate-500":"bg-slate-200"} w-full h-36 cursor-pointer hover:bg-slate-300 transition duration-200 lg:h-40 flex p-4 gap-3 rounded-xl`} onClick={toDetailPage}>
            <div className="h-full">
                <img src={`${data.Dokter.images}`} alt="" className="h-full rounded-xl object-cover" />
            </div>
            <div className="flex flex-col">
                <div className="text-sm flex items-center gap-2">
                    <div className={` p-1 rounded-lg ${tipe(data)}`}>{data.Jadwal.tipe.charAt(0).toUpperCase() + data.Jadwal.tipe.slice(1)}</div>
                    {tgl.format('DD MMMM YYYY')}
                </div>
                <div className="text-xl lg:text-2xl font-bold">{data.Dokter.nama}</div>
                <div className="lg:text-lg font-medium">{data.Dokter.Spesiali.nama}</div>
                <div className="lg:text-lg font-regular">{data.Dokter.Instansi.nama}</div>
            </div>
        </div >
    )
}
export default BookingCard