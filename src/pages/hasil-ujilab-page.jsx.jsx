import moment from "moment/moment"
import Backbutton from "../components/backbutton"
import 'moment/locale/id'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function HasilUjiLab() {
    moment.locale('id')
    const { data } = {
        "message": "Antrian Berhasil ditemukan",
        "data": {
            "id": 1,
            "status": false,
            "token": "QL62FE",
            "User": {
                "id": 1,
                "nama": "Virgiawan Sanria"
            },
            "Dokter": {
                "id": 1,
                "nama": "Dr. Jane Smith",
                "status": false,
                "deskripsi": "Dokter spesialis mata",
                "skd": "987654321",
                "pengalaman": "[\"Rumah Sakit Anu\",\"Rumah Sakit Ani\"]",
                "images": "url_gambar_dokter",
                "no_tlp": "081234567891",
                "pendidikan": "[\"Universitas XYZ\",\"Universitas ABC\"]",
                "Instansi": {
                    "nama": "Skilvul Hospital Jakarta"
                },
                "Spesiali": {
                    "nama": "Ahli Jantung"
                },
                "Jadwals": [
                    {
                        "id": 1,
                        "date": "2023-11-25T00:00:00.000Z",
                        "tipe": "daring",
                        "status": true
                    },
                    {
                        "id": 2,
                        "date": "2023-11-26T00:00:00.000Z",
                        "tipe": "reguler",
                        "status": true
                    },
                    {
                        "id": 3,
                        "date": "2023-11-27T00:00:00.000Z",
                        "tipe": "reguler",
                        "status": true
                    },
                    {
                        "id": 4,
                        "date": "2023-11-28T00:00:00.000Z",
                        "tipe": "reguler",
                        "status": true
                    }
                ]
            },
            "Jadwal": {
                "id": 1,
                "date": "2023-11-25T00:00:00.000Z",
                "tipe": "daring",
                "status": true
            },
            "ujilab": {
                "id": 3,
                "judul": "Jantung Berdebar debar",
                "keluhan": "Pasien datang dengan keluhan nyeri perut sebelah kanan bawah yang semakin memburuk selama beberapa hari terakhir Dia juga mengalami mual dan muntah.",
                "diagnosa": "Setelah melakukan pemeriksaan fisik dan beberapa tes tambahan, termasuk USG abdomen, pasien didiagnosis dengan apendisitis akut.Ini adalah peradangan akut pada usus buntu (apendiks) yang memerlukan tindakan bedah segera",
                "catatan": "Dengan pertimbangan diagnosa apendisitis akut, tindakan bedah apendektomi darurat direkomendasikan untuk pasien ini.",
                "dokumen": "[\"Hasil USG abdomen\"]",
                "createdAt": "2023-11-29T04:18:50.000Z"
            }
        },
        "antrian": {
            "sisa": 0,
            "ke": 1
        }
    }
    const navigate = useNavigate()
    const [status, setStatus] = useState(data.status)
    useEffect(() => {
        console.log(status)
    }, [status])
    const handleEdit = (e) => {
        e.preventDefault()
        navigate(`edit`)
    }


    // const data = {
    //     date: moment("2023-09-05"),
    //     nama: "Pemeriksaan Fisik Abdomen",
    //     dokter: "Dr. Jaydon Schleifer",
    //     ujiid: "050920230123433",
    //     keluhan: "Pasien datang dengan keluhan nyeri perut sebelah kanan bawah yang semakin memburuk selama beberapa hari terakhir Dia juga mengalami mual dan muntah.",
    //     diagnosa: "Setelah melakukan pemeriksaan fisik dan beberapa tes tambahan, termasuk USG abdomen, pasien didiagnosis dengan apendisitis akut.Ini adalah peradangan akut pada usus buntu (apendiks) yang memerlukan tindakan bedah segera",
    //     catatan: "Dengan pertimbangan diagnosa apendisitis akut, tindakan bedah apendektomi darurat direkomendasikan untuk pasien ini.",
    //     dokumen: ["Hasil USG abdomen"]
    // }
    const dokumen = JSON.parse(data.ujilab.dokumen)
    return (
        <div className="p-4 lg:px-24 flex flex-col items-center">
            <Backbutton nama="Catatan Medis" />
            <div className="w-full mb-4 max-w-5xl">
                <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold">Status Janji Temu</h3>
                <select value={status} onChange={(e) => setStatus(e.target.value)} name='status' className='px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm'>
                    <option value="false">Belum Mulai</option>
                    <option value="true">Sudah Selesai</option>
                </select>
            </div>
            <div className="bg-slate-200 w-full py-6 px-4 rounded-xl max-w-5xl">
                <div className="border-b-4 border-slate-300 py-4    ">
                    <div className=" text-sm lg:text-base">{`Hari ${moment(data.ujilab.createdAt).format('dddd')}, ${moment(data.ujilab.createdAt).format('DD-MM-YYYY')} / ${data.ujilab.id}`}</div>
                    <h1 className="text-xl lg:text-2xl font-bold">{data.ujilab.judul}</h1>
                    <div className="text-sm lg:text-base">{data.User.nama}</div>
                </div>
                <div className="py-4">
                    <div className="mb-4">
                        <h3 className="text-xl lg:text-2xl  font-bold mb-2">Keluhan</h3>
                        <p className="lg:text-lg">
                            {data.ujilab.keluhan}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl lg:text-2xl font-bold mb-2">Diagnosa</h3>
                        <p className="lg:text-lg">
                            {data.ujilab.diagnosa}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl lg:text-2xl font-bold mb-2">Catatan</h3>
                        <p className="lg:text-lg">
                            {data.ujilab.catatan}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Hasil Uji Lab</h3>
                        <ul className=" list-disc pl-4">
                            {dokumen.map((item) => (
                                <li className=" underline text-red-700"><a href="">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-8 w-full max-w-5xl">
                <button onClick={handleEdit} className="bg-red-700 rounded-xl font-medium w-full text-lg text-white p-2">
                    Edit
                </button>
            </div>
        </div>
    )
}
export default HasilUjiLab