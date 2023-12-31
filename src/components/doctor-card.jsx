import { useNavigate } from "react-router-dom"

function DoctorCard({data}) {
    const navigate = useNavigate()
    const Dokter = data;
    const toDetail = () =>{
        navigate(`/doctor/${Dokter.id}`)
    }

    return (
        <div className="bg-slate-200 w-full h-36 flex p-2 gap-3 rounded-xl cursor-pointer hover:bg-slate-300 transition duration-200" onClick={toDetail}>
            <div className="h-full">
                <img src={`${Dokter.images}`} alt="" className="h-full rounded-xl object-cover" />
            </div>
            <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2 text-sm">
                    <div className={`w-4 h-4 rounded-full ${Dokter.status?"bg-green-500":"bg-red-500"} `}></div>
                    {Dokter.status?"Aktif":"Tidak Aktif"}
                </div>
                <div className="text-md md:text-xl lg:text-2xl font-bold">{Dokter.nama}</div>
                <div className="text-sm md:text-base lg:text-md font-medium">{Dokter.Instansi.nama}</div>
                <div className="text-sm md:text-base lg:text-md font-regular">{Dokter.Spesiali.nama}</div>
            </div>
        </div>
    )
}
export default DoctorCard