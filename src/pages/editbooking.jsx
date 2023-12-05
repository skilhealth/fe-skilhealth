import axios from "axios"
import moment from "moment/moment"
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Backbutton from "../components/backbutton"
import DoctorDetail from "../components/doctor-detail"
import JadwalDokter from "../components/jadwal-dokter"


// route.patch("/:id/edit",editBooking) atau patch booking/:id/edit  // buat edit janji temu ad di halaman editbooking
function Editbooking() {
    const[harga,useHarga] = useState()
    const[jadwal,setIdJadwal] = useState()
    const [dataAntrian, setAntrian] = useState()
    const token = localStorage.getItem("token")
    const navigate = useNavigate()
    moment.locale("id")
    const Booking = async (id) => {
        try {
            const response = await axios.get(`https://be-skilhealth.up.railway.app/bookings/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return response.data.data
        } catch (err) {
            console.error(err)
        }
    }
    const EditBooking = async (data) => {
        try {
            const response = await axios.patch(`https://be-skilhealth.up.railway.app/bookings/${id}/edit`,data, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return response.data.message
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

    const handleEdit = async (e) => {
        e.preventDefault()
        try{
            const JadwalId = {
                jadwal_id:jadwal
            }
            const message = await EditBooking(JadwalId)
            if(message === 'Antrian Berhasil edit'){
                alert(message)
                navigate(-1)
            }else{
                navigate(-1)
            }
        }catch(err){
            console.error(err)
        }
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
    }
    return (
        <div className="p-4">
            <Backbutton nama="Atur Jadwal Kembali" />
            <div className="flex flex-col lg:flex-row">
                <DoctorDetail data={dataAntrian.Dokter} />
                <form className=" max-w-md w-full mt-2 lg:mt-0 lg:p-4 lg:border-2 lg:h-min rounded-lg border-slate-500" onSubmit={handleEdit}>
                    <JadwalDokter jadwal={dataAntrian.Dokter.Jadwals.filter(schdule => schdule.tipe === dataAntrian.Jadwal.tipe)} useharga={(harga) => useHarga(harga)} useidjadwal ={(idJadwal)=>setIdJadwal(idJadwal)} />
                    <div className="flex mt-2 w-full border-slate-100 p-2 justify-between gap-2">
                        <button className="w-full bg-red-700 p-2 rounded-lg text-white " type="submit">Konfirmasi</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Editbooking