import axios from "axios";
import { useEffect } from "react"
import { useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Backbutton from "../components/backbutton"

function CatatanMedis() {
    // masukin add booking
    const navigate = useNavigate()
    const [judul, setJudul] = useState("")
    const [keluhan, setKeluhan] = useState("")
    const [diagnosa, setDiagnosa] = useState("")
    const [catatan, setCatatan] = useState("")
    const [status, setStatus] = useState(true)

    const location = useLocation();
    const datatrow= location.state && location.state.data
    const userid = datatrow.User.id
    const { id } = useParams()
    const dokId = localStorage.getItem("userid")
    const token = localStorage.getItem("token")

    const addUjiLab = async (data) => {
        try {
            const response = await axios.post("https://be-skilhealth.up.railway.app/ujilab/add", data,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response.data.message)
            return response.data
        } catch (err) {
            console.error(err)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const addUjilab = {
            "antrian_id": id,
            "user_id": userid,
            "dokter_id":dokId ,
            "judul": judul,
            "keluhan": keluhan,
            "diagnosa": diagnosa,
            "catatan": catatan,
        }
        addUjiLab(addUjilab)
        navigate("/janjipasien")
        
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