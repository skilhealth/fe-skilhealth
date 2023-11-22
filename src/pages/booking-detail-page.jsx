import moment from "moment/moment"
import Backbutton from "../components/backbutton"
import DoctorDetail from "../components/doctor-detail"

function BookingDetailPage() {
    const {data} = {
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
            }]
        }
    }
    return (
        <div className="p-4">
            <Backbutton nama="Informasi Jadwal" />
            <DoctorDetail data={data}/>
            <div className=" shadow-2xl w-full  p-4 rounded-xl">
                <div className="font-medium pb-4 border-b-4">
                    <div className="inline p-2 rounded-lg bg-green-500 text-white">Reguler</div>
                    <div className="mt-2">Senin, 12 September 2023</div>
                    <div>Skilvul Hospital Jakarta</div>
                </div>
                <div className="flex flex-col gap-1 mt-4 font-bold">
                    <button className="border-4 border-red-700 bg-red-700 p-2 text-white rounded-xl">Masuk</button>
                    <button className="border-4 border-red-700 p-2 text-red-700 rounded-xl">Ganti Jadwal</button>
                    <button className="border-4 border-white p-2 text-red-700 rounded-xl">Batalkan Jadwal</button>
                </div>
            </div>
        </div>
    )
}
export default BookingDetailPage