import refresh from "../assets/refresh.png"

function CheckInCard({data}) {
    return (
        <div className=" shadow-lg w-full flex p-4 items-center bg-slate-200 rounded-lg">
            <div className="grow">
                <div className="flex gap-4 items-center w-full font-medium">
                    <div className=" bg-green-400 rounded-lg w-4 h-4"></div>
                    {data.status}
                </div>
                <div className="text-2xl font-bold">
                    {data.nama}
                </div>
                <div className="font-medium">
                    {data.spesialis}
                </div>
                <div className="font-medium">
                    {data.rs}
                </div>
            </div>
            <div className="">
                <button className="bg-red-700 text-white text-2xl font-medium w-24 rounded-xl aspect-square box-border p-7">
                    <img src={refresh} alt="" className="invert" />
                </button>
            </div>
        </div>
    )
}
export default CheckInCard