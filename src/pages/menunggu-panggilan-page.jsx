import moment from "moment/moment"
import Backbutton from "../components/backbutton"
import 'moment/locale/id'
import { useLocation } from "react-router-dom";

function MenungguPanggilan() {
    moment.locale('id');
    const location = useLocation()
    const data = location.state && location.state.data 

    const tgl = moment(data.Jadwal.date) 
    return (
        <div className="p-4 flex flex-col items-center">
            <Backbutton nama="Menunggu Panggilan" />
            <div className=" bg-slate-200 w-full font-medium p-4 rounded-lg flex flex-col max-w-4xl">
                <div className=" border-b-4 border-slate-300 py-2 mb-2 lg:text-lg">
                    {`Hari ${tgl.format('dddd')}, ${tgl.format('DD-MM-YYYY')}, Jam 20:00 WIB`}
                </div>
                <div className="mb-10">
                    <h2 className="text-2xl lg:text-4xl font-bold">
                        {data.Dokter.nama}
                    </h2>
                    <div className="lg:text-xl">{data.Dokter.Spesiali.nama}</div>
                </div>
                <div className="w-full lg:text-lg lg:font-normal">
                    Dokter Sudah berada dipanggilan
                    <button className="bg-red-700 text-white p-4 w-full rounded-lg mt-2"><a href={` https://wa.me/${data.Dokter.no_tlp}`} target="_blank" rel="noopener noreferrer"> Masuk Panggilan</a></button>
                </div>
            </div>
        </div>
    )
}
export default MenungguPanggilan