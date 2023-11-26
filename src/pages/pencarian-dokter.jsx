
import { useState } from "react"
import Backbutton from "../components/backbutton"
function PencarianDokter() {
    const hari = [["Senin", "Monday"], ["Selasa", "Tuesday"], ["Rabu", "Wednesday"], ["Kamis", "Thursday"], ["Jumat", "Friday"], ["Sabtu", "Satuday"], ["Minggu", "Sunday"]]
    const area = ["DKI Jakarta", "Jawa Tengah", "Jawa Barat", "Banten", "Jawa Timur", "Kalimantan"]
    const rs = ["Skilvul Hospital Jakarta", "Skilvul Hospital Bandung", "Skilvul Hospital Surabaya", "Skilvul Hospital Semarang", "Skilvul Hospital Balikpapan"]
    const spesialist = ["Ahli Jantung", "Ahli Kandungan", "Dokter Umum", "Ahli THT"]

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
                    "tipe":METODE,
                }
            };
            console.log(SearchDoc)
    }

    return (
        <div className="p-4 lg:px-24 flex-col flex items-center">
            <Backbutton nama="Pencarian Dokter" />
            <form className=" mt-4 bg-slate-200 flex flex-col p-4 rounded-xl max-w-xl w-full" onSubmit={handleSearch}>
                <input type="text" className="bg-white mb-4 border-2 border-black rounded-lg p-2 px-4 text-base text" value={NAMA} placeholder="Cari Dokter" onChange={(e) => setNAMA(e.target.value)} />
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
        </div>
    )
}
export default PencarianDokter