import moment from "moment/moment"
import Backbutton from "../components/backbutton"
import 'moment/locale/id'

function MenungguPanggilan() {
    moment.locale('id');
    const data = {
        token: "GH651H",
        antrian: "JT02",
        sisa: 2,
        date: moment("2023-12-12"),
        dokter:
        {
            status: "Sedang Dirumah Sakit",
            img: "/images/dokter/doctor1.png",
            nama: "Dr. Jaydon Schleifer",
            spesialis: "Ahli Jantung",
            rs: "Skilvul Hospital jakarta"
        },
    }
    const hari = data.date
    return (
        <div className="p-4">
            <Backbutton nama="Menunggu Panggilan" />
            <div className=" bg-slate-200 w-full font-medium p-4 rounded-lg flex flex-col">
                <div className=" border-b-4 border-slate-300 py-2 mb-2">
                    {`Hari ${data.date.format('dddd')}, ${data.date.format('DD-MM-YYYY')}, Jam 20:00 WIB`}
                </div>
                <div className="mb-10">
                    <h2 className="text-2xl font-bold">
                        {data.dokter.nama}
                    </h2>
                    <div>{data.dokter.spesialis}</div>
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