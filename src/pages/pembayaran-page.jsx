import Backbutton from "../components/backbutton"
import qrcode from "../assets/qrcode.png"

function Pembayaran() {
    return (
        <div className="p-4">
            <Backbutton nama="Pembayaran" />
            <div className="flex flex-col w-full">
                <div className="w-full flex justify-center">
                    <img src={qrcode} alt="" />
                </div>
                <div>
                    <div className="mb-4">
                        <h4 className="text-lg font-bold">Metode Pembayaran</h4>
                        <h3 className="text-3xl font-black">QRIS</h3>
                    </div>
                    <div className="mb-4">
                        <h4 className="text-lg font-bold">Kode Pembayaran</h4>
                        <h3 className="text-3xl font-black">SKILL675X67</h3>
                    </div>
                    <div className="mb-4">
                        <h4 className="text-lg font-bold">Total Pembayaran</h4>
                        <h3 className="text-3xl font-black">Rp.83.500</h3>
                    </div>
                </div>
                <button className="bg-red-700 p-4 m-4 text-white text-md rounded-lg">Cek Jadwal</button>
            </div>
        </div>
    )
}
export default Pembayaran