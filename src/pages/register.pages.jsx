import React, { useState } from 'react';
import imgSkilhealth from "../assets/LogoSkilhealth.png";
import Backbutton from "../components/backbutton";
import { Link } from 'react-router-dom';
import Validation from '../components/regisValidation';


const Register = () => {
  const[values, setValues] = useState({
    nama: '',
    dateOfBirth: '',
    gender: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const[errors, setError] = useState({})

  const handleInput = (e) => {
      setValues(prev => ({...prev,[e.target.name]: [e.target.value]}))
  }

 const handleSubmit = (e) => {
    e.preventDefault();
    setError(Validation(values));
 }

 return (
  <div>
      <Backbutton></Backbutton>
      <div className=" flex item-center justify-center bg-white-100 py-3 px-4 lg: items-center">
      <div className="max-w-md w-full space-y-4">
      <img alt="..." className="mx-auto w-16" src= {imgSkilhealth} />
          <h2 className="text-center text-xl font-bold text-gray-900 font-sans">
            Selamat Datang di <br></br> Skilhealth !
          </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px"></div>
            <div>
            <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold">Nama</h3>
              <input
                id="name"
                name="nama"
                type="text"
                autoComplete="off"
                autoFocus
                className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
                placeholder="Masukan Nama"
                onChange={handleInput} />
                {errors.nama && <span className='text-red-600'>{errors.nama}</span>}
            </div>
            <div>
            <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold ">Tanggal Lahir</h3>
              <input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                autoComplete="dateOfBirth"
                className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
                placeholder="Masukan Tanggal Lahir"
                onChange={handleInput} />
                {errors.dateOfBirth && <span className='text-red-600'>{errors.dateOfBirth}</span>}
            </div>
            <div>
            <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold">Jenis Kelamin</h3>
              <select onChange={handleInput}name='jenis kelamin' className='px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm '>
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
              className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
              placeholder="Masukan No.Telepon"
              onChange={handleInput} />
              {errors.phoneNumber && <span className='text-red-600'>{errors.phoneNumber}</span>}
          </div>
          <div>
          <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold">Email</h3>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="off"
              className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
              placeholder="Masukan Email"
              onChange={handleInput} />
              {errors.email && <span className='text-red-600'>{errors.email}</span>}
          </div>
          <div>
          <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold ">Password</h3>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
              placeholder="Masukan Password"
              onChange={handleInput} />
              {errors.password && <span className='text-red-600'>{errors.password}</span>}
          </div>
          <div>
          <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold">Konfirmasi Password</h3>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="new-password"
              className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
              placeholder="Konfirmasi Password"
              onChange={handleInput} />
              {errors.confirmPassword && <span className='text-red-600'>{errors.confirmPassword}</span>}
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
      <Link to= "/" className=" text-lg lg:text-right">Sudah Punya Akun?</Link>
    </div>
 </div>
  </div>
    
);
};

export default Register;

