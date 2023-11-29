import Backbutton from "../components/backbutton"
import UjiLabCard from "../components/ujilab-card"
import 'moment/locale/id'
import moment from "moment/moment"
// get ujilab by user id
function ListUjiLab() {
    moment.locale('id')
    const {data} = {
        "message": "Menampilkan Ujilab",
        "data": [
            {
                "id": 2,
                "antrian_id": 2,
                "user_id": 1,
                "dokter_id": 2,
                "judul": "Jantung Berdebar debar",
                "keluhan": "Pasien datang dengan keluhan nyeri perut sebelah kanan bawah yang semakin memburuk selama beberapa hari terakhir Dia juga mengalami mual dan muntah.",
                "diagnosa": "Setelah melakukan pemeriksaan fisik dan beberapa tes tambahan, termasuk USG abdomen, pasien didiagnosis dengan apendisitis akut.Ini adalah peradangan akut pada usus buntu (apendiks) yang memerlukan tindakan bedah segera",
                "catatan": "Dengan pertimbangan diagnosa apendisitis akut, tindakan bedah apendektomi darurat direkomendasikan untuk pasien ini.",
                "dokumen": "[\"Hasil USG abdomen\"]",
                "createdAt": "2023-11-29T04:18:40.000Z",
                "Dokter": {
                    "id": 2,
                    "nama": "Dr. Janes Smith"
                }
            },
            {
                "id": 1,
                "antrian_id": 1,
                "user_id": 1,
                "dokter_id": 1,
                "judul": "Jantung Berdebar debar",
                "keluhan": "Pasien datang dengan keluhan nyeri perut sebelah kanan bawah yang semakin memburuk selama beberapa hari terakhir Dia juga mengalami mual dan muntah.",
                "diagnosa": "Setelah melakukan pemeriksaan fisik dan beberapa tes tambahan, termasuk USG abdomen, pasien didiagnosis dengan apendisitis akut.Ini adalah peradangan akut pada usus buntu (apendiks) yang memerlukan tindakan bedah segera",
                "catatan": "Dengan pertimbangan diagnosa apendisitis akut, tindakan bedah apendektomi darurat direkomendasikan untuk pasien ini.",
                "dokumen": "[\"Hasil USG abdomen\"]",
                "createdAt": "2023-11-29T04:18:07.000Z",
                "Dokter": {
                    "id": 1,
                    "nama": "Dr. Jane Smith"
                }
            }
        ]
    }
    return (
        <div className="p-4 flex flex-col lg:px-24 items-center">
            <Backbutton nama="Rekam Medis" />
            <div className="flex flex-col max-w-5xl w-full">
                <form action="" className="w-full mb-4">
                    <input className="border-2 w-full text-lg rounded-lg p-4 border-black" type="text" name="" id="" placeholder="Cari Nomor Rekam Medis" />
                </form>
                <h3 className="text-2xl font-bold mb-4">Riwayat Rekam Medis</h3>
                {
                    data.map((item) => (
                        <UjiLabCard data={item} />
                    ))
                }
            </div>

        </div>
    )
}
export default ListUjiLab