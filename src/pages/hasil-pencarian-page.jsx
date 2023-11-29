import { useLocation } from "react-router-dom"
import Backbutton from "../components/backbutton"
import DoctorCard from "../components/doctor-card"
function HasilCariPage() {
    const location = useLocation()
    const filterdata = location.state && location.state.SearchDoc
    console.log(filterdata)
// pake post doctor/search

    const {data} =
    {
        "message": "Dokter Berhasil ditemukan",
        "data": [
            {
                "dokter_id": 1,
                "Dokter": {
                    "nama": "Dr. Jane Smith",
                    "id": 1,
                    "status": false,
                    "images": "/images/dokter/doctor1.png",
                    "Instansi": {
                        "nama": "Skilvul Hospital Jakarta"
                    },
                    "Spesiali": {
                        "nama": "Ahli Jantung"
                    }
                }
            }
        ]
    }

    // const data = {
    //     message: "Hallo",
    //     dokters: [
    //         {
    //             status: "Sedang Dirumah Sakit",
    //             img: "/images/dokter/doctor1.png",
    //             nama: "Dr. Jaydon Schleifer",
    //             spesialis: "Ahli Jantung",
    //             rs: "Skilvul Hospital jakarta"
    //         },
    //         {
    //             status: "Sedang Libur",
    //             img: "/images/dokter/doctor1.png",
    //             nama: "Dr. Zain Mango",
    //             spesialis: "Ahli Jantung",
    //             rs: "Skilvul Hospital Surabaya"
    //         },
    //     ]
    // }
    return (
        <div className="p-4">
            <Backbutton nama="Hasil Pencarian Dokter " />
            <div className="flex flex-col gap-2">
                {
                    data === undefined || data.length === 0 ? (
                        <div className="w-full h-full flex justify-center items-center">
                            <div className="text-lg font-semibold text-slate-300 absolute top-1/2 -translate-y-1/2">
                                Dokter Tidak Ditemukan
                            </div>
                        </div>
                    ) : (
                        data.map((item, index) => (
                            <DoctorCard key={index} data={item} />
                        ))
                    )

                }

            </div>
        </div>
    )
}
export default HasilCariPage