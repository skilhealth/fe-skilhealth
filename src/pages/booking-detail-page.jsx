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
    const navigate = useNavigate()
    moment.locale("id")
    function Kapital(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const Booking = async (id) => {
        try {
            const response = await axios.get(`https://be-skilhealth.up.railway.app/bookings/${id}`, {
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
            <div className="p-4 lg:px-24 flex flex-col w-full items-center">
                <div className="text-center text:lg lg:text-4xl font-semibold text-slate-400 absolute top-1/2 -translate-y-1/2">
                    Loading
                </div>
            </div>
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