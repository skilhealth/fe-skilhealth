import refresh from "../assets/refresh.png"

function CheckInCard() {
    return (
        <div className=" shadow-lg w-full flex p-4 items-center bg-slate-200 rounded-lg">
            <div className="grow">
                <div className="flex gap-4 items-center w-full font-medium">
                    <div className=" bg-yellow-400 rounded-lg w-4 h-4"></div>
                    Sedang Kerja
                </div>
                <div className="text-2xl font-bold">
                    Dr. Jaydon Schleifer
                </div>
                <div className="font-medium">
                    Ahli Jantung
                </div>
                <div className="font-medium">
                    Skilvul Hospital Jakarta
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