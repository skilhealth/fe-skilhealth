import Backbutton from "../components/backbutton";
import imgambulancedarurat from "../assets/darurat.png";
import iconTlpn from "../assets/icontlpn.png";
import { useState } from "react";



const TingkatDarurat =  () => {
    const [catatan, setCatatan] = useState('');



    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation and API calls here
     };

    return (
        <div>
        <Backbutton  nama= "Darurat" />
        <div className="bg-white-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
             <div className="w-full h-40  bg-gray-100 rounded-lg sm:text-sm">
                 <div className="grid-cols-3 gap-4 px-4 py-4 items-center lg: flex justify-around">
                     <div>
                     <img className="w-20 h-19 " src={imgambulancedarurat}></img>
                     <p className="font-bold ml-4">Darurat</p>
                     </div>
                     <div>
                     <h5 className="font-semibold">Hubungi Kami</h5>
                     <h5 className="font-bold">3-200-911</h5>
                     </div>
                     <div className="ml-12 mb-6 w-16 h-16 rounded-lg bg-red-700">
                         <img className="w-8 h-8 ml-3 mt-4" src={iconTlpn}></img>
                         <p className="font-bold mt-5">Telepon</p>
                     </div>
                    
                 </div>
                 <h1 className="text-2xl font-bold mt-16">Detail Ambulance</h1>

                 
         <div className="relative w-full h-96 px-4 py-4 bg-gray-100 rounded-lg sm:text-sm">
          <div className="grid grid-cols-2 gap-12">
             <h5 className="font-bold">Nomor Kendaraan : </h5>
             <p>Nomor Kendaraan  </p>
             <h5 className="font-bold">Tingkat Pelayanan : </h5>
             <p>Nomor Kendaraan  </p>
             <h5 className="font-bold">Paramedis : </h5>
             <p>Nomor Kendaraan  </p>
             <h5 className="font-bold">Perlengkapan Ambulance: </h5>
             <p>Nomor Kendaraan  </p>
          </div>
         </div>

         <h1 className="mt-8 space-y-6 block font-sans font-bold text-xl ">Catatan</h1>
         <div>
             <textarea
                 id="catatan"
                 name="catat"
                 type="text"
                 required
                 className="px-10 py-10 placeholder-gray-400 bg-gray-50 rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
                 placeholder="Masukan Catatan"
                 value={catatan}
                 onChange={(e) => setCatatan(e.target.value)}
             />
         </div>

         <div className="mt-8 space-y-0">
         <button
         type="submit"
         className='bg-red-700 text-white text-sm font-bold px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150'
       >
         Kirim
       </button>
         </div>

                 
             </div>
        </div>
   </div>
    )
}

export default TingkatDarurat