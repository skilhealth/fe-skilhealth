import React, { useState } from 'react';
import Backbutton from '../components/backbutton';
import ftUser from '../assets/user.png';
import { useContext } from 'react';
import { userContext } from '../context/user-provider';
import moment from 'moment/moment';
import 'moment/locale/id'


const EditProfile = () => {
  moment.locale('id')
  const { user } = useContext(userContext)
  if (!user) {
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
  const tgl = moment(user.tgl_lahir).format('yyyy-MM-DD')
  const [namaLengkap, setNamaLengkap] = useState(user.nama);
  const [tanggalLahir, setTanggalLahir] = useState(tgl);
  const [noTelepon, setNoTelepon] = useState(user.no_tlp);
  const [email, setEmail] = useState(user.email);
  const [nik, setNik] = useState(user.nik);
  const [alamat, setAlamat] = useState(user.alamat);
  const [imageSrc, setImageSrc] = useState(user.images);


  
  return (
    <div className='p-4 lg:px-24'>
      <Backbutton nama="Profile Pengguna" />
      <div className="bg-white-100 flex items-center justify-center py-12 px-4 lg:justify-center">
        <div className="max-w-md w-full space-y-4">
          <div className='flex justify-center'>
            <div className='relative'>
              <img src={imageSrc} alt='' className=' w-24 h-24 rounded-full bg-gray-100' />
            </div>
          </div>

          <form className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px"></div>
            <div>
              <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold">Nama Lengkap*</h3>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="off"
                autoFocus required
                className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
                placeholder="Masukan Nama"
                value={namaLengkap}
                onChange={(e) => setNamaLengkap(e.target.value)}
              />
            </div>
            <div>
              <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold ">Tanggal Lahir*</h3>
              <input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                autoComplete="dateOfBirth"
                required
                className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
                placeholder="Masukan Tanggal Lahir"
                value={tanggalLahir}
                onChange={(e) => setTanggalLahir(e.target.value)}
              />
            </div>
            <div>

              <div>
                <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold">No.Telepon*</h3>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  autoComplete="phoneNumber"
                  required
                  className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
                  placeholder="Masukan No.Telepon"
                  value={noTelepon}
                  onChange={(e) => setNoTelepon(e.target.value)}
                />
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>

  );
};

export default EditProfile;
