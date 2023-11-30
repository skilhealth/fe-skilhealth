import refresh from "../assets/refresh.png"

function CheckInCard({ data,booking,setCheckin,id }) {
    const handleRefresh = () =>{
        const fetchData = async () => {
            const antrianData = await booking(id);
            setCheckin(antrianData);
        };
        fetchData();
    }
    return (
        <div className=" shadow-lg w-full flex p-4 items-center bg-slate-200 rounded-lg">
            <div className="grow">
                <div className="flex items-center gap-2 text-sm">
                    <div className={`w-4 h-4 rounded-full ${data.status ? "bg-green-500" : "bg-red-500"} `}></div>
                    {data.status ? "Aktif" : "Tidak Aktif"}
                </div>
                <div className="text-2xl font-bold">
                    {data.nama}
                </div>
                <div className="font-medium">
                    {data.Spesiali.nama}
                </div>
                <div className="font-medium">
                    {data.Instansi.nama}
                </div>
            </div>
            <div className="">
                <button onClick={handleRefresh} className="bg-red-700 text-white text-2xl font-medium w-24 rounded-xl aspect-square box-border p-7">
                    <img src={refresh} alt="" className="invert" />
                </button>
            </div>
        </div>
    )
}
export default CheckInCard