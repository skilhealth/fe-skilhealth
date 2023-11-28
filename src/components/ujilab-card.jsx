import moment from "moment/moment"
import { useNavigate } from "react-router-dom"

function UjiLabCard({data}){
    const navigate = useNavigate()

    console.log(data)
    const toDetailPage = (e) => {
        e.preventDefault()
        navigate(`${data.id}`)
    }
    return(
        <div onClick={toDetailPage} className="bg-slate-200 w-full py-6 px-4 rounded-lg mb-2">
            <div className="text-sm lg:text-base">{`Hari ${data.date.format('dddd')}, ${data.date.format('DD-MM-YYYY')} / ${data.ujiid}`}</div>
            <h1 className="text-xl lg:text-2xl font-bold">{data.nama}</h1>
            <div className="text-sm lg:text-base">{data.dokter}</div>
        </div>
    )
}
export default UjiLabCard