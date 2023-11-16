import React from 'react';
import imgSkilhealth from "../assets/LogoSkilHealth.png"

function Login () {
    return (
        <div className="bg-cover bg-center">
            <div className="container mx-auto px-4 h-full">
                <div className="flex content-center items-center justify-center h-full">
                    <div className="w-full lg:w-6/12 px-4">
                            <div className="rounded-t mb-0 px-6 py-6">
                                <div className="text-center mb-3">
                                    <h1 className=" text-2xl font-sans font-bold">
                                        Selamat Datang <br></br> di SkilHealth !
                                    </h1>
                                </div>
                                <div className="btn-wrapper text-center">
                                        <img alt="..." className="ml-16 flex w-40 h-40" src= {imgSkilhealth} />
                                </div>
                            </div>
                            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                <form id='form-login' autoComplete='off'>
                                    <div className="relative w-full mb-3">
                                        <label className="block font-sans text-lg font-bold mb-2" htmlFor="grid-password">Username / Email</label>
                                        <input type="email" className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full" placeholder="Masukan Username/Email" autoFocus required />
                                    </div>
                                    <div className="relative w-full mb-3">
                                        <label className="block font-sans text-lg font-bold mb-2" htmlFor="grid-password">Password</label>
                                        <input type="password" className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline w-full" placeholder="Masukan Password" required />
                                    </div>
                                    <div>
                                        <label className="inline-flex items-center cursor-pointer">
                                            <input id="customCheckLogin" type="checkbox" className="form-checkbox text-gray-800 ml-1 w-5 h-5 ease-linear transition-all duration-150" defaultChecked />
                                            <span className="ml-2 text-lg font-semibold text-black-700">Ingat Saya</span>
                                            <a href= "" className="text-lg ml-16">Lupa password</a>
                                        </label>
                                    </div>
                                    <div className="text-center mt-6">
                                        <button className="bg-red-700 text-white text-sm font-bold px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150">
                                            Login
                                        </button>
                                    </div>
                                    <a href= "../register" className="text-lg ml-40">Belum Punya Akun?</a>
                                </form>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;