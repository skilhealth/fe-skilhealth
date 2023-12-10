import axios from "axios"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import Backbutton from "../components/backbutton"
import { useState } from "react"

function Refund() {
    const { id } = useParams()
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const [reasonMessage, setReasonMessage] = useState('')
    const [accountMessage, setAccountMessage] = useState('')
    const refund = async () => {
        try {
            const response = await axios.delete(`https://be-skilhealth.up.railway.app/bookings/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return response.data.message
        } catch (err) {
            console.error(err)
        }
    }
    const handleRefund = async (e) => {
        e.preventDefault();

        // Memeriksa apakah alasan pembatalan telah dipilih
        const reason = e.target.elements.reason.value;
        if (!reason) {
            setReasonMessage("Pilih alasan pembatalan");
            return;
        }

        // Memeriksa apakah nomor rekening telah diisi
        const accountNumber = e.target.elements.accountNumber.value;
        if (!accountNumber) {
            setAccountMessage("Masukkan nomor rekening terlebih dahulu");
            return;
        }

        try {
            const message = await refund();

            if (message === 'Antrian Berhasil refund') {
                navigate("/");
                alert(message);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
         <div className="p-4 flex flex-col items-center">
            <Backbutton nama="Batalkan Jadwal" />
            <form className="bg-slate-200 w-full p-4 rounded-lg max-w-2xl" onSubmit={handleRefund}>
            <div className="text-lg mb-4">
                    <div className="font-bold">Alasan Pembatalan</div>
                    <select name="reason" id="reason" className="w-full p-2 border-2 rounded-lg border-black">
                        <option value="">Pilih Alasan Pembatalan</option>
                        <option value={1}>Urgensi Pekerjaan/Bisnis</option>
                        <option value={2}>Kendala Transportasi</option>
                        <option value={3}>Cuaca/Bencana Alam</option>
                        <option value={4}>Keadaan Darurat Keluarga</option>
                        <option value={5}>Keterbatasan Keuangan</option>
                    </select>
                    {reasonMessage && <span className="text-red-500">{reasonMessage}</span>}
                </div>
                
                <div className="text-lg mb-4">
                    <div className="font-bold">Nomor Rekening Bank</div>
                    <input name="accountNumber" id="accountNumber" className="w-full p-2 border-2 rounded-lg border-black" placeholder="Masukan Nomor Rekening" />
                    {accountMessage && <span className="text-red-500">{accountMessage}</span>}
                </div>
                
                <div className="w-full p-4">
                    <button type="submit" className="w-full bg-red-700 text-white p-2 rounded-lg hover:opacity-70 transition duration-200">Konfirmasi</button>
                </div>
            </form>
        </div>
    )
}
export default Refund