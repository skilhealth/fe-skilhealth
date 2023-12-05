import Backbutton from "../components/backbutton"
import UjiLabCard from "../components/ujilab-card"
import 'moment/locale/id'
import moment from "moment/moment"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"
import { useContext } from "react"
import { userContext } from "../context/user-provider"
import { useNavigate } from "react-router-dom"
// get ujilab by user id
function ListUjiLab() {
    const {isLogin} = useContext(userContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (!isLogin) {
            navigate("/login")
        }
    }, [isLogin])
    const [listuji, setUji] = useState(null)
    const id = localStorage.getItem("userid")
    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role")
    moment.locale('id')
    const Uji = async () => {
        try {
            const response = await axios.get(`https://be-skilhealth.up.railway.app/ujilab?user=${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return response.data.data
        } catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        const fetchData = async (id) => {
            const listuji = await Uji(id);
            setUji(listuji)
        }
        fetchData(id)
    }, [])
    const { data } = {
        "message": "Menampilkan Ujilab",
        "data": [
            {
                "id": 2,
                "antrian_id": 2,
                "user_id": 1,
                "dokter_id": 2,
                "judul": "Jantung Berdebar debar",
                "keluhan": "Pasien datang dengan keluhan nyeri perut sebelah kanan bawah yang semakin memburuk selama beberapa hari terakhir Dia juga mengalami mual dan muntah.",
                "diagnosa": "Setelah melakukan pemeriksaan fisik dan beberapa tes tambahan, termasuk USG abdomen, pasien didiagnosis dengan apendisitis akut.Ini adalah peradangan akut pada usus buntu (apendiks) yang memerlukan tindakan bedah segera",
                "catatan": "Dengan pertimbangan diagnosa apendisitis akut, tindakan bedah apendektomi darurat direkomendasikan untuk pasien ini.",
                "dokumen": "[\"Hasil USG abdomen\"]",
                "createdAt": "2023-11-29T04:18:40.000Z",
                "Dokter": {
                    "id": 2,
                    "nama": "Dr. Janes Smith"
                }
            },
            {
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
        ]
    }
    if(!listuji)return(
        <div className="p-4 lg:px-24">
                <Backbutton nama="Janji pasien " />
                <div className="flex flex-col gap-2">
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="text-lg font-semibold text-slate-300 absolute top-1/2 -translate-y-1/2">
                            Tidak ada Hasil Uji Lab
                        </div>
                    </div>
                </div>
            </div>
    );
    return (
        <div className="p-4 flex flex-col lg:px-24 items-center">
            <Backbutton nama="Rekam Medis" />
            <div className="flex flex-col max-w-5xl w-full">
                <h3 className="text-2xl font-bold mb-4">Riwayat Rekam Medis</h3>
                {
                    listuji.map((item,index) => (
                        <UjiLabCard key={index} data={item} />
                    ))
                }
            </div>

        </div>
    )
}
export default ListUjiLab