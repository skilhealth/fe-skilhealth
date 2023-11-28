import { useNavigate } from "react-router-dom";

function BookingCard({ data }) {
    const tipe = (data) => {
        if (data === "Regular") return "bg-green-500 text-white";
        if (data === "Daring") return "bg-yellow-500 text-black";
        return "bg-red-800 text-white"
    }
    const navigate  = useNavigate()
    const toDetailPage = (e) =>{
        e.preventDefault()
        navigate(`/booking/${data.id}`)
    }
    return (
        <div className="bg-slate-200 w-full h-36 lg:h-40 flex p-4 gap-3 rounded-xl" onClick={toDetailPage}>
            <div className="h-full">
                <img src={`${data.img}`} alt="" className="h-full rounded-xl object-cover" />
            </div>
            <div className="flex flex-col">
                <div className="text-sm flex items-center gap-2">
                    <div className={` p-1 rounded-lg ${tipe(data.jadwal.tipe)}`}>{data.jadwal.tipe}</div>
                    12 September 2023
                </div>
                <div className="text-xl lg:text-2xl font-bold">{data.nama}</div>
                <div className="lg:text-lg font-medium">{data.spesialis}</div>
                <div className="lg:text-lg font-regular">{data.rs}</div>
            </div>
        </div >
    )
}
export default BookingCard