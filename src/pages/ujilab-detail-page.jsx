import Backbutton from "../components/backbutton"

function UjilabDetail() {
    return (
        <div className="p-4">
            <Backbutton nama="Informasi Medis" />
            <div className="bg-slate-200 w-full py-6 px-4 rounded-xl">
                <div className="border-b-4 border-slate-300 py-4    ">
                    <div className=" text-sm">Selasa, 05 - 09 - 2023 / 050920230123433</div>
                    <h1 className="text-xl font-bold">Pemeriksaan Fisik Abdomen</h1>
                    <div className="text-sm">Dr. Jaydon Schleifer</div>
                </div>
                <div className="py-4">
                    <div className="mb-4">
                        <h3 className="text-xl font-bold mb-2">Keluhan</h3>
                        <p>
                            Pasien datang dengan keluhan nyeri perut sebelah kanan bawah yang semakin memburuk selama beberapa hari terakhir.
                            Dia juga mengalami mual dan muntah.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Diagnosa</h3>
                        <p>
                            Setelah melakukan pemeriksaan fisik dan beberapa tes tambahan, termasuk USG abdomen, pasien didiagnosis dengan apendisitis akut.
                            Ini adalah peradangan akut pada usus buntu (apendiks) yang memerlukan tindakan bedah segera.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Catatan</h3>
                        <p>
                            Dengan pertimbangan diagnosa apendisitis akut, tindakan bedah apendektomi darurat direkomendasikan untuk pasien ini.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Hasil Uji Lab</h3>
                        <ul className=" list-disc pl-4">
                            <li className=" underline text-red-700"><a href="">Hasil USG abdomen</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default UjilabDetail