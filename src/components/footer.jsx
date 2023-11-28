import FbSvg from "/src/assets/fb.svg"
import IgSvg from "/src/assets/ig.svg"
import XSvg from "/src/assets/x.svg"
import LogoPng from "/LogoSkilHealth.png"

function FooterLanding({ role }) {
    return (
            <footer className="w-full bg-red-900 flex h-52 mt-4 p-4 justify-between text-white lg:px-24">
                <div className="h-full flex flex-1 items-center gap-1">
                    <img src={LogoPng} alt="" className="h-10" />
                    <div className="text-2xl  font-bold">Skilhealth</div>
                </div>
                <div className="flex-col flex lg:items-center justify-between items-end lg:flex-row-reverse grow max-w-4xl">
                    <ul className=" underline">
                        {
                            role === "Doctor" ? (
                                <div>
                                    <li><a href="http://" target="_blank" rel="noopener noreferrer">Janji Temu Pasien</a> </li>
                                    <li><a href="http://" target="_blank" rel="noopener noreferrer">Forum Konsultasi</a> </li>
                                </div>

                            ) : (
                                <div>
                                    <li><a href="http://" target="_blank" rel="noopener noreferrer">Cari Dokter</a> </li>
                                    <li><a href="http://" target="_blank" rel="noopener noreferrer">Cek Jadwal janji</a> </li>
                                    <li><a href="http://" target="_blank" rel="noopener noreferrer">Cek Hasil UjiLab</a> </li>
                                    <li><a href="http://" target="_blank" rel="noopener noreferrer">Forum Konsultasi</a> </li>
                                </div>
                            )
                        }

                    </ul>
                    <div className="">
                        <h4 className="mt-4 mb-2 font-semibold lg:text-lg">Ikuti Sosial Media Kami</h4>
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