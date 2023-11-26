import moment from "moment/moment"
import Backbutton from "../components/backbutton"
import 'moment/locale/id'

function HasilUjiLab() {
    moment.locale('id')
    const data = {
        date: moment("2023-09-05"),
        nama: "Pemeriksaan Fisik Abdomen",
        dokter: "Dr. Jaydon Schleifer",
        ujiid: "050920230123433",
        keluhan: "Pasien datang dengan keluhan nyeri perut sebelah kanan bawah yang semakin memburuk selama beberapa hari terakhir Dia juga mengalami mual dan muntah.",
        diagnosa: "Setelah melakukan pemeriksaan fisik dan beberapa tes tambahan, termasuk USG abdomen, pasien didiagnosis dengan apendisitis akut.Ini adalah peradangan akut pada usus buntu (apendiks) yang memerlukan tindakan bedah segera",
        catatan: "Dengan pertimbangan diagnosa apendisitis akut, tindakan bedah apendektomi darurat direkomendasikan untuk pasien ini.",
        dokumen: ["Hasil USG abdomen"]
    }
    return (
        <div className="p-4 lg:px-24 flex flex-col items-center">
            <Backbutton nama="Catatan Medis" />
            <div className="w-full mb-4 max-w-5xl">
                <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold">Status Janji Temu</h3>
                <select value="" onChange={(e) => setGender(e.target.value)} name='status' className='px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm'>
                    <option value="Belum Mulai">Belum Mulai</option>
                    <option value="Sudah Selesai">Sudah Selesai</option>
                </select>
            </div>
            <div className="bg-slate-200 w-full py-6 px-4 rounded-xl max-w-5xl">
                <div className="border-b-4 border-slate-300 py-4    ">
                    <div className=" text-sm lg:text-base">{`Hari ${data.date.format('dddd')}, ${data.date.format('DD-MM-YYYY')} / ${data.ujiid}`}</div>
                    <h1 className="text-xl lg:text-2xl font-bold">{data.nama}</h1>
                    <div className="text-sm lg:text-base">{data.dokter}</div>
                </div>
                <div className="py-4">
                    <div className="mb-4">
                        <h3 className="text-xl lg:text-2xl  font-bold mb-2">Keluhan</h3>
                        <p className="lg:text-lg">
                            {data.keluhan}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl lg:text-2xl font-bold mb-2">Diagnosa</h3>
                        <p className="lg:text-lg">
                            {data.diagnosa}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl lg:text-2xl font-bold mb-2">Catatan</h3>
                        <p className="lg:text-lg">
                            {data.catatan}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Hasil Uji Lab</h3>
                        <ul className=" list-disc pl-4">
                            {data.dokumen.map((item) => (
                                <li className=" underline text-red-700"><a href="">{item}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="mt-8 w-full max-w-5xl">
                <button className="bg-red-700 rounded-xl font-medium w-full text-lg text-white p-2">
                    Edit
                </button>
            </div>
        </div>
    )
}
export default HasilUjiLab