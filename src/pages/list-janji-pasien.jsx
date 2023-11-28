import moment from "moment/moment"
import Backbutton from "../components/backbutton"
import PasienCard from "../components/pasien-card"
import "moment"

function ListJanjiPasien() {
    moment.locale("id")
    const data = {
        message: "Hallo",
        pasien: [
            {
                status: "Berlangsung",
                img: "/images/dokter/doctor1.png",
                nama: "Leon Andre",
                tipe: "Regular",
                date:"2023-12-14"
            },
            {
                status: "Berlangsung2",
                img: "/images/dokter/doctor1.png",
                nama: "Leon Andre",
                tipe: "Regular",
                date:"2023-12-14"
            },
            {
                status: "Berlangsung3",
                img: "/images/dokter/doctor1.png",
                nama: "Leon Andre",
                tipe: "Regular",
                date:"2024-12-14"
            },
        ]
    }
    const pasien = data.pasien
    return (
        <div className="p-4 lg:px-24">
            <Backbutton nama="Hasil Pencarian Dokter " />
            <div className="flex flex-col gap-2">
                {
                    pasien === undefined || pasien.length === 0 ? (
                        <div className="w-full h-full flex justify-center items-center">
                            <div className="text-lg font-semibold text-slate-300 absolute top-1/2 -translate-y-1/2">
                                Janji Temu Tidak ada
                            </div>
                        </div>
                    ) : (

                        pasien.map((item, index) => (
                            <PasienCard data={item}/>
                            // console.log(item)
                        ))
                    )

                }

            </div>
        </div>
    )
}
export default ListJanjiPasien