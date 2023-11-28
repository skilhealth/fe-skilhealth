import { useNavigate } from "react-router-dom"

function DoctorCard({data}) {
    const navigate = useNavigate()
    const  toDetail = () =>{
        navigate(`/doctor/${data.id}`)
    }
    return (
        <div className="bg-slate-200 w-full h-36 flex p-2 gap-3 rounded-xl" onClick={toDetail}>
            <div className="h-full">
                <img src={`${data.img}`} alt="" className="h-full rounded-xl object-cover" />
            </div>
            <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 text-sm">
                    <div className="w-4 h-4 rounded-full bg-green-500"></div>
                    {data.status}
                </div>
                <div className="text-xl font-bold">{data.nama}</div>
                <div className="text-base font-medium">{data.spesialis}</div>
                <div className="text-base font-regular">{data.rs}</div>
            </div>
        </div>
    )
}
export default DoctorCard