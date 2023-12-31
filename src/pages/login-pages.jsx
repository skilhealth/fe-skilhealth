import React, { useState } from 'react';
import imgSkilhealth from "../assets/logoapp.png";
import Backbutton from "../components/backbutton";
import { Link, useNavigate } from 'react-router-dom';
import validation from "../components/loginValidation";
import { useContext } from 'react';
import { userContext } from '../context/user-provider';



const Login = () => {
  const navigate = useNavigate()
  const { Login, user } = useContext(userContext)
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const [errors, setError] = useState({})

  const handleInput = (e) => {
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError(validation(values));
      const data = await Login(values)
      if (!data) {
        return (
          <div className="p-4 lg:px-24">
            <div className="flex flex-col gap-2">
              <div className="w-full h-full flex justify-center items-center">
                <div className="text-lg font-semibold text-slate-300 absolute top-1/2 -translate-y-1/2">
                  Loading
                </div>
              </div>
            </div>
          </div>
        )
      }
      if (data && (data.message === null || data.message === undefined)) {
        navigate("/")
      }
    } catch (err) {
      console.error(err)
    }
  };

  return (
    <div className='p-4'>
      <Backbutton></Backbutton>
      <div className=" flex item-center justify-center bg-white-100 py-12 px-4 lg: items-center">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="text-center text-2xl font-bold text-gray-900 font-sans">
              Selamat Datang di <br></br> Skilhealth!
            </h2>
          </div>
          <div className="btn-wrapper justify-center item-center sm:px-10 flex items-center">
            <img alt="..." className="mx-auto my-2 w-40" src={imgSkilhealth} />
          </div>

          <form className="mt-8 space-y-6 lg:w-full" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold">Email</h3>
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="off"
                  autoFocus
                  className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
                  placeholder="Masukan Username/Email"
                  onChange={handleInput} required />
                {errors.email && <span className='text-red-600'>{errors.email}</span>}
              </div>
              <div>
                <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold ">Password</h3>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="off"
                  autoFocus
                  className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
                  placeholder="Masukan Password"
                  onChange={handleInput} required />
                {errors.password && <span className='text-red-600'>{errors.password}</span>}
              </div>
            </div>
            <div className='flex ml-2 items-center justify-end'>
              <Link to="/otp" className="text-lg">Lupa password?</Link>
            </div>

            <div>
              <button
                type="submit"
                className='bg-red-700 text-white text-sm font-bold px-6 py-3 rounded-xl shadow hover:shadow-lg hover:opacity-70 outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150'
              >
                Login
              </button>
            </div>
          </form>
          <div className=' flex justify-center items-center'>
            <p>Belum Punya Akun ?</p>
            <Link to="/register" className="ml-1 text-lg font-bold text-red-700 hover:text-red-400">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;