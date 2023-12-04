import React, { useState } from 'react';
import Backbutton from '../components/backbutton';
import ftDokter from '../assets/dctr1.png';
import { useContext } from 'react';
import { userContext } from '../context/user-provider';
import { useEffect } from 'react';
import { instansiContext } from '../context/instansi-provider';


const EditProfileDokter = () => {
  const { user } = useContext(userContext)
  const { instansi } = useContext(instansiContext)
  const [namaLengkap, setNamaLengkap] = useState(user.nama);
  const [status, setStatus] = useState(user.status);
  const [noTelepon, setNoTelepon] = useState(user.no_tlp);
  const [rumahSakit, setRumahSakit] = useState(user.instansi_id);
  const [tentang, setTentang] = useState(user.deskripsi);
  const [imageSrc, setImageSrc] = useState(user.images);

  console.log(user)

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation and API calls here
  };
  if (!user || !instansi) {
    return (
      <div className="p-4 lg:px-24">
        <div className="flex flex-col gap-2">
          <div className="w-full h-full flex justify-center items-center">
            <div className="text-lg font-semibold text-slate-300 absolute top-1/2 -translate-y-1/2">
              Loading
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className='p-4 lg:px-24'>
      <Backbutton nama="Edit Profile"></Backbutton>
      <div className='bg-white-100 flex items-center justify-center py-12 px-2 lg:justify-center'>
        <div className="max-w-md w-full space-y-4">
          <div className=' flex justify-center'>
            <div className=' relative'>
              <img src={imageSrc} alt='' className='w-24 h-24 rounded-full bg-gray-100' />
            </div>
          </div>

          <div className='flex items-center justify-center'>
            <button className="text-center font-sans text-lg lg:text-xl font-bold text-red-600">
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
                className="px-4 py-6 bg-gray-200 font-bold rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
                value="andrewwl@gmail.com"
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
              <select value={status} onChange={(e) => setStatus(e.target.value)} name='status' className='px-4 py-6 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm'>
                <option value="">Pilih Status</option>
                <option value={true}>Sedang Di Rumah Sakit</option>
                <option value={false}>Sedang Libur</option>
              </select>
            </div>
            <div>
              <div>
                <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold ">Rumah Sakit*</h3>
                <select value={rumahSakit} onChange={(e) => setRumahSakit(e.target.value)} name='status' className='px-4 py-6 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm'>
                  <option value="">Pilih Rumah Sakit</option>
                  {
                    instansi.map((item, index) => (
                      <option key={index} value={item.id}>{item.nama}</option>
                    ))
                  }
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
