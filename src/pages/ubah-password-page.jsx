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
  <div className="mb-96 min-h-screen flex items-center justify-center bg-white-100 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-md w-full space-y-8 mb-64">
    <div className="btn-wrapper item-center sm:text-sm items-center flex ml-10">
        <img alt="..." className="ml-36 flex w-20 h-20 sm:text-sm items-center" src= {imgSkilhealth} />
     </div>

      <div>
        <h2 className="text-center font-sans text-xl font-bold text-gray-900">
          Ubah Password
        </h2>
      </div>
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
          <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold ">Password Baru</h3>
            <input
              id="newPassword"
              name="password"
              type="password"
              autoComplete="off"
              required
              className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
              placeholder="Masukan Password Baru"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              />
          </div>
          <div>

          <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold ">Konfirmasi Password Baru</h3>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              autoComplete="off"
              required
              className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
              placeholder="Masukkan Password Baru"
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
            Ubah Password
          </button>
        </div>
      </form>
    </div>
  </div>
);
};

export default ChangePassword;