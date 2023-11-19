import Backbutton from "../components/backbutton"

function MenungguPanggilan() {
    return (
        <div className="p-4">
            <Backbutton nama="Menunggu Panggilan" />
            <div className=" bg-slate-200 w-full font-medium p-4 rounded-lg flex flex-col">
                <div className=" border-b-4 border-slate-300 py-2 mb-2">
                    Hari Jumat, 15-09-2023 ,Jam 20:00 WIB
                </div>
                <div className="mb-10">
                    <h2 className="text-2xl font-bold">
                        Dr. Jaydon Schleifer
                    </h2>
                    <div>Ahli Jantung</div>
                </div>
                <div className="w-full">
                    Dokter Sudah berada dipanggilan
                    <button className="bg-red-700 text-white p-4 w-full rounded-lg mt-2">Masuk Panggilan</button>
                </div>
            </div>
        </div>
    )
}
export default MenungguPanggilan