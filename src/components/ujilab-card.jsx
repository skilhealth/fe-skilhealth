import moment from "moment/moment"
import "moment/locale/id"
import { useNavigate } from "react-router-dom"

function UjiLabCard({data}){
    moment.locale("id")
    const navigate = useNavigate()
    const tgl = moment(data.createdAt)
    const toDetailPage = (e) => {
        e.preventDefault()
        navigate(`${data.id}`)
    }
    return(
        <div onClick={toDetailPage} className="bg-slate-200 w-full py-6 px-4 rounded-lg mb-2">
            <div className="text-sm lg:text-base">{`Hari ${tgl.format('dddd')}, ${tgl.format('DD-MM-YYYY')} / ${data.id}`}</div>
            <h1 className="text-xl lg:text-2xl font-bold">{data.judul}</h1>
            <div className="text-sm lg:text-base">{data.Dokter.nama}</div>
        </div>
    )
}
export default UjiLabCard