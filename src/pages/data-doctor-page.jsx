import Backbutton from "../components/backbutton"
import DoctorDetail from "../components/doctor-detail"
import JadwalDokter from "../components/jadwal-dokter"

function DataDokter() {

    return (
        <div className="p-4">
            <Backbutton nama="Informasi Jadwal" />
            <DoctorDetail />
            <JadwalDokter />
            <div className="flex border-2 mt-2 w-full shadow-lg border-slate-100 p-2 justify-between gap-2">
                <div className="grow">
                    <select name="pembayaran" id="" className="w-full border-2 border-black rounded-md pl-2">
                        <option value="">Pilih Metode Pembayaran</option>
                        <option value="">QRIS</option>
                        <option value="">Bank & Kredit</option>
                        <option value="">Alfamaret</option>
                    </select>
                    <h3 className="text-4xl font-semibold">RP.83.500</h3>
                    <p>Include Fax*</p>
                </div>
                <button className="h-full aspect-square bg-red-700 p-2 rounded-2xl text-white ">Konfirmasi</button>
            </div>
        </div>
    )
}
export default DataDokter