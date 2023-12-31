import FbSvg from "/src/assets/fb.svg"
import IgSvg from "/src/assets/ig.svg"
import XSvg from "/src/assets/x.svg"
import LogoPng from "/LogoSkilHealth.png"
import { Link } from "react-router-dom"

function FooterLanding({ role }) {
    return (
            <footer className="w-full bg-red-900 flex h-52 mt-4 p-4 justify-between text-white lg:px-24">
                <div className="h-full flex items-center gap-1 lg:flex-1">
                    <img src={LogoPng} alt="" className="h-10" />
                    <div className="text-lg lg:text-2xl font-bold">Skilhealth</div>
                </div>
                <div className="flex-col flex lg:items-center justify-around lg:justify-between items-end lg:flex-row-reverse grow lg:flex-2">
                    <ul className="text-sm md:text-md lg:text-lg">
                        {
                            role === "dokter" ? (
                                <div>
                                    <li className="hover:underline"><Link to="/janjipasien"> Janji Temu Pasien </Link> </li>
                                    <li className="hover:underline"><Link to="/forum"> Forum Konsultasi </Link> </li>
                                </div>

                            ) : (
                                <div>
                                    <li className="hover:underline"><Link to="/booking"> Cek Jadwal janji </Link> </li>
                                    <li className="hover:underline"><Link to="/doctor/search"> Cari Dokter </Link> </li>
                                    <li className="hover:underline"><Link to="/ujilab"> Cek Hasil Ujilab </Link> </li>
                                    <li className="hover:underline"><Link to="/ambulan"> Panggil Ambulance </Link> </li>
                                    <li className="hover:underline"><Link to="/forum"> Forum Konsultasi </Link> </li>
                                </div>
                            )
                        }

                    </ul>
                    <div className="">
                        <h4 className="mt-1 mb-1 font-semibold text-center text-sm lg:text-lg">Ikuti Sosial Media Kami</h4>
                        <div className="flex justify-around">
                            <img src={FbSvg} alt="" className="w-7 h-7 lg:w-9 lg:h-9" />
                            <img src={IgSvg} alt="" className="w-7 h-7 lg:w-9 lg:h-9" />
                            <img src={XSvg} alt="" className="w-7 h-7 lg:w-9 lg:h-9" />
                        </div>
                    </div>
                </div>
            </footer>
    )

}
export default FooterLanding