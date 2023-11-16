import React, { useState } from 'react';
import imgSkilhealth from "../assets/LogoSkilhealth.png";

const Register = () => {
 const [name, setName] = useState('');
 const [dateOfBirth, setDateOfBirth] = useState('');
 const [gender, setGender] = useState('');
 const [phoneNumber, setPhoneNumber] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');

 const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation and API calls here
 };

 return (
    <div className="mb-10 min-h-screen bg-white-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
      <div className="btn-wrapper item-center sm:px-10 flex lg:px-8 items-center">
          <img alt="..." className="ml-36 flex w-20 h-20 items-center" src= {imgSkilhealth} />
       </div>
      <div>
          <h2 className="text-center text-2xl font-bold text-gray-900 font-sans">
            Selamat Datang di <br></br> Skilhealth !
          </h2>
        </div>
     
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px"></div>
            <div>
            <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold">Nama</h3>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="off"
                autoFocus required
                className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
                placeholder="Masukan Nama"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
            <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold ">Tanggal Lahir</h3>
              <input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                autoComplete="dateOfBirth"
                required
                className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
                placeholder="Masukan Tanggal Lahir"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>
            <div>
            <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold">Jenis Kelamin</h3>
              <select value={gender}  onChange={(e) => setGender(e.target.value)} name='jenis kelamin' className='px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm'>
                  <option value="">Pilih jenis kelamin</option>
                  <option value="1">Laki-Laki</option>
                  <option value="2">Perempuan</option>
                 
              </select>

          <div>
          <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold">No.Telepon</h3>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              autoComplete="phoneNumber"
              required
              className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
              placeholder="Masukan No.Telepon"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div>
          <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold">Email</h3>
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
          <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold ">Password</h3>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
              placeholder="Masukan Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
          <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold">Konfirmasi Password</h3>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              required
              className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
              placeholder="Konfirmasi Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className='bg-red-700 text-white text-sm font-bold px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150'
          >
            Register
          </button>
        </div>
      </form>
      <a href= "../login" className=" font-sans text-lg ml-52 flex text-right sm:text-right lg:text-right">Sudah Punya Akun?</a>
    </div>
 </div>
);
};

export default Register;