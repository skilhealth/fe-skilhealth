import Backbutton from "../components/backbutton"
import qrcode from "../assets/qrcode.png"
import { Link, useLocation } from "react-router-dom"

function Pembayaran() {
    const location = useLocation()
    const payment = location.state && location.state.via;
    const harga = location.state && location.state.harga;
    function generateRandomKode() {
        const randomString = Math.random().toString(36).substring(6, 10);
        return "skill" + randomString;
    }

    return (
        <div className="p-4 lg:flex lg:flex-col lg:items-center w-full">
            <Backbutton nama="Pembayaran" />
            <div className="flex flex-col w-full max-w-3xl">
                <div className="w-full flex justify-center">
                    <img src={qrcode} alt="" />
                </div>
                <div className="text-center">
                    <div className="mb-4">
                        <h4 className="text-lg font-bold">Metode Pembayaran</h4>
                        <h3 className="text-3xl font-bold">{payment}</h3>
                    </div>
                    <div className="mb-4">
                        <h4 className="text-lg font-bold">Kode Pembayaran</h4>
                        <h3 className="text-3xl font-bold">{generateRandomKode()}</h3>
                    </div>
                    <div className="mb-4">
                        <h4 className="text-lg font-bold">Total Pembayaran</h4>
                        <h3 className="text-3xl font-bold">Rp.{harga.toLocaleString()}</h3>
                    </div>
                </div>
                <Link to="/booking" className="w-full">
                    <button className="bg-red-700 p-4 my-4 text-white text-md rounded-lg w-full hover:opacity-70 transition duration-200">Cek Jadwal</button>
                </Link>
            </div>
        </div>
    )
}
export default Pembayaran