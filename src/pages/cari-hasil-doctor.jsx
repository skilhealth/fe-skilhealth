import { useState } from "react"
import Backbutton from "../components/backbutton"
import DoctorCardDesk from "../components/doctor-card-desktop"
import HasilCariPage from "./hasil-pencarian-page"
import PencarianDokter from "./pencarian-dokter"

function CariHasil() {
    const hari = [["Senin", "Monday"], ["Selasa", "Tuesday"], ["Rabu", "Wednesday"], ["Kamis", "Thursday"], ["Jumat", "Friday"], ["Sabtu", "Satuday"], ["Minggu", "Sunday"]]
    const area = ["Jakarta", "Jawa Tengah", "Jawa Barat", "Banten", "Jawa Timur", "Kalimantan"]
    const rs = ["Skilvul Hospital Jakarta", "Skilvul Hospital Bandung", "Skilvul Hospital Surabaya", "Skilvul Hospital Semarang", "Skilvul Hospital Balikpapan"]
    const spesialist = ["Ahli Jantung", "Ahli Kandungan", "Dokter Umum", "Ahli THT"]
    const { dokters } = {
        message: "Hallo",
        dokters: [
            // {
            //     status: "Sedang Dirumah Sakit",
            //     img: "/images/dokter/doctor1.png",
            //     nama: "Dr. Jaydon Schleifer",
            //     spesialis: "Ahli Jantung",
            //     rs: "Skilvul Hospital jakarta"
            // },
            // {
            //     status: "Sedang Libur",
            //     img: "/images/dokter/doctor1.png",
            //     nama: "Dr. Zain Mango",
            //     spesialis: "Ahli Jantung",
            //     rs: "Skilvul Hospital Surabaya"
            // },
            // {
            //     status: "Sedang Libur",
            //     img: "/images/dokter/doctor1.png",
            //     nama: "Dr. Zain Mango",
            //     spesialis: "Ahli Jantung",
            //     rs: "Skilvul Hospital Surabaya"
            // },
            // {
            //     status: "Sedang Libur",
            //     img: "/images/dokter/doctor1.png",
            //     nama: "Dr. Zain Mango",
            //     spesialis: "Ahli Jantung",
            //     rs: "Skilvul Hospital Surabaya"
            // },
            // {
            //     status: "Sedang Libur",
            //     img: "/images/dokter/doctor1.png",
            //     nama: "Dr. Zain Mango",
            //     spesialis: "Ahli Jantung",
            //     rs: "Skilvul Hospital Surabaya"
            // },
            // {
            //     status: "Sedang Libur",
            //     img: "/images/dokter/doctor1.png",
            //     nama: "Dr. Zain Mango",
            //     spesialis: "Ahli Jantung",
            //     rs: "Skilvul Hospital Surabaya"
            // },
            // {
            //     status: "Sedang Libur",
            //     img: "/images/dokter/doctor1.png",
            //     nama: "Dr. Zain Mango",
            //     spesialis: "Ahli Jantung",
            //     rs: "Skilvul Hospital Surabaya"
            // },

        ]

    }

    const [NAMA, setNAMA] = useState("")
    const [HARI, setHARI] = useState("")
    const [AREA, setAREA] = useState("")
    const [RS, setRS] = useState("")
    const [SPESIALIS, setSPESIALIS] = useState("")
    const [METODE, setMETODE] = useState("")

    const handleSearch = (e) => {
        e.preventDefault()
        let SearchDoc = {}
        if (NAMA !== "") SearchDoc.nama = NAMA;
        if (HARI !== "") SearchDoc.hari = HARI;
        if (AREA !== "")
            SearchDoc = {
                ...SearchDoc,
                Lanjutan: {
                    ...SearchDoc.Lanjutan,
                    "$Dokter.Instansi.area$": AREA,
                }
            };
        if (RS !== "")
            SearchDoc = {
                ...SearchDoc,
                Lanjutan: {
                    ...SearchDoc.Lanjutan,
                    "$Dokter.Instansi.nama$": RS,
                }
            };
        if (SPESIALIS !== "")
            SearchDoc = {
                ...SearchDoc,
                Lanjutan: {
                    ...SearchDoc.Lanjutan,
                    "$Dokter.Spesiali.nama$": "Ahli Jantung",
                }
            };
        if (METODE !== "")
            SearchDoc = {
                ...SearchDoc,
                Lanjutan: {
                    ...SearchDoc.Lanjutan,
                    "tipe": METODE,
                }
            };
        console.log(SearchDoc)
    }
    return (
        <div className="flex flex-col lg:px-24 lg:py-4">
            <div className="text-3xl mb-4 font-bold">Cari Dokter</div>
            <div className="flex gap-8">
                <form className="flex flex-col pt-4 rounded-xl" onSubmit={handleSearch}>
                    <input type="text" className="bg-white mb-4 border-2 border-black rounded-lg p-2 px-4 text-base text" placeholder="Cari Dokter"  onChange={(e) => setNAMA(e.target.value)} />
                    <h3 className="text-lg text-center font-semibold">Pencarian Lanjutan</h3>
                    <div className="w-full flex flex-col gap-2 mb-4">
                        <label htmlFor="hari" className="text-lg font-medium">
                            Hari
                        </label>
                        <select name="hari" id="hari" className="bg-white border-2 font-regular border-black rounded-lg p-2 px-4 text-base" onChange={(e) => setHARI(e.target.value)}>
                            <option value="">Pilih hari</option>
                            {
                                hari.map((item, index) => (
                                    <option key={index} value={item[1]}>{item[0]}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="w-full flex flex-col gap-2 mb-4">
                        <label htmlFor="area" className="text-lg font-medium">
                            Area
                        </label>
                        <select name="area" id="area" className="bg-white border-2 font-regular border-black rounded-lg p-2 px-4 text-base" onChange={(e) => setAREA(e.target.value)}>
                            <option value="">Pilih Area</option>
                            {
                                area.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="w-full flex flex-col gap-2 mb-4">
                        <label htmlFor="rs" className="text-lg font-medium">
                            Rumah Sakit
                        </label>
                        <select name="rs" id="rs" className="bg-white border-2 font-regular border-black rounded-lg p-2 px-4 text-base" onChange={(e) => setRS(e.target.value)}>
                            <option value="">Pilih Rumah Sakit</option>
                            {
                                rs.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="w-full flex flex-col gap-2 mb-4">
                        <label htmlFor="specialist" className="text-lg font-medium">
                            Specialist
                        </label>
                        <select name="specialist" id="specialist" className="bg-white border-2 font-regular border-black rounded-lg p-2 px-4 text-base" onChange={(e) => setSPESIALIS(e.target.value)}>
                            <option value="">Pilih Specialist</option>
                            {
                                spesialist.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="w-full flex flex-col gap-2 mb-4">
                        <label htmlFor="metode" className="text-lg font-medium">
                            Metode
                        </label>
                        <select name="metode" id="metode" className="bg-white border-2  font-normal border-black rounded-lg p-2 px-4 text-base" onChange={(e) => setMETODE(e.target.value)}>
                            <option value="">Pilih Metode</option>
                            <option value="daring">Daring</option>
                            <option value="reguler">Reguler</option>
                            <option value="homecare">Homecare</option>
                        </select>
                    </div>
                    <div className="mt-2">
                        <button className="bg-red-700 rounded-xl font-medium w-full text-lg text-white p-2" type="submit">Cari</button>
                    </div>
                </form>
                <div className="flex justify-between border-2 w-full p-2 flex-wrap gap-3 relative">
                    {
                        dokters === undefined || dokters.length === 0 ? (
                            <div className="w-full h-full relative">
                                <div className="text-lg font-semibold text-slate-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    Dokter Tidak Ditemukan
                                </div>
                            </div>
                        ) : (
                            dokters.map((item, index) => (
                                <DoctorCardDesk key={index} data={item} />
                            ))
                        )

                    }
                </div>
            </div>

        </div>
    )
}
export default CariHasil