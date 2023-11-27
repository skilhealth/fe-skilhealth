import moment from "moment/moment"
import { useState } from "react"
import { useParams } from "react-router-dom"
import Backbutton from "../components/backbutton"
import DoctorDetail from "../components/doctor-detail"
import JadwalDokter from "../components/jadwal-dokter"

function Editbooking() {
    const [idJadwal,setIdJadwal] = useState()
    const [harga, useHarga] = useState(0)
    const {id} = useParams()

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
                id:1,
                hari: "Senin",
                tgl: moment("2023-12-14").format("DD-MM-YYYY"),
                tipe: "Regular",
                harga: 60000
            }, {
                id:2,
                hari: "Rabu",
                tgl: moment("2023-12-15").format("DD-MM-YYYY"),
                tipe: "Homecare",
                harga: 80000
            },
            {
                id:3,
                hari: "Sabtu",
                tgl: moment("2023-12-17").format("DD-MM-YYYY"),
                tipe: "Daring",
                harga: 30000
            }, {
                id:4,
                hari: "Minggu",
                tgl: moment("2023-12-18").format("DD-MM-YYYY"),
                tipe: "Regular",
                harga: 60000
            }]
        }
    }
    const handleEdit = (e) =>{
        e.preventDefault()
        console.log(id)
        const editJanji = {
            jadwal_id:idJadwal
        }
        console.log(editJanji)
    }
    return (
        <div className="p-4">
            <Backbutton nama="Atur Jadwal Kembali" />
            <div className="flex flex-col lg:flex-row">
                <DoctorDetail data={data} />
                <form className=" max-w-md w-full mt-2 lg:mt-0 lg:p-4 lg:border-2 lg:h-min rounded-lg border-slate-500" onSubmit={handleEdit}>
                    <JadwalDokter jadwal={data.jadwal.filter(schdule => schdule.tipe === 'Regular')} useharga={(harga) => useHarga(harga)} useidjadwal ={(idJadwal)=>setIdJadwal(idJadwal)} />
                    <div className="flex mt-2 w-full border-slate-100 p-2 justify-between gap-2">
                        <button className="w-full bg-red-700 p-2 rounded-lg text-white " type="submit">Konfirmasi</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Editbooking