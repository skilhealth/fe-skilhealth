import { useEffect } from "react"
import { useState } from "react"
import { useLocation, useParams } from "react-router-dom";
import Backbutton from "../components/backbutton"

function CatatanMedis() {
    // masukin add booking
    const [judul, setJudul] = useState("")
    const [keluhan, setKeluhan] = useState("")
    const [diagnosa, setDiagnosa] = useState("")
    const [catatan, setCatatan] = useState("")
    const [status, setStatus] = useState(true)
    const [dataAPI, setData] = useState({})

    const location = useLocation();

    const currentPath = location.pathname;

    const isAddPath = currentPath.includes("/edit");
    const { id } = useParams()
    useEffect(() => {
        if (isAddPath) {
            setData({
                "message": "Menampilkan Ujilab",
                "data": {
                    "id": 1,
                    "antrian_id": 1,
                    "user_id": 1,
                    "dokter_id": 1,
                    "judul": "Jantung Berdebar debar",
                    "keluhan": "Pasien datang dengan keluhan nyeri perut sebelah kanan bawah yang semakin memburuk selama beberapa hari terakhir Dia juga mengalami mual dan muntah.",
                    "diagnosa": "Setelah melakukan pemeriksaan fisik dan beberapa tes tambahan, termasuk USG abdomen, pasien didiagnosis dengan apendisitis akut.Ini adalah peradangan akut pada usus buntu (apendiks) yang memerlukan tindakan bedah segera",
                    "catatan": "Dengan pertimbangan diagnosa apendisitis akut, tindakan bedah apendektomi darurat direkomendasikan untuk pasien ini.",
                    "dokumen": "[\"Hasil USG abdomen\"]",
                    "createdAt": "2023-11-29T04:18:07.000Z",
                    "Dokter": {
                        "id": 1,
                        "nama": "Dr. Jane Smith"
                    }
                }
            })
        }
    }, [])
    const { data } = dataAPI
    // ini kalau misalnya url nya /edit dan datanya bukan undefine
    useEffect(() => {
        if (data != undefined || data != null) {
            setJudul(data.judul)
            setKeluhan(data.keluhan)
            setDiagnosa(data.diagnosa)
            setCatatan(data.catatan)
        }
    }, [data])
    useEffect(() => {
        console.log(status)
    }, [status])
    const handleSubmit = (e) => {
        e.preventDefault()
        if (isAddPath) {
            //edit booking per id
            const editUjilab = {
                "id": 1,
                "judul": judul,
                "keluhan": keluhan,
                "diagnosa": diagnosa,
                "catatan": catatan,
            }
            return console.log("ini Edit", editUjilab);
        }
        const addUjilab = {
            "antrian_id": 1,
            "user_id": 2,
            "dokter_id": 1,
            "judul": judul,
            "keluhan": keluhan,
            "diagnosa": diagnosa,
            "catatan": catatan,
        }
        return console.log("ini add", addUjilab);
    }
    return (
        <main className="p-4 flex flex-col items-center">
            <Backbutton nama="Catatan janji Temu" />
            <form className="max-w-xl" onSubmit={handleSubmit}>
                <div className="mt-4">
                    <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold">Status</h3>
                    <select value={status} onChange={(e) => setStatus(e.target.value)} name='status' className='px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm'>
                        <option value="false">Belum Mulai</option>
                        <option value="true">Sudah Selesai</option>
                    </select>
                </div>
                <div className="mt-4">
                    <span className="text-xl font-bold">Judul Diskusi</span>
                    <input
                        type="text"
                        value={judul}
                        className="bg-white h-11 w-full border-2 border-black rounded-xl mx-auto mt-2 px-4 text-base text"
                        placeholder="Masukkan Judul" onChange={(e) => setJudul(e.target.value)}
                    />
                </div>
                <div className="mt-4">
                    <span className="text-xl font-bold">Keluhan</span>
                    <textarea value={keluhan} onChange={(e) => setKeluhan(e.target.value)} name="" id="" cols="50" rows="8" className="bg-white w-full border-2 border-black rounded-xl mt-2 px-4 py-2 text-base text-left align-top" placeholder="Masukan Keluhan"></textarea>
                </div>
                <div className="mt-4">
                    <span className="text-xl font-bold">Diagnosa</span>
                    <textarea value={diagnosa} onChange={(e) => setDiagnosa(e.target.value)} name="" id="" cols="50" rows="8" className="bg-white w-full border-2 border-black rounded-xl mt-2 px-4 py-2 text-base text-left align-top" placeholder="Masukan Diagnosa"></textarea>
                </div>
                <div className="mt-4">
                    <span className="text-xl font-bold">Catatan</span>
                    <textarea value={catatan} onChange={(e) => setCatatan(e.target.value)} name="" id="" cols="50" rows="8" className="bg-white w-full border-2 border-black rounded-xl mt-2 px-4 py-2 text-base text-left align-top" placeholder="Masukan Catatan"></textarea>
                </div>
                <div className="mt-48">
                    <button type="submit" className="bg-red-700 rounded-xl font-medium w-full text-lg text-white p-2">
                        Kirim
                    </button>
                </div>
            </form>
        </main>
    )
}
export default CatatanMedis