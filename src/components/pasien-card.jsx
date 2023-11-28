import { data } from "browserslist"
import moment from "moment/moment"
import "moment/locale/id"

function PasienCard({data}) {
    console.log(data.tipe)
    return (
        <div className="bg-slate-200 w-full h-28 lg:h-40 flex p-4 gap-3 rounded-xl">
            <div className="h-full">
                <img src={`${data.img}`} alt="" className="h-full rounded-xl object-cover" />
            </div>
            <div className="flex flex-col">
                <div className="text-sm flex items-center gap-2">
                    <div className={` p-1 rounded-lg ${(data.status == "Berlangsung")?"bg-yellow-400":"bg-slate-400"}`}>{data.status}</div>
                </div>
                <div className="text-xl lg:text-2xl font-bold">{data.nama}</div>
                <div className="lg:text-lg font-medium">{data.tipe} , {moment(data.date).format("DD MMMM YYYY")}</div>
            </div>
        </div >
    )
}
export default PasienCard