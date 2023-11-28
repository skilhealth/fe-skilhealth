import janjiSvg from "/src/assets/janji-temu.svg"
import forumPng from "/src/assets/forum.png"
import Ambulan from "/src/assets/ambulan.png"
import Ujilab from "/src/assets/uji-lab.png"
import Cekjadwal from "/src/assets/cek-jadwal.png"
import Dumb from "../components/dumb-forum-card"
import BannerImg from "/src/assets/bannerskilhealth.png"
import BannerRS from "/src/assets/hospital-banner.png"
import FooterLanding from "../components/footer"

function LandingPage() {
    const data = [{
        status: "Sudah Terjawab",
        user: "fulan",
        judul: "Mata Kiri Sakit"
    }, {
        status: "Sudah Terjawab",
        user: "fuad",
        judul: "Mata Kanan Sakit"
    },
    {
        status: "Sudah Terjawab",
        user: "fuad",
        judul: "Mata Kanan Sakit"
    },
    {
        status: "Sudah Terjawab",
        user: "fulan",
        judul: "Mata Kiri Sakit"
    }, {
        status: "Sudah Terjawab",
        user: "fuad",
        judul: "Mata Kanan Sakit"
    },
    {
        status: "Sudah Terjawab",
        user: "fuad",
        judul: "Mata Kanan Sakit"
    },
    ]
    const akun = {
        nama: "Ariel Zakly Pratama",
        role: "Pasien"
    }
    return (
        <div className="">
            <div className="p-4 lg:px-24 lg:py-7">
                <div className="flex w-full pl-4 bg-red-700 rounded-lg items-center  h-48 lg:pl-20 lg:h-80 justify-between overflow-hidden">
                    <div className="text-white w-full max-w-[168px] lg:max-w-lg flex flex-col gap-10 justify-between">
                        <p className="text-lg font-semibold lg:text-4xl lg:leading-relaxed">Bisa Atur Janji Temu Dokter Skilvul Hospital di SkilHealth</p>
                        <div>
                            <button className="bg-white text-red-700 rounded-lg p-2 font-semibold mt-auto lg:text-xl lg:p-3">Cari Dokter</button>
                        </div>
                    </div>
                    <div className="h-full">
                        <img src={BannerImg} alt="" className=" object-cover h-full" />
                    </div>
                </div>
                <div className="my-4 lg:my-7">
                    <h3 className="text-xl font-bold mb-4 lg:text-2xl text-center">Apa yang Kamu Butuhkan?</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="flex flex-col items-center">
                            <div className="p-3 bg-red-700 lg:h-28 rounded-lg aspect-square flex h-20">
                                <img src={janjiSvg} alt="" className="h-full"/>
                            </div>
                            <div className="w-20 text-center font-semibold mt-2">
                                Janji Temu Pasien
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="p-3 bg-red-700 lg:h-28 rounded-lg aspect-square justify-center flex h-20">
                                <img src={Ujilab} alt="" />
                            </div>
                            <div className="w-20 text-center font-semibold mt-2">
                                Cek Hasil Rekam Medis
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="p-3 bg-red-700 lg:h-28 rounded-lg aspect-square flex h-20">
                                <img src={Ambulan} alt="" />
                            </div>
                            <div className="w-20 text-center font-semibold mt-2">
                                Panggil Ambulan
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="p-3 bg-red-700 lg:h-28 rounded-lg aspect-square flex h-20">
                                <img src={forumPng} alt="" />
                            </div>
                            <div className="w-20 text-center font-semibold mt-2">
                                Forum
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="p-3 bg-red-700 lg:h-28 rounded-lg aspect-square flex h-20">
                                <img src={Cekjadwal} alt="" />
                            </div>
                            <div className="w-20 text-center font-semibold mt-2">
                                Cek Jadwal
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex w-full pl-4 bg-red-700 rounded-lg items-center h-48 lg:pl-20 lg:px-4 lg:h-80 justify-between overflow-hidden">
                    <div className="text-white w-full max-w-[168px] lg:max-w-lg flex flex-col gap-10 justify-between">
                        <p className="text-lg font-semibold lg:text-4xl lg:leading-relaxed">Skilvul Hospital Tersebar diseluruh indonesia</p>
                        <div>
                            <button className="bg-white text-red-700 rounded-lg p-2 font-semibold mt-auto lg:text-xl lg:p-3">Cek Rumah Sakit</button>
                        </div>
                    </div>
                    <div className="h-full flex items-center p-2">
                        <img src={BannerRS} alt="" className=" object-cover h-32 lg:h-64" />
                    </div>
                </div>
                <div className="mt-4">
                    <h3 className="text-xl font-bold lg:text-center lg:text-2xl mb-2">Topik Baru Baru Ini</h3>
                    <div className="flex flex-col border-none lg:flex-row gap-1 flex-wrap border justify-center">
                        {
                            data.map((item) => (
                                <Dumb data={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <FooterLanding role={akun.role} />

        </div>
    )
}
export default LandingPage