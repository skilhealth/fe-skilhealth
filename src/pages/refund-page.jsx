import Backbutton from "../components/backbutton"

function Refund(){
    return(
        <div className="p-4 flex flex-col items-center">
            <Backbutton nama="Batalkan Jadwal" />
            <form className="bg-slate-200 w-full p-4 rounded-lg max-w-2xl">
                <div className="text-lg mb-4">
                    <div className="font-bold">Alasan Pembatalan</div>
                    <select name="" id="" className="w-full p-2 border-2 rounded-lg border-black">
                        <option value="">Pilih Alasan Pembatalan</option>
                    </select>
                </div>
                <div className="text-lg mb-4">
                    <div className="font-bold">Nomor Rekening Bank</div>
                    <input name="" id="" className="w-full p-2 border-2 rounded-lg border-black" placeholder="Masukan Nomor Rekening" />
                </div>
                <div className="w-full p-4">
                    <button className="w-full bg-red-700 text-white p-2 rounded-lg">Konfirmasi</button>
                </div>
            </form>
        </div>
    )
}
export default Refund