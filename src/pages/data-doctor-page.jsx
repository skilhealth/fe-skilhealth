import Backbutton from "../components/backbutton"
import DoctorDetail from "../components/doctor-detail"
import JadwalDokter from "../components/jadwal-dokter"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"
function DataDokter() {
    const navigate = useNavigate()
    const idUser = localStorage.getItem("userid")
    const token = localStorage.getItem("token")
    const [dataDokter, setDataDokter] = useState()
    const [idJadwal, setIdJadwal] = useState()
    const [harga, useHarga] = useState(0)
    const [Payment, setPayment] = useState('');
    // ini pake get doctor/:id

    const handlePayment = (event) => {
        setPayment(event.target.value);
    };
    const Doctor = async (id) => {
        try {
            const response = await axios.get(`http://localhost:4000/doctors/${id}`)
            console.log(response.data.data)
            return response.data.data
        } catch (err) {
            console.error(err)
        }
    }
    const { id } = useParams()
    useEffect(() => {
        const fetchData = async () => {
            const doctorData = await Doctor(id);
            setDataDokter(doctorData);
        };
        fetchData();
    }, [id]);
    const handleBooking = async (e) => {
        e.preventDefault()
        const newBooking = {
            doctor_id: dataDokter.id,
            user_id: +idUser,
            jadwal_id: idJadwal,
            keterangan: ""
        }
        console.log(newBooking)
        console.log(Payment)
        const addBooking = async (newBooking) => {
            const response = await axios.post("http://localhost:4000/bookings", newBooking, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response.data.message)
        }
        await addBooking(newBooking)
        navigate("/booking/pembayaran", { state: { via: Payment, harga: harga }, })
    }
    if (!dataDokter) {
        return <div>Mengambil data dokter...</div>;
    }
    const { Jadwals } = dataDokter
    return (
        <div className="p-4 flex flex-col lg:px-24">
            <Backbutton nama="Informasi Jadwal" />
            <div className="flex flex-col lg:flex-row">
                <DoctorDetail data={dataDokter} />
                <form className="flex-1 mt-2 lg:mt-0 lg:p-4 lg:border-2 lg:h-min rounded-lg border-slate-500" onSubmit={handleBooking}>
                    <JadwalDokter jadwal={Jadwals} useharga={(harga) => useHarga(harga)} useidjadwal={(idJadwal) => setIdJadwal(idJadwal)} />
                    <div className="flex lg:block border-2 mt-2 w-full shadow-lg lg:shadow-none lg:border-0 border-slate-100 p-2 justify-between gap-2">
                        <div className="grow">
                            <select value={Payment} onChange={handlePayment} name="pembayaran" id="" className="w-full border-2 border-black rounded-md pl-2">
                                <option value="">Pilih Metode Pembayaran</option>
                                <option value="QRIS">QRIS</option>
                                <option value="Bank & Kredit">Bank & Kredit</option>
                                <option value="Alfamaret">Alfamaret</option>
                            </select>
                            <h3 className="text-4xl font-semibold">Rp.{harga.toLocaleString()}</h3>
                            <p>Include Fax*</p>
                        </div>
                        <button type="submit" className="h-full aspect-square lg:w-full lg:h-auto lg:aspect-auto lg:mt-4 bg-red-700 p-2 rounded-2xl text-white ">Konfirmasi</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default DataDokter