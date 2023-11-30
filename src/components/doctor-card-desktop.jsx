import { useNavigate } from "react-router-dom"

function DoctorCardDesk({data}) {
    const navigate = useNavigate()
    const  toDetail = () =>{
        navigate(`/${data.id}`)
    }
    return (
        <div onClick={toDetail} className="bg-slate-100 border-2 max-w-[198px] w-full h-max flex p-2 gap-3 flex-col items-center rounded-lg">
            <div className="w-full">
                <img src={`${data.img}`} alt="" className="rounded-xl h-full " />
            </div>
            <div className="flex flex-col">
                <div className="flex items-center gap-2 text-sm">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    {data.status}
                </div>
                <div className="text-base font-bold">{data.nama}</div>
                <div className="text-sm font-regular">{data.spesialis}</div>
                <div className="text-sm font-regular">{data.rs}</div>
            </div>
        </div>
    )
}
export default DoctorCardDesk