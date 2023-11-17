import React, { useState } from 'react';
import imgSkilhealth from "../assets/LogoSkilhealth.png";


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
    <div className="min-h-screen flex justify-center bg-white-q00 py-12 px-4 sm:px-6 items-center lg:px-8">
      <div className="max-w-md w-full space-y-8">
      <div>
          <h2 className="text-center text-2xl font-bold text-gray-900 font-sans">
            Selamat Datang di <br></br> Skilhealth !
          </h2>
        </div>
      <div className="btn-wrapper item-center sm:px-10 flex items-center">
          <img alt="..." className="ml-28 flex w-40 h-40 items-center" src= {imgSkilhealth} />
       </div>
     
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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
          <div>
            <label className="inline-flex items-center cursor-pointer">
                <input id="customCheckLogin" type="checkbox" className="form-checkbox text-gray-800 ml-1 w-5 h-5 ease-linear transition-all duration-150" defaultChecked />
                <span className="ml-2 text-lg font-semibold text-black-700 ">Ingat Saya</span>
                <a href= "../ubah-password" className="text-lg ml-32 ">Lupa password?</a>
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
      <a href= "../register" className=" font-sans ml-52 text-lg flex text-right sm:text-right lg:text-right">Belum Punya Akun?</a>
      </div>
    </div>
 );
};

export default Login;