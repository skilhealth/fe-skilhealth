import Backbutton from "../components/backbutton"
import DoctorDetail from "../components/doctor-detail"
import JadwalDokter from "../components/jadwal-dokter"

function Editbooking() {

    return (
        <div className="p-4">
            <Backbutton nama="Atur Jadwal Kembali" />
            <DoctorDetail />
            <JadwalDokter />
            <div className="flex px-6 mt-2 w-full border-slate-100 p-2 justify-between gap-2">
                <button className="w-full bg-red-700 p-2 rounded-lg text-white ">Konfirmasi</button>
            </div>
        </div>
    )
}
export default Editbooking