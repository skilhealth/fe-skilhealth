import status from "../assets/status.png"
import { useState } from "react";
import Backbutton from "../components/backbutton";

const StatusAmbulance = ()  => {

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation and API calls here
     };

    return (
    <div>
         <Backbutton  nama= "Biasa" />
        <div className="bg-white-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-3xl mx-auto bg-gray-100 rounded-lg p-6">
            <img className="w-40 h-30 mx-auto" src={status}></img>
             <div className="flex justify-center items-center">
             <p className=" font-bold text-center mr-2">Masih dalam perjalanan </p>
            <div className="flex space-x-2">
                <div className="w-2 h-2 bg-black rounded-full animate-bounce mt-2"></div>
                <div className="w-2 h-2 bg-black rounded-full animate-bounce mt-2"></div>
                <div className="w-2 h-2 bg-black rounded-full animate-bounce mt-2"></div>
            </div>
            </div>
             <h1 className="text-2xl font-bold mt-8 text-center">Detail Ambulance</h1>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                        <h5 className="font-bold">Nomor Kendaraan:</h5>
                        <p className="font-semibold">B 4814 SW</p>
                    </div>
                    <div>
                        <h5 className="font-bold">Tingkat Pelayanan:</h5>
                        <p className="font-semibold">BLS ( Ambulans Basic Life Support )</p>
                    </div>
                    <div>
                        <h5 className="font-bold">Paramedis:</h5>
                        <p className="font-semibold">Sarah Johnson, Daniel Brown, David Wilson & Amanda Clark</p>
                    </div>
                    <div>
                        <h5 className="font-bold">Perlengkapan Ambulance:</h5>
                        <p className="font-semibold">Peralatan Pertolongan Pertama, Perangkat Pernapasan, AED, Perangkat Pemindahan Pasien & Peralatan Tambahan</p>
                    </div>
                </div>

                <h1 className="mt-8 font-sans font-bold text-xl text-center">Catatan</h1>
                <form onSubmit={handleSubmit}>
                    <textarea
                        id="catatan"
                        name="catat"
                        type="text"
                        disabled
                        className="px-4 py-3 placeholder-gray-400 bg-gray-50 rounded-lg border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm mt-4"
                        placeholder="Masukan Catatan"
                        value="Pasien Memiliki alergi terhadap obat-obatan yang mengandung ibuprofen"
                    />
                    <button
                        type="submit"
                        className='bg-red-700 text-white text-sm font-bold px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none w-full mt-4'
                    >
                        Kirim
                    </button>
                </form>
           </div>
        </div>  
     </div>
    )  
}

export default StatusAmbulance