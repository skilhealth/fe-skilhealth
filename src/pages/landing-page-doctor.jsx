import listSvg from "/src/assets/list-janji.svg"
import TotalSvg from "/src/assets/total-pasien.svg"
import FooterLanding from "../components/footer"
import ForumCard from "../components/forum-card"
import { Link } from "react-router-dom"
import PasienLanding from "../components/pasien-landing"

function LandingPageDoctor({role}) {
    const data = [{
        status: "Belum Terjawab",
        user: "fulan",
        judul: "Mata Kiri Sakit"
    }, {
        status: "Belum Terjawab",
        user: "fuad",
        judul: "Mata Kanan Sakit"
    },
    {
        status: "Belum Terjawab",
        user: "fuad",
        judul: "Mata Kanan Sakit"
    },
    ]
    const akun = {
        nama: "Dr. Jaydon  Scheleifer",
        spesialis: "Ahli Jantung",
        antrian: 8,
        total_pasien: 243,
        role: role
    }
    const pasien = [
        {
            status: "Belum Mulai",
            img: "/images/dokter/doctor1.png",
            nama: "Leon Andre",
            tipe: "Regular",
            date: "2024-12-14"
        },
        {
            status: "Belum Mulai",
            img: "/images/dokter/doctor1.png",
            nama: "Leon Andre",
            tipe: "Regular",
            date: "2024-12-14"
        },
        {
            status: "Belum Mulai",
            img: "/images/dokter/doctor1.png",
            nama: "Leon Andre",
            tipe: "Regular",
            date: "2024-12-14"
        },

    ]
    return (
        <div className=" bg-slate-100">
            <div className="p-4 lg:px-24">
                <div className="w-full flex flex-col lg:flex-row gap-2">
                    <Link to="profile" className="flex w-full p-4 bg-red-700 rounded-lg items-center gap-2 lg:gap-4 h-32 lg:h-60 grow">
                        <div className="rounded-full">
                            <img src={"/images/dokter/doctor1.png"} alt="" className="rounded-full h-20 lg:h-32 aspect-square" />
                        </div>
                        <div className="text-white">
                            <p className="text-sm lg:text-lg">Hallo!,</p>
                            <h3 className="text-xl font-bold lg:text-4xl">{akun.nama}</h3>
                            <h4 className="lg:text-xl">{akun.spesialis}</h4>
                        </div>
                    </Link>
                    <div className="flex gap-2 lg:flex-col w-full lg:max-w-sm">
                        <Link to="/janjipasien" className="h-full max-h-20 lg:max-h-max p-4 w-full rounded-lg bg-red-700 flex gap-2 items-center">
                            <img src={listSvg} alt="" className="h-10" />
                            <div className="text-white">
                                <h3 className="text-2xl lg:text-3xl font-bold">{akun.antrian}</h3>
                                <p className="text-xs lg:text-base">Janji temu hari Ini</p>
                            </div>
                        </Link>
                        <Link to="/janjipasien" className="h-full max-h-20 lg:max-h-max  p-4 w-full rounded-lg bg-red-700 flex gap-2 items-center">
                            <img src={TotalSvg} alt="" className="h-10" />
                            <div className="text-white">
                                <h3 className="text-2xl lg:text-3xl font-bold">{akun.total_pasien}</h3>
                                <p className="text-xs lg:text-base">Total Pasien</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="flex mt-4 gap-3 flex-col lg:flex-row">
                    <div className="flex-1 lg:p-4 p-2 rounded-2xl border-black bg-white">
                        <div className="flex justify-between">
                            <h3 className="text-lg font-bold lg:text-2xl mb-2">Janji Temu Hari ini</h3>
                            <Link to="/janjipasien" className="font-semibold underline text-base text-red-700">Jadwal Lainnya</Link>
                        </div>
                        <div>
                            {pasien.map((item) => (
                                <PasienLanding pasien={item} />
                            ))}

                        </div>
                    </div>
                    <div className="flex-1 p-2 lg:p-4 rounded-2xl border-black bg-white">
                        <div className="flex justify-between">
                            <h3 className="text-lg font-bold lg:text-2xl mb-2">Forum Belum Terjawab</h3>
                            <Link to="/forum" className="font-semibold underline text-base text-red-700">Forum Lainnya</Link>
                        </div>
                        <div className="flex flex-col border-none lg:flex-row gap-1 flex-wrap border justify-center">
                            {
                                data.map((item) => (
                                    <ForumCard data={item} />
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>
            <FooterLanding role={akun.role} />

        </div>
    )
}
export default LandingPageDoctor