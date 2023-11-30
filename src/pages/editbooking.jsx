import moment from "moment/moment"
import { useState } from "react"
import { useParams } from "react-router-dom"
import Backbutton from "../components/backbutton"
import DoctorDetail from "../components/doctor-detail"
import JadwalDokter from "../components/jadwal-dokter"


// route.patch("/:id/edit",editBooking) atau patch booking/:id/edit  // buat edit janji temu ad di halaman editbooking
function Editbooking() {
    const [idJadwal,setIdJadwal] = useState()
    const [harga, useHarga] = useState(0)
    const {id} = useParams()

    const { data,antrian } = {
        "message": "Antrian Berhasil ditemukan",
        "data": {
            "id": 1,
            "status": true,
            "token": "QL62FE",
            "Dokter": {
                "id": 1,
                "nama": "Dr. Jane Smith",
                "status": true,
                "deskripsi": "Dokter spesialis mata",
                "skd": "987654321",
                "pengalaman": "[\"Rumah Sakit Anu\",\"Rumah Sakit Ani\"]",
                "images": "/images/dokter/doctor1.png",
                "no_tlp": "0881024656367",
                "pendidikan": "[\"Universitas XYZ\",\"Universitas ABC\"]",
                "Instansi": {
                    "nama": "Skilvul Hospital Jakarta"
                },
                "Spesiali": {
                    "nama": "Ahli Jantung"
                },
                "Jadwals": [
                    {
                        "id":1,
                        "date": "2023-11-25T00:00:00.000Z",
                        "tipe": "daring",
                        "status": true
                    },
                    {
                        "id":2,
                        "date": "2023-11-26T00:00:00.000Z",
                        "tipe": "reguler",
                        "status": true
                    },
                    {
                        "id":3,
                        "date": "2023-11-27T00:00:00.000Z",
                        "tipe": "reguler",
                        "status": true
                    },
                    {
                        "id":4,
                        "date": "2023-11-28T00:00:00.000Z",
                        "tipe": "reguler",
                        "status": true
                    }
                ]
            },
            "Jadwal": {
                "id": 1,
                "date": "2023-11-25T00:00:00.000Z",
                "tipe": "reguler",
                "status": false
            }
        },
        "antrian": 0
    }

    const handleEdit = (e) =>{
        e.preventDefault()
        const editJanji = {
            jadwal_id:idJadwal
        }
        console.log(editJanji)
    }
    return (
        <div className="p-4">
            <Backbutton nama="Atur Jadwal Kembali" />
            <div className="flex flex-col lg:flex-row">
                <DoctorDetail data={data.Dokter} />
                <form className=" max-w-md w-full mt-2 lg:mt-0 lg:p-4 lg:border-2 lg:h-min rounded-lg border-slate-500" onSubmit={handleEdit}>
                    <JadwalDokter jadwal={data.Dokter.Jadwals.filter(schdule => schdule.tipe === data.Jadwal.tipe)} useharga={(harga) => useHarga(harga)} useidjadwal ={(idJadwal)=>setIdJadwal(idJadwal)} />
                    <div className="flex mt-2 w-full border-slate-100 p-2 justify-between gap-2">
                        <button className="w-full bg-red-700 p-2 rounded-lg text-white " type="submit">Konfirmasi</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Editbooking