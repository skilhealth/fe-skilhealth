import React, { useState } from 'react';
import imgSkilhealth from "../assets/LogoSkilhealth.png";

const ChangePassword = () => {
 const [newPassword, setNewPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');

 const handleSubmit = (e) => {

       // Perform validation and API calls here
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert('Password confirmation does not match.');
    } else {
      alert('Password has been changed successfully.');
      setNewPassword('');
      setConfirmPassword('');
    }
 };

 return (
    <div className="w-full max-w-md mx-auto my-10">
     <div className="btn-wrapper item-center sm:px-10 flex lg:px-8 items-center">
          <img alt="..." className="ml-40 flex w-20 h-20 items-center" src= {imgSkilhealth} />
       </div>
       <h2 className="text-center text-2xl font-bold text-gray-900 font-sans">
            Ubah Password
          </h2>
      <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm -space-y-px">
        <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold">Password Baru</h3>
          <input
            className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
            id="newPassword"
            type="password"
            placeholder="Masukan password baru"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div className="">
        <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold">Konfirmasi password baru</h3>
          <input
            className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
            id="confirmPassword"
            type="password"
            placeholder="Masukan password baru"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            className='bg-red-700 text-white text-sm font-bold px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150'
          >
            Ubah Password
          </button>
        </div>
      </form>
    </div>
 );
};

export default ChangePassword;