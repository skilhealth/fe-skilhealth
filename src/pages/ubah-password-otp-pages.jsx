import React, { useState } from 'react';
import imgSkilhealth from "../assets/LogoSkilhealth.png";

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
 };

 const handleSendCode = () => {
      // handle the send code logic here
 };

 const handleResend = () => {
    // handle the resend logic here
 };

 return (
    <div className="mb-96 min-h-screen flex items-center justify-center bg-white-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 mb-64">
      <div className="btn-wrapper item-center sm:px-10 flex lg:px-8 items-center">
          <img alt="..." className="ml-36 flex w-20 h-20 items-center" src= {imgSkilhealth} />
       </div>

        <div>
          <h2 className="text-center font-sans text-xl font-bold text-gray-900">
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
              className="font-medium text-red-700 hover:text-red-400 ml-72"
              onClick={handleSendCode}
            >
              Send Code
            </button>
            </div>     
            
          <div>
            <button
              type="button"
              className="bg-red-700 text-white text-sm font-bold px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150 hover:bg-red-600 "
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