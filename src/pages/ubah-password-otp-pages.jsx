import React, { useState } from 'react';
import imgSkilhealth from "../assets/LogoSkilhealth.png";
//import {useHistory} from 'react-router-dom'

const OTPComponent = () => {
 const [email, setEmail] = useState('');
 const [otp, setOtp] = useState('');
 const [otpError, setOtpError] = useState(false);

 const handleSubmit = (e) => {
    e.preventDefault();
    // handle the submit logic here

 };

 const handleVerify = () => {
    // handle the verification logic here
    // Logic here
    // Navigate ke "UbahPassword Page"

    // Success message
    alert('Verifikasi Berhasil')

 };

 const handleSendCode = () => {
      // handle the send code logic here
 };

 const handleResend = () => {
    // handle the resend logic here
 };

 return (
    <div className="mb-12 lg:mb-44 flex flex-col items-center justify-center bg-white-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-5">
      <div className="flex flex-col items-center justify-center">
          <img alt="..." className="w-20 h-20 lg:w-32 lg:h-32 mb-4 lg:mb-6" src= {imgSkilhealth} />
          <h2 className="text-center font-sans text-xl lg:text-2xl font-bold text-gray-900">
            Ubah Password
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
            <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold ">Email</h3>
              <input
                id="email-address"
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

            <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold ">Kode OTP</h3>
              <input
                id="otp"
                name="otp"
                type="text"
                autoComplete="off"
                required
                className={`px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm ${
                 otpError ? 'border-red-500' : ''
                }`}
                placeholder="Masukkan Kode OTP"
                value={otp}
                onChange={(e) => {
                 setOtp(e.target.value);
                 setOtpError(false);
                }}
              />
            </div>
          </div>

          <div>
           <button
              type="button"
              className="font-medium text-red-700 hover:text-red-400 text-left lg:text-right"
              onClick={handleSendCode}
            >
              Send Code
            </button>
            </div>     
            
          <div>
            <button
              type="button"
              className="bg-red-700 text-white text-sm font-bold px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none w-full ease-linear transition-all duration-150 hover:bg-red-600 "
              onClick={handleVerify}
            >
              Verify
            </button>
          </div>

          <div className="text-center text-sm text-gray-500">
            Belum menerima kode OTP?{' '}
            <button
              type="button"
              className="font-medium text-red-700 hover:text-red-400"
              onClick={handleResend}
            >
              Resend Code
            </button>
          </div>
        </form>
     </div>
    </div>
 )
};

export default OTPComponent