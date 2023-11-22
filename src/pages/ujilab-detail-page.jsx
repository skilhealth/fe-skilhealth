import moment from "moment/moment"
import Backbutton from "../components/backbutton"
import 'moment/locale/id'

function UjilabDetail() {
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
            <Backbutton nama="Informasi Medis" />
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
        </div>
    )
}
export default UjilabDetail