import React, { useState } from 'react';
import Backbutton from '../components/backbutton';
import ftUser from '../assets/user.png';
import { useContext } from 'react';
import { userContext } from '../context/user-provider';
import moment from 'moment/moment';
import 'moment/locale/id'
import Loading from "../components/loading";



const EditProfile = () => {
  moment.locale('id')
  const { user, Edit } = useContext(userContext)
  if (!user) {
    return (
      <Loading />
    )
  }
  const tgl = moment(user.tgl_lahir).format('yyyy-MM-DD')
  const [namaLengkap, setNamaLengkap] = useState(user.nama);
  const [tanggalLahir, setTanggalLahir] = useState(tgl);
  const [jenisKelamin, setJenis] = useState(user.jenis_kelamin);
  const [noTelepon, setNoTelepon] = useState(user.no_tlp);
  const [alamat, setAlamat] = useState(user.alamat);
  const [imageSrc, setImageSrc] = useState(user.images);
  const editProfile = async (e) => {
    e.preventDefault()
    const editData = {
      nama: namaLengkap,
      tgl_lahir: tanggalLahir,
      no_tlp: noTelepon,
      alamat: alamat
    }
    let message = await Edit(editData)
    alert(message)
  }


  return (
    <div className='p-4 lg:px-24'>
      <Backbutton nama="Profil Pengguna" />
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
              <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold ">Jenis Kelamin*</h3>
              <input type="text" value={jenisKelamin}
              className='px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm' 
              disabled
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
            <div>

              <div>
                <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold">Alamat*</h3>
                <textarea
                  id="alamatUser"
                  name="alamatUser"
                  type="tel"
                  autoComplete="alamatUser"
                  required
                  className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
                  placeholder="Masukan Alamat"
                  value={alamat}
                  rows={4}
                  onChange={(e) => setAlamat(e.target.value)}
                ></textarea>
              </div>
            </div>
            <div>
              <button type='submit' className='bg-red-700 rounded-xl font-medium w-full text-lg text-white p-2' onClick={editProfile}>Edit Profile</button>
            </div>
          </form>

        </div>
      </div>
    </div>

  );
};

export default EditProfile;
