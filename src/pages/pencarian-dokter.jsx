import Backbutton from "../components/backbutton"
function PencarianDokter() {
    const hari = [["Senin", "Monday"], ["Selasa", "Tuesday"], ["Rabu", "Wednesday"], ["Kamis", "Thursday"], ["Jumat", "Friday"], ["Sabtu", "Satuday"], ["Minggu", "Sunday"]]
    const area = ["Jakarta", "Jawa Tengah", "Jawa Barat", "Banten", "Jawa Timur", "Kalimantan"]
    const rs = ["Skilvul Hospital Jakarta", "Skilvul Hospital Bandung", "Skilvul Hospital Surabaya", "Skilvul Hospital Semarang", "Skilvul Hospital Balikpapan"]
    const spesialist = ["Ahli Jantung", "Ahli Kandungan", "Dokter Umum", "Ahli THT"]
    return (
        <div className="p-4">
            <Backbutton nama="Pencarian Dokter" />
            <form className=" mt-4 bg-slate-200 flex flex-col p-4 rounded-xl">
                <input type="text" className="bg-white mb-4 border-2 border-black rounded-lg p-2 px-4 text-base text" placeholder="Cari Dokter" />
                <h3 className="text-lg text-center font-semibold">Pencarian Lanjutan</h3>
                <div className="w-full flex flex-col gap-2 mb-4">
                    <label htmlFor="hari" className="text-lg font-medium">
                        Hari
                    </label>
                    <select name="hari" id="hari" className="bg-white border-2 font-regular border-black rounded-lg p-2 px-4 text-base">
                        <option value="">Pilih hari</option>
                        {
                            hari.map((item,index) => (
                                <option key={index} value={item[1]}>{item[0]}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="w-full flex flex-col gap-2 mb-4">
                    <label htmlFor="area" className="text-lg font-medium">
                        Area
                    </label>
                    <select name="area" id="area" className="bg-white border-2 font-regular border-black rounded-lg p-2 px-4 text-base">
                        <option value="">Pilih Area</option>
                        {
                            area.map((item,index) => (
                                <option key={index} value={item}>{item}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="w-full flex flex-col gap-2 mb-4">
                    <label htmlFor="rs" className="text-lg font-medium">
                        Rumah Sakit
                    </label>
                    <select name="rs" id="rs" className="bg-white border-2 font-regular border-black rounded-lg p-2 px-4 text-base">
                        <option value="">Pilih Rumah Sakit</option>
                        {
                            rs.map((item,index) => (
                                <option key={index} value={item}>{item}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="w-full flex flex-col gap-2 mb-4">
                    <label htmlFor="specialist" className="text-lg font-medium">
                        Specialist
                    </label>
                    <select name="specialist" id="specialist" className="bg-white border-2 font-regular border-black rounded-lg p-2 px-4 text-base">
                        <option value="">Pilih Specialist</option>
                        {
                            spesialist.map((item,index) => (
                                <option key={index} value={item}>{item}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="w-full flex flex-col gap-2 mb-4">
                    <label htmlFor="metode" className="text-lg font-medium">
                        Metode
                    </label>
                    <select name="metode" id="metode" className="bg-white border-2  font-normal border-black rounded-lg p-2 px-4 text-base">
                        <option value="">Pilih Metode</option>
                        <option value="Daring">Daring</option>
                        <option value="Regular">Regular</option>
                        <option value="Homecare">Homecare</option>
                    </select>
                </div>
                <div className="mt-2">
                    <button className="bg-red-700 rounded-xl font-medium w-full text-lg text-white p-2">Cari</button>
                </div>
            </form>
        </div>
    )
}
export default PencarianDokter