import Backbutton from "../components/backbutton"
import qrcode from "../assets/qrcode.png"
import CheckInDetail from "../components/checkin-detail"
import CheckInCard from "../components/checkin-card"
import moment from "moment/moment"
import { useLocation } from "react-router-dom"

function CheckIn() {
    const {data,antrian} = {
        "message": "Antrian Berhasil ditemukan",
        "data": {
            "id": 1,
            "status": false,
            "token": "QL62FE",
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
                        "date": "2023-11-25T00:00:00.000Z",
                        "tipe": "daring",
                        "status": true
                    },
                    {
                        "date": "2023-11-26T00:00:00.000Z",
                        "tipe": "reguler",
                        "status": true
                    },
                    {
                        "date": "2023-11-27T00:00:00.000Z",
                        "tipe": "reguler",
                        "status": true
                    },
                    {
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
            }
        },
        "antrian": {
            "sisa": 0,
            "ke": 1
        }
    }
    return (
        <div className="p-4 lg:py-10 flex flex-col items-center">
            <Backbutton nama="Check In dan Antrian" />
            <div className="flex flex-col w-full lg:flex-row lg:border-2 lg:rounded-xl border-slate-500 lg:max-w-4xl lg:p-4">
                <div className="w-full flex justify-center lg:w-auto lg:flex-2">
                    <img src={qrcode} alt="" className="lg:h-[480px]" />
                </div>
                <div className="lg:flex-1 lg:flex lg:flex-col-reverse lg:justify-end lg:py-8">
                    <CheckInDetail antrian={antrian} token={data.token} tgl={moment(data.Jadwal.date)} />
                    <CheckInCard data={data.Dokter} />
                </div>
            </div>
        </div>
    )
}
export default CheckIn