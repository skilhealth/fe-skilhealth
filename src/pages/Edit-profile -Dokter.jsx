import React, { useState } from 'react';
import Backbutton from '../components/backbutton';
import ftDokter from '../assets/dctr1.png';


const EditProfileDokter = () => {
    const [namaLengkap, setNamaLengkap] = useState('');
    const [status, setStatus] = useState('');
    const [noTelepon, setNoTelepon] = useState('');
    const [rumahSakit, setRumahSakit] = useState('');
    const [tentang, setTentang] = useState('');
    const [imageSrc, setImageSrc] = useState('');

 const handleImageChange= () => {
  setImageSrc('/path/to/default/image.jpg');
 }

 const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation and API calls here
 };

 return(
    <div>
        <Backbutton nama= "Edit Profile"></Backbutton>
        <div className='bg-white-100 flex items-center justify-center py-12 px-3 lg:justify-center'>
        <div className="max-w-md w-full space-y-4">
          <div className=' flex justify-center'>
            <div className=' relative'>
            <img src={ftDokter} alt='' className='w-24 h-24 rounded-full bg-gray-100' />
            </div>
          </div>

          <div className='flex items-center justify-center'>
          <button  onClick ={handleImageChange} className="text-center font-sans text-lg lg:text-xl font-bold text-red-600">
            Edit Picture
          </button>
          </div>
     
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px"></div>
          <div>
          <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold">Email</h3>
            <input
              id="email"
              name="email"
              type="email"
              disabled
              className="px-4 py-6 bg-gray-400 font-bold rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
              value= "andrewwl@gmail.com"
            />
          </div>

          <div>
            <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold">Nama Lengkap*</h3>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="off"
                autoFocus required
                className="px-4 py-6 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
                placeholder="Masukan Nama"
                value={namaLengkap}
                onChange={(e) => setNamaLengkap(e.target.value)}
              />
            </div>


            <div>
            <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold ">Status*</h3>
            <select value={status}  onChange={(e) => setStatus(e.target.value)} name='status' className='px-4 py-6 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm'>
                  <option value="">Pilih Status</option>
                  <option value="1">Sedang Di Rumah Sakit</option>
                  <option value="2">Sedang Libur</option>
              </select>
            </div>
            <div>
            <div>
          <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold ">Rumah Sakit*</h3>
          <select value={rumahSakit}  onChange={(e) => setRumahSakit(e.target.value)} name='status' className='px-4 py-6 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm'>
                  <option value="">Pilih Rumah Sakit</option>
                  <option value="1">Skilvul Hospital Jakarta</option>
                  <option value="2">Skilvul Hospital Bandung</option>
                  <option value="3">Skilvul Hospital Yogyakarta</option>
              </select>
          </div>

          <div>
          <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold">No.Telepon*</h3>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              autoComplete="phoneNumber"
              required
              className="px-4 py-6 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
              placeholder="Masukan No.Telepon"
              value={noTelepon}
              onChange={(e) => setNoTelepon(e.target.value)}
            />
          </div>
         
         
          <div>
          <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold">Tentang*</h3>
            <textarea
              id="tentang"
              name="tentang"
              type="text"
              required
              className="px-4 py-6 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
              placeholder="Masukan Tentang Diri Anda"
              value={tentang}
              onChange={(e) => setTentang(e.target.value)}
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className='bg-red-700 text-white text-sm font-bold px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150'
          >
            Simpan
          </button>
        </div>
      </form>
      </div>
    </div>
 </div>
     
 )
};

export default EditProfileDokter;
