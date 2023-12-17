import status from "../assets/status.png"
import rs from "../assets/hospital-banner.png"
import { useState } from "react";
import Backbutton from "../components/backbutton";
import { useLocation } from "react-router-dom";

const StatusAmbulancee = () => {
    const getRespon = {
        plat: "B 34345 XS",
        tingkat: "BLS (Basic Life Support)",
        paramedis: "Sarah Johnson, Daniel Brown, David Wilson & Amanda Clark",
        perlengkapan: "Peralatan Pertolongan Pertama, Perangkat Pernapasan, AED, Perangkat Pemindahan Pasien & Peralatan Tambahan"
    }
    const [respon, setRespon] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation and API calls here
    };

    return (
        <div className="p-4 lg:px-24">
            <Backbutton nama="Darurat" />
            <div className="bg-white-100 flex items-center justify-center py-4 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-3xl mx-auto bg-gray-100 rounded-lg p-6">
                    {respon ? (<img className="w-40 h-30 mx-auto" src={status}></img>) :
                        (<img className="w-40 h-30 mx-auto" src={rs}></img>)}

                    <div className="flex justify-center items-center">
                        <p className=" font-bold text-center mr-2">{respon ? "Masih dalam perjalanan" : "Menunggu Respon rumah sakit"}</p>
                        <div className="flex space-x-2">
                            <div className="w-2 h-2 bg-black rounded-full animate-bounce mt-2"></div>
                            <div className="w-2 h-2 bg-black rounded-full animate-bounce mt-2"></div>
                            <div className="w-2 h-2 bg-black rounded-full animate-bounce mt-2"></div>
                        </div>
                    </div>

                    {
                        respon ? (
                            <div>
                                <h1 className="text-2xl font-bold mt-8 text-center">Detail Ambulance</h1>
                                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <h5 className="font-bold">Nomor Kendaraan:</h5>
                                        <p className="font-semibold">{respon.plat}</p>
                                    </div>
                                    <div>
                                        <h5 className="font-bold">Tingkat Pelayanan:</h5>
                                        <p className="font-semibold">{respon.tingkat}</p>
                                    </div>
                                    <div>
                                        <h5 className="font-bold">Paramedis:</h5>
                                        <p className="font-semibold">{respon.paramedis}</p>
                                    </div>
                                    <div>
                                        <h5 className="font-bold">Perlengkapan Ambulance:</h5>
                                        <p className="font-semibold">{respon.perlengkapan}</p>
                                    </div>
                                </div>
                            </div>

                        ) : (
                            <div className="mt-6 text-white font-medium">
                                <button className="bg-red-600 w-full p-2 rounded-lg">Refresh</button>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

export default StatusAmbulancee