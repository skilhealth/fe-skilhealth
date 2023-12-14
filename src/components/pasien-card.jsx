import moment from "moment/moment"
import "moment/locale/id"
import { useNavigate } from "react-router-dom"

function PasienCard({ data }) {
    const navigate = useNavigate()
    const toJanjiDetail = (e) => {
        e.preventDefault()
        if (!data.ujilab) return navigate(`/janjipasien/${data.id}/add`, { state: { data } })

        return navigate(`/janjipasien/${data.id}`)
    }
    return (
        <div onClick={toJanjiDetail} className="bg-slate-200 w-full h-32 lg:h-40 flex p-4 gap-3 rounded-xl">
            <div className="h-full min-w-min">
                <img src={`${data.User.images}`} alt="" className="h-full aspect-square rounded-xl object-cover" />
            </div>
            <div className="flex flex-col shrink">
                <div className="text-sm flex items-center gap-2">
                    <div className={` p-1 rounded-lg ${(data.status == false) ? "bg-yellow-400" : "bg-slate-400"}`}>{data.status == false ? "Belum Mulai" : "Selesai"}</div>
                </div>
                <div className="text-xl lg:text-2xl font-bold">{data.User.nama}</div>
                <div className="lg:text-lg font-medium">{data.Jadwal.tipe} , {moment(data.Jadwal.date).format("DD MMMM YYYY")}</div>
                <div>{data.User.no_tlp}</div>
            </div>
        </div >
    )
}
export default PasienCard