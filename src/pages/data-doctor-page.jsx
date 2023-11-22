import Backbutton from "../components/backbutton"
import DoctorDetail from "../components/doctor-detail"
import JadwalDokter from "../components/jadwal-dokter"
import moment from "moment/moment"
import { useState } from "react"

function DataDokter() {
    const [harga, useHarga] = useState(0)
    const data = {
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
    const { jadwal } = data.data
    return (
        <div className="p-4 flex flex-col lg:px-24">
            <Backbutton nama="Informasi Jadwal" />
            <div className="flex flex-col lg:flex-row">
                <DoctorDetail data={data.data} />
                <div className="flex-1 mt-2 lg:mt-0 lg:p-4 lg:border-2 lg:h-min rounded-lg border-slate-500">
                    <JadwalDokter jadwal={jadwal} useharga={(harga) => useHarga(harga)} />
                    <div className="flex lg:block border-2 mt-2 w-full shadow-lg lg:shadow-none lg:border-0 border-slate-100 p-2 justify-between gap-2">
                        <div className="grow">
                            <select name="pembayaran" id="" className="w-full border-2 border-black rounded-md pl-2">
                                <option value="">Pilih Metode Pembayaran</option>
                                <option value="">QRIS</option>
                                <option value="">Bank & Kredit</option>
                                <option value="">Alfamaret</option>
                            </select>
                            <h3 className="text-4xl font-semibold">Rp.{harga.toLocaleString()}</h3>
                            <p>Include Fax*</p>
                        </div>
                        <button className="h-full aspect-square lg:w-full lg:h-auto lg:aspect-auto lg:mt-4 bg-red-700 p-2 rounded-2xl text-white ">Konfirmasi</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default DataDokter