import Backbutton from "../components/backbutton"

function CatatanMedis() {
    return (
        <main className="p-4 flex flex-col items-center">
            <Backbutton nama="Catatan janji Temu" />
            <div className="max-w-xl">
                <div className="mt-4">
                    <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold">Status</h3>
                    <select value="" onChange={(e) => setGender(e.target.value)} name='status' className='px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm'>
                        <option value="Belum Mulai">Belum Mulai</option>
                        <option value="Sudah Selesai">Sudah Selesai</option>
                    </select>
                </div>
                <div className="mt-4">
                    <span className="text-xl font-bold">Judul Diskusi</span>
                    <input
                        type="text"
                        className="bg-white h-11 w-full border-2 border-black rounded-xl mx-auto mt-2 px-4 text-base text"
                        placeholder="Masukkan Judul"
                    />
                </div>
                <div className="mt-4">
                    <span className="text-xl font-bold">Keluhan</span>
                    <textarea name="" id="" cols="50" rows="8" className="bg-white w-full border-2 border-black rounded-xl mt-2 px-4 py-2 text-base text-left align-top" placeholder="Masukan Keluhan"></textarea>
                </div>
                <div className="mt-4">
                    <span className="text-xl font-bold">Diagnosa</span>
                    <textarea name="" id="" cols="50" rows="8" className="bg-white w-full border-2 border-black rounded-xl mt-2 px-4 py-2 text-base text-left align-top" placeholder="Masukan Diagnosa"></textarea>
                </div>
                <div className="mt-4">
                    <span className="text-xl font-bold">Catatan</span>
                    <textarea name="" id="" cols="50" rows="8" className="bg-white w-full border-2 border-black rounded-xl mt-2 px-4 py-2 text-base text-left align-top" placeholder="Masukan Catatan"></textarea>
                </div>
                <div className="mt-4">
                    <span className="text-xl font-bold">Upload Berkas</span>
                    <input
                        type="file"
                        className="bg-white h-11 w-full border-2 border-black px-4 text-base text"
                    multiple />
                </div>
                <div className="mt-48">
                    <button className="bg-red-700 rounded-xl font-medium w-full text-lg text-white p-2">
                        Kirim
                    </button>
                </div>
            </div>
        </main>
    )
}
export default CatatanMedis