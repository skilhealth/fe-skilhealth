import moment from "moment/moment"

function UjiLabCard({data}){
    console.log(data)
    return(
        <div className="bg-slate-200 w-full py-6 px-4 rounded-lg mb-2">
            <div className="text-sm lg:text-base">{`Hari ${data.date.format('dddd')}, ${data.date.format('DD-MM-YYYY')} / ${data.ujiid}`}</div>
            <h1 className="text-xl lg:text-2xl font-bold">{data.nama}</h1>
            <div className="text-sm lg:text-base">{data.dokter}</div>
        </div>
    )
}
export default UjiLabCard