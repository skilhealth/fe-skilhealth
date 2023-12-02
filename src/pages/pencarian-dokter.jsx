
import axios from "axios"
import { useContext, useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Backbutton from "../components/backbutton"
import { instansiContext } from "../context/instansi-provider"
function PencarianDokter() {
    const navigate = useNavigate()
    const { instansi } = useContext(instansiContext)
    const [listSp, setSP] = useState()

    const Spesialis = async () => {
        try {
            const response = await axios.get(`https://be-skilhealth.up.railway.app/spesialis/`)
            console.log(response.data.data)
            return response.data.data
        } catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            const spesialis = await Spesialis();
            console.log(spesialis)
            setSP(spesialis)
        }
        fetchData();
    }, [])

    const hari = [["Senin", "Monday"], ["Selasa", "Tuesday"], ["Rabu", "Wednesday"], ["Kamis", "Thursday"], ["Jumat", "Friday"], ["Sabtu", "Satuday"], ["Minggu", "Sunday"]]

    const [NAMA, setNAMA] = useState("")
    const [HARI, setHARI] = useState("")
    const [AREA, setAREA] = useState("")
    const [RS, setRS] = useState("")
    const [SPESIALIS, setSPESIALIS] = useState("")
    const [METODE, setMETODE] = useState("")

    const handleSearch = (e) => {
        e.preventDefault()
        let SearchDoc = {}
        if (NAMA !== "") SearchDoc.nama = NAMA.toLowerCase();
        if (HARI !== "") SearchDoc.hari = HARI;
        if (AREA !== "")
            SearchDoc = {
                ...SearchDoc,
                Lanjutan: {
                    ...SearchDoc.Lanjutan,
                    "$Instansi.area$": AREA,
                }
            };
        if (RS !== "")
            SearchDoc = {
                ...SearchDoc,
                Lanjutan: {
                    ...SearchDoc.Lanjutan,
                    "$Instansi.nama$": RS,
                }
            };
        if (SPESIALIS !== "")
            SearchDoc = {
                ...SearchDoc,
                Lanjutan: {
                    ...SearchDoc.Lanjutan,
                    "$Spesiali.nama$": SPESIALIS,
                }
            };
        if (METODE !== "")
            SearchDoc = {
                ...SearchDoc,
                Lanjutan: {
                    ...SearchDoc.Lanjutan,
                    "$Jadwal.tipe$": METODE,
                }
            };
        navigate("/doctor", { state: { SearchDoc } })
    }
    console.log(listSp)
    if (!instansi || !listSp) return (
        <div className="p-4 lg:px-24">
            <div className="flex flex-col gap-2">
                <div className="w-full h-full flex justify-center items-center">
                    <div className="text-lg font-semibold text-slate-300 absolute top-1/2 -translate-y-1/2">
                        Loading
                    </div>
                </div>
            </div>
        </div>
    )
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
                            instansi.map((item, index) => (
                                <option key={index} value={item.area}>{item.area}</option>
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
                            instansi.map((item, index) => (
                                <option key={index} value={item.nama}>{item.nama}</option>
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
                            listSp.map((item, index) => (
                                <option key={index} value={item.nama}>{item.nama}</option>
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