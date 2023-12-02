import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import imgSkilhealth from "../assets/logoapp.png";
import Backbutton from '../components/backbutton';

const ChangePassword = () => {
  const location = useLocation()
  const { email } = location.state && location.state.sendmail
  const navigate = useNavigate()
  console.log(email)
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    const sendNewPassword = async (data) => {
      const response = await axios.post("https://be-skilhealth.up.railway.app/users/change-password", data)
      console.log(response.data.message)
      return response.data.message
    }
    try {

      if (newPassword !== confirmPassword) {
        alert('Password confirmation does not match.');
      } else {
        const data = {
          email: email,
          password: newPassword,
          confirmasiPassword: confirmPassword
        }
        const message = await sendNewPassword(data)
        if (message == 'Berhasil Ganti password') {
          alert('Password has been changed successfully.');
          setNewPassword('');
          setConfirmPassword('');
          navigate("/login")
        }else{
          alert('Gagal ganti Password')
        }
      }
    } catch (err) {
      console.error(err)
    }
    // Perform validation and API calls here
    e.preventDefault();

  };

  return (
    <div className="mb-12 lg:mb-44 flex flex-col items-center justify-center bg-white-100 py-12 px-4 sm:px-6 lg:px-8">
      <Backbutton />
      <div className="max-w-md w-full space-y-5">
        <div className="flex flex-col items-center justify-center ">
          <img alt="..." className="w-20 h-20 lg:w-32 lg:h-32 mb-4 lg:mb-6" src={imgSkilhealth} />
          <h2 className="text-center font-sans text-xl lg:text-2xl font-bold text-gray-900">
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