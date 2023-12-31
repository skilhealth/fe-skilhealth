import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imgSkilhealth from "../assets/logoapp.png";
import Backbutton from '../components/backbutton';
//import {useHistory} from 'react-router-dom'

const OTPComponent = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate()

  const handleVerify = async (e) => {
    e.preventDefault()
    try {
      const sendmail = {
        email: email
      }
      const send = async (data) => {
        const response = await axios.post("https://be-skilhealth.up.railway.app/users/email-send", data)
        return response.data.message
      }
      const message = await send(sendmail)
      if (message === "Email Terdaftar") {
        navigate("/gantipass",{state:{sendmail}})
      } else {
        alert(message)
      }
    } catch (err) {
      console.error(err)
    }


  };

  return (
    <div className="mb-12 lg:mb-44 flex flex-col items-center justify-center bg-white-100 py-12 px-4 sm:px-6 lg:px-8">
      <Backbutton />
      <div className="max-w-md w-full space-y-5">
        <div className="flex flex-col items-center justify-center">
          <img alt="..." className="w-20 h-20 lg:w-32 lg:h-32 mb-4 lg:mb-6" src={imgSkilhealth} />
          <h2 className="text-center font-sans text-xl lg:text-2xl font-bold text-gray-900">
            Ubah Password
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleVerify}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold ">Email</h3>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="off"
                className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
                placeholder="Masukan Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>


            </div>
          </div>



          <div>
            <button
              type="submit"
              className="bg-red-700 text-white text-sm font-bold px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none w-full ease-linear transition-all duration-150 hover:bg-red-600 "
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  )
};

export default OTPComponent