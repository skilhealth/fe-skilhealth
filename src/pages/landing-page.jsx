import janjiSvg from "/src/assets/janji-temu.svg"
import Logo from "/LogoSkilHealth.png"
import forumPng from "/src/assets/forum.png"
import Dumb from "../components/dumb-forum-card"
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
        user: "fuad",
        judul: "Mata Kanan Sakit"
    }]
    const akun = {
        nama: "Ariel Zakly Pratama",
        role: "Pasien"
    }
    return (
        <div className="">
            <div className="p-4">
                <div className="w-full flex flex-col lg:flex-row gap-2">
                    <div className="flex w-full p-4 bg-red-700 rounded-lg items-center gap-2 lg:gap-4 h-32 lg:h-56 grow">
                        <div className="rounded-full">
                            <img src={Logo} alt="" className="rounded-full h-24 lg:h-32 aspect-square" />
                        </div>
                        <div className="text-white">
                            <p className="text-sm lg:text-lg">Hallo, selamat datang di Skilhealth!</p>
                            <h3 className="text-xl font-bold lg:text-4xl">{akun.nama}</h3>
                            <h4 className="lg:text-xl">{akun.spesialis}</h4>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <h3 className="text-center text-lg font-bold mb-4 lg:text-2xl">Fitur</h3>
                    <div className="flex w-full justify-center gap-4">
                        <div className="">
                            <div className="p-3 bg-red-700 lg:h-24 rounded-lg aspect-square flex h-20">
                                <img src={janjiSvg} alt="" />
                            </div>
                            <div className="w-20 text-center font-semibold mt-2">
                                Janji Temu Pasien
                            </div>
                        </div>
                        <div className="">
                            <div className="p-3 bg-red-700 lg:h-24 rounded-lg aspect-square flex h-20">
                                <img src={forumPng} alt="" />
                            </div>
                            <div className="w-20 text-center font-semibold mt-2">
                                Forum
                            </div>
                        </div>
                        <div className="">
                            <div className="p-3 bg-red-700 lg:h-24 rounded-lg aspect-square flex h-20">
                                <img src={janjiSvg} alt="" />
                            </div>
                            <div className="w-20 text-center font-semibold mt-2">
                                Janji Temu Pasien
                            </div>
                        </div>
                        <div className="">
                            <div className="p-3 bg-red-700 lg:h-24 rounded-lg aspect-square flex h-20">
                                <img src={janjiSvg} alt="" />
                            </div>
                            <div className="w-20 text-center font-semibold mt-2">
                                Janji Temu Pasien
                            </div>
                        </div>
                        <div className="">
                            <div className="p-3 bg-red-700 lg:h-24 rounded-lg aspect-square flex h-20">
                                <img src={janjiSvg} alt="" />
                            </div>
                            <div className="w-20 text-center font-semibold mt-2">
                                Janji Temu Pasien
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <h3 className="text-lg font-bold lg:text-center lg:text-2xl mb-2">Topik Baru Baru Ini</h3>
                    <div className="flex flex-col border-none lg:flex-row gap-1 flex-wrap border justify-center">
                        {
                            data.map((item) => (
                                <Dumb data={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <FooterLanding role={akun.role}/>

        </div>
    )
}
export default LandingPage