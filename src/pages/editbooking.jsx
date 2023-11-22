import moment from "moment/moment"
import Backbutton from "../components/backbutton"
import DoctorDetail from "../components/doctor-detail"
import JadwalDokter from "../components/jadwal-dokter"

function Editbooking() {
    const { data } = {
        data: {
            nama: "Dr. Jaydon Schleifer",
            status: "Sedang Dirumah Sakit",
            spesialis: "Ahli Jantung",
            rs: "Skilvul Hospital Jakarta",
            keterangan: "Dr. Jaydon Schleifer adalah seorang spesialis jantung berpengalaman dengan lebih dari 15 tahun praktik medis.Saat ini Beliau praktik di skilvul Hospital Jakarta.",
            skd: 10297361028361,
            pengalaman: ["RSD UNI", "RSU ANU"],
            pendidikan: ["Universitas Singaperbangsa Karawang"],
            img: "/images/dokter/doctor1.png",
            jadwal: [{
                hari: "Senin",
                tgl: moment("2023-12-14").format("DD-MM-YYYY"),
                tipe: "Regular",
                harga: 60000
            }, {
                hari: "Rabu",
                tgl: moment("2023-12-15").format("DD-MM-YYYY"),
                tipe: "Homecare",
                harga: 80000
            },
            {
                hari: "Sabtu",
                tgl: moment("2023-12-17").format("DD-MM-YYYY"),
                tipe: "Daring",
                harga: 30000
            }, {
                hari: "Minggu",
                tgl: moment("2023-12-18").format("DD-MM-YYYY"),
                tipe: "Regular",
                harga: 60000
            }]
        }
    }
    return (
        <div className="p-4">
            <Backbutton nama="Atur Jadwal Kembali" />
            <div className="flex flex-col lg:flex-row">
                <DoctorDetail data={data} />
                <div className=" max-w-md w-full mt-2 lg:mt-0 lg:p-4 lg:border-2 lg:h-min rounded-lg border-slate-500">
                    <JadwalDokter jadwal={data.jadwal.filter(schdule => schdule.tipe === 'Regular')} />
                    <div className="flex mt-2 w-full border-slate-100 p-2 justify-between gap-2">
                        <button className="w-full bg-red-700 p-2 rounded-lg text-white ">Konfirmasi</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Editbooking