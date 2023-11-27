import Backbutton from "../components/backbutton"
import qrcode from "../assets/qrcode.png"

function Pembayaran() {
    const pembayaran ={
        metode : "QRIS",
        kode:"SKILL12313",
        harga:80000.00
    }
    return (
        <div className="p-4 lg:flex lg:flex-col lg:items-center">
            <Backbutton nama="Pembayaran" />
            <div className="flex flex-col w-full max-w-3xl">
                <div className="w-full flex justify-center">
                    <img src={qrcode} alt="" />
                </div>
                <div className="lg:text-center">
                    <div className="mb-4">
                        <h4 className="text-lg font-bold">Metode Pembayaran</h4>
                        <h3 className="text-3xl font-bold">{pembayaran.metode}</h3>
                    </div>
                    <div className="mb-4">
                        <h4 className="text-lg font-bold">Kode Pembayaran</h4>
                        <h3 className="text-3xl font-bold">{pembayaran.kode}</h3>
                    </div>
                    <div className="mb-4">
                        <h4 className="text-lg font-bold">Total Pembayaran</h4>
                        <h3 className="text-3xl font-bold">Rp.{pembayaran.harga.toLocaleString()}</h3>
                    </div>
                </div>
                <button className="bg-red-700 p-4 m-4 text-white text-md rounded-lg">Cek Jadwal</button>
            </div>
        </div>
    )
}
export default Pembayaran