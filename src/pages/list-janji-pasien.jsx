import moment from "moment/moment"
import Backbutton from "../components/backbutton"
import PasienCard from "../components/pasien-card"
import "moment"

function ListJanjiPasien() {
    moment.locale("id")
    const { data } = {
        "message": "Menampilkan Antrian",
        "data": [
            {
                "id": 1,
                "status": false,
                "User": {
                    "id": 1,
                    "nama": "Virgiawan Sanria",
                    "images": "url_gambar"
                },
                "Jadwal": {
                    "date": "2023-11-25T00:00:00.000Z",
                    "tipe": "daring"
                },
                "ujilab": {
                    "id": 1
                }
            },
            {
                "id": 1,
                "status": false,
                "User": {
                    "id": 1,
                    "nama": "Virgiawan Sanria",
                    "images": "url_gambar"
                },
                "Jadwal": {
                    "date": "2023-11-25T00:00:00.000Z",
                    "tipe": "daring"
                },
                "ujilab": {
                    "id": 3
                }
            },
            {
                "id": 2,
                "status": false,
                "User": {
                    "id": 1,
                    "nama": "Virgiawan Sanria",
                    "images": "url_gambar"
                },
                "Jadwal": {
                    "date": "2023-11-26T00:00:00.000Z",
                    "tipe": "reguler"
                },
                "ujilab": {
                    "id": 2
                }
            },
            {
                "id": 3,
                "status": false,
                "User": {
                    "id": 1,
                    "nama": "Virgiawan Sanria",
                    "images": "url_gambar"
                },
                "Jadwal": {
                    "date": "2023-11-27T00:00:00.000Z",
                    "tipe": "reguler"
                },
                "ujilab": null
            }
        ]
    }
    return (
        <div className="p-4 lg:px-24">
            <Backbutton nama="Janji pasien " />
            <div className="flex flex-col gap-2">
                {
                    data === undefined || data.length === 0 ? (
                        <div className="w-full h-full flex justify-center items-center">
                            <div className="text-lg font-semibold text-slate-300 absolute top-1/2 -translate-y-1/2">
                                Janji Temu Tidak ada
                            </div>
                        </div>
                    ) : (

                        data.map((item, index) => (
                            <PasienCard data={item} />
                        ))
                    )

                }

            </div>
        </div>
    )
}
export default ListJanjiPasien