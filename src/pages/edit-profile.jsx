import Backbutton from "../components/backbutton";
import React, { useState } from "react";

const EditProfile = () => {
    const [namaLengkap, setNamaLengkap] = useState('');
    const [tanggal_lahir, setTanggalLahir] = useState('');
    const [no_telepon, setNoTelepon] = useState('');
    const [email, setEmail] = useState('');
    const [nik, setNik] = useState('');
    const [alamat, setAlamat] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault ();
        // save data here
    };
    return (
        <div>
            <Backbutton nama= "Profil Pasien" />
        <form className="w-full max-w-md mx-auto my-10 mt-8 space-y-6"     autoComplete="off" onSubmit={handleSubmit}>
          <div className="mb-4">
            <h1 className="mt-8 space-y-6 block font-sans text-xl font-bold" htmlFor="namaLengkap">
              Nama Lengkap*
            </h1>
            <input
              className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow  focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
              id="fullName"
              type="text"
              placeholder="Masukan Nama"
         
              autoFocus required
              value={namaLengkap}
              onChange={(e) => setNamaLengkap(e.target.value)}
            />
          </div>
          <div className="mb-4">
          <h1 className="mt-8 space-y-6 block font-sans text-xl font-bold" htmlFor="tanggal_lahir">
              Tanggal Lahir*
            </h1>
            <input
              className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
              id="dateOfBirth"
              type="date"
              placeholder=" Masukan Tanggal Lahir"
              value={tanggal_lahir}
              onChange={(e) => setTanggalLahir(e.target.value)}
            />
          </div>
          <div className="mb-4">
          <h1 className="mt-8 space-y-6 block font-sans text-xl font-bold" htmlFor="no_telepon">
              No.Telepon*
            </h1>
            <input
              className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
              id="phoneNumber"
              type="text"
              placeholder="Masukan No. telepon"
              value={no_telepon}
              onChange={(e) => setNoTelepon(e.target.value)}
            />
          </div>
          <div className="mb-4">
          <h1 className="mt-8 space-y-6 block font-sans text-xl font-bold" htmlFor="email">
              Email*
            </h1>
            <input
              className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
              id="email"
              type="email"
              placeholder=" Masukan Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
          <h1 className="mt-8 space-y-6 block font-sans text-xl font-bold" htmlFor="nik">
              NIK*
            </h1>
            <input
              className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
              id="nik"
              type="text"
              placeholder="Masukan NIK"
              value={nik}
              onChange={(e) => setNik(e.target.value)}
            />
          </div>
          <div className="mb-4">
          <h1 className="mt-8 space-y-6 block font-sans text-xl font-bold" htmlFor="alamat">
              Alamat*
            </h1>
            <textarea
              className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
              id="address"
              placeholder=" Masukan Alamat"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
          <button
            type="submit"
            className='bg-red-700 text-white text-sm font-bold px-3 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none ml-24 w-52  ease-linear transition-all duration-150 sm:text-sm'
          >
            Tambah Profil Lain
          </button>
          </div>
        </form>
      </div>
    )
}

export default EditProfile