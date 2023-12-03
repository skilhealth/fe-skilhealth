import axios from "axios"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import Backbutton from "../components/backbutton"

function Refund() {
    const { id } = useParams()
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const refund = async () => {
        try {
            const response = await axios.delete(`https://be-skilhealth.up.railway.app/bookings/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response)
            return response.data.message
        } catch (err) {
            console.error(err)
        }
    }
    const handleRefund =  async (e) =>{
        e.preventDefault()
        try{
            const message = await refund()
            if(message === 'Antrian Berhasil refund'){
                alert(message)
                navigate("/")
            }
        }catch(err){
            console.error(err)
        }
    }
    return (
        <div className="p-4 flex flex-col items-center">
            <Backbutton nama="Batalkan Jadwal" />
            <form className="bg-slate-200 w-full p-4 rounded-lg max-w-2xl" onSubmit={handleRefund}>
                <div className="text-lg mb-4">
                    <div className="font-bold">Alasan Pembatalan</div>
                    <select name="" id="" className="w-full p-2 border-2 rounded-lg border-black">
                        <option value="">Pilih Alasan Pembatalan</option>
                        <option value={1}>Urgensi Pekerjaan/Bisnis</option>
                        <option value={2}>Kendala Transportasi</option>
                        <option value={3}>Cuaca/Bencana Alam</option>
                        <option value={4}>Keadaan Darurat Keluarga</option>
                        <option value={5}>Keterbatasan Keuangan</option>
                    </select>
                </div>
                <div className="text-lg mb-4">
                    <div className="font-bold">Nomor Rekening Bank</div>
                    <input name="" id="" className="w-full p-2 border-2 rounded-lg border-black" placeholder="Masukan Nomor Rekening" />
                </div>
                <div className="w-full p-4">
                    <button type="submit" className="w-full bg-red-700 text-white p-2 rounded-lg">Konfirmasi</button>
                </div>
            </form>
        </div>
    )
}
export default Refund