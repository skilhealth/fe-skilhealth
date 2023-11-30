import moment from "moment/moment"
import { useNavigate, useParams } from "react-router-dom"
import Backbutton from "../components/backbutton"
import DoctorDetail from "../components/doctor-detail"
import "moment/locale/id"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

function BookingDetailPage() {
    const [dataAntrian, setAntrian] = useState()
    const token = localStorage.getItem("token")
    moment.locale("id")
    const navigate = useNavigate()
    function Kapital(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const Booking = async (id) => {
        try {
            const response = await axios.get(`http://localhost:4000/bookings/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response)
            return response.data.data
        } catch (err) {
            console.error(err)
        }
    }

    const { id } = useParams()
    useEffect(() => {
        const fetchData = async () => {
            const antrianData = await Booking(id);
            setAntrian(antrianData);
        };
        fetchData();
    }, [id]);
    // const { data } = {
    //     data: {
    //         nama: "Dr. Jaydon Schleifer",
    //         status: "Sedang Dirumah Sakit",
    //         spesialis: "Ahli Jantung",
    //         rs: "Skilvul Hospital Jakarta",
    //         keterangan: "Dr. Jaydon Schleifer adalah seorang spesialis jantung berpengalaman dengan lebih dari 15 tahun praktik medis.Saat ini Beliau praktik di skilvul Hospital Jakarta.",
    //         skd: 10297361028361,
    //         pengalaman: ["RSD UNI", "RSU ANU"],
    //         pendidikan: ["Universitas Singaperbangsa Karawang"],
    //         img: "/images/dokter/doctor1.png",
    //         jadwal: {
    //             hari: "Senin",
    //             tgl: moment("2023-12-14").format("DD-MM-YYYY"),
    //             tipe: "Homecare",
    //             harga: 60000
    //         }
    //     }
    // }
    const { data, antrian } = {
        "message": "Antrian Berhasil ditemukan",
        "data": {
            "id": 1,
            "status": true,
            "token": "QL62FE",
            "Dokter": {
                "id": 1,
                "nama": "Dr. Jane Smith",
                "status": true,
                "deskripsi": "Dokter spesialis mata",
                "skd": "987654321",
                "pengalaman": "[\"Rumah Sakit Anu\",\"Rumah Sakit Ani\"]",
                "images": "/images/dokter/doctor1.png",
                "no_tlp": "0881024656367",
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
                "tipe": "reguler",
                "status": false
            }
        },
        "antrian": 0
    }
    const handleEdit = (e) => {
        e.preventDefault()
        navigate("edit")
    }
    const handleRefund = (e) => {
        e.preventDefault()
        navigate("refund")
    }
    const handleIn = (e) => {
        e.preventDefault()
        if (dataAntrian.Jadwal.tipe === "reguler") {
            navigate("reguler");
        }
        if (dataAntrian.Jadwal.tipe === "daring") {
            navigate("daring", { state: { dataAntrian } });
        }
        if (dataAntrian.Jadwal.tipe === "homecare") {
            navigate("homecare", { state: { dataAntrian} });
        }
    }

    const tipe = (data) => {
        if (data.Jadwal.tipe === "reguler") return "bg-green-500 text-white";
        if (data.Jadwal.tipe === "daring") return "bg-yellow-500 text-black";
        return "bg-red-800 text-white"
    }
    if (!dataAntrian) {
        return (
            <div></div>
        )
    }
    return (
        <div className="p-4 lg:px-24 flex flex-col">
            <Backbutton nama="Informasi Jadwal" />
            <div className="flex flex-col lg:flex-row">
                <DoctorDetail data={dataAntrian.Dokter} />
                <div className=" shadow-2xl w-full lg:h-min lg:shadow-none lg:max-w-md lg:border-2 border-slate-500 p-4 rounded-xl">
                    <div className="font-medium pb-4 border-b-4">
                        <div className={`inline p-2 rounded-lg ${tipe(dataAntrian)}`}>{Kapital(dataAntrian.Jadwal.tipe)}</div>
                        <div className="mt-2">{moment(dataAntrian.Jadwal.date).format('dddd')}, {moment(dataAntrian.Jadwal.date).format("DD MMMM yyyy")}</div>
                        <div>{dataAntrian.Dokter.Instansi.nama}</div>
                    </div>
                    <div className="flex flex-col gap-1 mt-4 font-bold">
                        <button onClick={handleIn} className="border-4 border-red-700 bg-red-700 p-2 text-white rounded-xl">Masuk</button>
                        <button onClick={handleEdit} className="border-4 border-red-700 p-2 text-red-700 rounded-xl">Ganti Jadwal</button>
                        <button onClick={handleRefund} className="border-4 border-white p-2 text-red-700 rounded-xl">Batalkan Jadwal</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default BookingDetailPage