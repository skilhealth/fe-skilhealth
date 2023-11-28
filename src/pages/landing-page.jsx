import janjiSvg from "/src/assets/janji-temu.svg"
import forumPng from "/src/assets/forum.png"
import Ambulan from "/src/assets/ambulan.png"
import Ujilab from "/src/assets/uji-lab.png"
import Cekjadwal from "/src/assets/cek-jadwal.png"
import Dumb from "../components/dumb-forum-card"
import BannerImg from "/src/assets/bannerskilhealth.png"
import BannerRS from "/src/assets/hospital-banner.png"
import FooterLanding from "../components/footer"
import { Link } from "react-router-dom"
import ForumCard from "../components/forum-card"

function LandingPage({role}) {
    const forum = [
        {
          id:1,
          status: "Sudah Terjawab",
          judul: "Susah Tidur di Malam Hari",
          user: "Fulan",
          dokter: "Dr. Mira Iskandar",
          spesialis: "Dokter Umum",
          pertanyaan:
            "Dok, saya punya masalah soal tidur. Setiap malam, ntah kenapa walaupun saya ngantuk dan berusaha mau tidur, walaupun udah baring berjam-jam ga tidur-tidur dok. Apakah ada solusi?",
          jawaban:
            "Masalah tidur malam dapat disebabkan oleh berbagai faktor, dan solusinya dapat bervariasi tergantung pada penyebab spesifiknya. Cobalah untuk menjaga jadwal tidur yang tetap, bahkan pada akhir pekan. Hal ini membantu mengatur jam biologis tubuh dan meningkatkan kualitas tidur.",
        },
        {
          id:2,
          status: "Belum Terjawab",
          judul: "Merasa Lelah di Pagi Hari",
          user: "Werner",
          dokter: "",
          spesialis: "",
          pertanyaan: "Bertanya",
          jawaban: "",
        },
        {
          id:3,
          status: "Belum Terjawab",
          judul: "Merasa Lelah di Pagi Hari",
          user: "Werner",
          dokter: "",
          spesialis: "",
          pertanyaan: "Bertanya",
          jawaban: "",
        },
        {
          id:4,
          status: "Belum Terjawab",
          judul: "Merasa Lelah di Pagi Hari",
          user: "Werner",
          dokter: "",
          spesialis: "",
          pertanyaan: "Bertanya",
          jawaban: "",
        },
        {
          id:5,
          status: "Belum Terjawab",
          judul: "Merasa Lelah di Pagi Hari",
          user: "Werner",
          dokter: "",
          spesialis: "",
          pertanyaan: "Bertanya",
          jawaban: "",
        },
        {
          id:6,
          status: "Belum Terjawab",
          judul: "Merasa Lelah di Pagi Hari",
          user: "Werner",
          dokter: "",
          spesialis: "",
          pertanyaan: "Bertanya",
          jawaban: "",
        },
      ];
    const akun = {
        nama: "Ariel Zakly Pratama",
        role: role,
    }
    return (
        <div className="">
            <div className="p-4 lg:px-24 lg:py-7">
                <div className="flex w-full pl-4 bg-red-700 rounded-lg items-center  h-48 lg:pl-20 lg:h-80 justify-between overflow-hidden">
                    <div className="text-white w-full max-w-[168px] lg:max-w-lg flex flex-col gap-4">
                        <p className="text-lg font-semibold lg:text-4xl lg:leading-relaxed">Bisa Atur Janji Temu Dokter Skilvul Hospital di SkilHealth</p>
                        <div>
                            <Link to="/doctor/search">
                                <button className="bg-white text-red-700 rounded-lg p-2 font-semibold mt-auto lg:text-xl lg:p-3">Cari Dokter</button>
                            </Link>
                        </div>
                    </div>
                    <div className="h-full">
                        <img src={BannerImg} alt="" className=" object-cover h-full" />
                    </div>
                </div>
                <div className="my-4 lg:my-7">
                    <h3 className="text-xl font-bold mb-4 lg:text-2xl text-center">Apa yang Kamu Butuhkan?</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/doctor/search" className="flex flex-col items-center">
                            <div className="p-3 bg-red-700 lg:h-28 rounded-lg aspect-square flex h-20">
                                <img src={janjiSvg} alt="" className="h-full" />
                            </div>
                            <div className="w-20 text-center font-semibold mt-2">
                                Buat Janji Temu
                            </div>
                        </Link>
                        <Link to="/ujilab" className="flex flex-col items-center">
                            <div className="p-3 bg-red-700 lg:h-28 rounded-lg aspect-square justify-center flex h-20">
                                <img src={Ujilab} alt="" />
                            </div>
                            <div className="w-20 text-center text-[14.4px] font-semibold mt-2">
                                Hasil Rekam Medis
                            </div>
                        </Link>
                        <Link to="/ambulan" className="flex flex-col items-center">
                            <div className="p-3 bg-red-700 lg:h-28 rounded-lg aspect-square flex h-20">
                                <img src={Ambulan} alt="" />
                            </div>
                            <div className="w-20 text-center font-semibold mt-2">
                                Panggil Ambulan
                            </div>
                        </Link>
                        <Link to="/forum" className="flex flex-col items-center">
                            <div className="p-3 bg-red-700 lg:h-28 rounded-lg aspect-square flex h-20">
                                <img src={forumPng} alt="" />
                            </div>
                            <div className="w-20 text-center font-semibold mt-2">
                                Forum
                            </div>
                        </Link>
                        <Link to="/booking" className="flex flex-col items-center">
                            <div className="p-3 bg-red-700 lg:h-28 rounded-lg aspect-square flex h-20">
                                <img src={Cekjadwal} alt="" />
                            </div>
                            <div className="w-20 text-center font-semibold mt-2">
                                Cek Jadwal
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="flex w-full pl-4 bg-red-700 rounded-lg items-center h-48 lg:pl-20 lg:px-4 lg:h-80 justify-between overflow-hidden">
                    <div className="text-white w-full max-w-[168px] lg:max-w-lg flex flex-col gap-10 justify-between">
                        <p className="text-lg font-semibold lg:text-4xl lg:leading-relaxed">Skilvul Hospital Tersebar diseluruh indonesia</p>
                        <Link to="/rumahsakit">
                            <button className="bg-white text-red-700 rounded-lg p-2 font-semibold mt-auto lg:text-xl lg:p-3">Cek Rumah Sakit</button>
                        </Link>
                    </div>
                    <div className="h-full flex items-center p-2">
                        <img src={BannerRS} alt="" className=" object-cover h-32 lg:h-64" />
                    </div>
                </div>
                <div className="mt-4">
                    <h3 className="text-xl font-bold lg:text-center lg:text-2xl mb-2">Topik Baru Baru Ini</h3>
                    <div className="flex flex-col border-none lg:flex-row gap-1 flex-wrap border justify-center">
                        {
                            forum.map((item) => (
                                <ForumCard data={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
            <FooterLanding role={role} />
        </div>
    )
}
export default LandingPage