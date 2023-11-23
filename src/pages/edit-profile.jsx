import React, { useState } from 'react';
import Backbutton from '../components/backbutton';
import ftUser from '../assets/user.png';


const EditProfile = () => {
 const [namaLengkap, setNamaLengkap] = useState('');
 const [tanggalLahir, setTanggalLahir] = useState('');
 const [noTelepon, setNoTelepon] = useState('');
 const [email, setEmail] = useState('');
 const [nik, setNik] = useState('');
 const [alamat, setAlamat] = useState('');
 const [imageSrc, setImageSrc] = useState('');

 const handleImageChange= () => {
  setImageSrc('/path/to/default/image.jpg');
 }

 const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation and API calls here
 };

 return (
  
    <div className="bg-white-100 flex items-center justify-center py-12 px-4 lg:justify-center">
      <div className="max-w-md w-full space-y-4">
      <Backbutton nama= "Edit Profile" />
      <div className="ml-36 w-24 h-24 rounded-full bg-gray-100 lg: justify-center">
        <img src={ftUser} alt='' />
      </div>
      <div>
          <button  onClick ={handleImageChange} className="text-center text-lg font-bold text-red-500 font-sans ml-36 lg:justify-center">
            Edit Picture
          </button>
        </div>
     
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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
          <div>
          <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold">Email*</h3>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="off"
              required
              className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
              placeholder="Masukan Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
          <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold ">NIK*</h3>
            <input
              id="Nik"
              name="nik"
              type="text"
              autoComplete="off"
              required
              className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
              placeholder="Masukan Nomor Identitas"
              value={nik}
              onChange={(e) => setNik(e.target.value)}
            />
          </div>
          <div>
          <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold">Alamat*</h3>
            <textarea
              id="alamat"
              name="alamat"
              type="text"
              required
              className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
              placeholder="Masukan alamat"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
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
);
};

export default EditProfile;
