import React, { useState } from 'react';
import imgSkilhealth from "../assets/LogoSkilhealth.png";
import Backbutton from "../components/backbutton";


const Login = () => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');


 const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation and API calls here
    console.log('Username:', username);
    console.log('Password:', password);
 };

 return (
  <div>
     <Backbutton></Backbutton>
     <div className=" flex item-center justify-center bg-white-100 py-12 px-4 lg: items-center">
      <div className="max-w-md w-full space-y-8">
      <div>
          <h2 className="text-center text-2xl font-bold text-gray-900 font-sans">
            Selamat Datang di <br></br> Skilhealth !
          </h2>
        </div>
      <div className="btn-wrapper item-center sm:px-10 flex items-center">
          <img alt="..." className="mx-auto my-2 w-40" src= {imgSkilhealth} />
       </div>
     
        <form className="mt-8 space-y-6 lg:w-full" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
            <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold">Username/Email</h3>
              <input
                id="email-username"
                name="username"
                type="text"
                autoComplete="off"
                required
                className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
                placeholder="Masukan Username/Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
            <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold ">Password</h3>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="off"
                autoFocus required
                className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
                placeholder="Masukan Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <label className="flex items-center cursor-pointer">
                <input id="customCheckLogin" type="checkbox" className="form-checkbox text-gray-800 ml-1 w-5 h-5 ease-linear transition-all duration-150" defaultChecked />
                <span className="ml-2 text-lg font-semibold text-black-700 ">Ingat Saya</span>
                <a href= "../ubah-password-otp-pages" className="text-lg font-bold ml-44 lg:justify-center">Lupa password?</a>
            </label>
         </div>

          <div>
          <button
            type="submit"
            className='bg-red-700 text-white text-sm font-bold px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150'
          >
           Login
          </button>
        </div>
      </form>
          <div className=' flex justify-center items-center'>
            <p>Belum Punya Akun ?</p>
            <a href= "../register.pages" className="ml-1 text-lg font-bold text-red-700 hover:text-red-400">Register</a>
          </div>
      </div>
    </div>
  </div>
 );
};

export default Login;