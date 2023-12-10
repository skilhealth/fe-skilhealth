import React from "react";
import { useState } from "react";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Backbutton from "../components/backbutton";
import { forumContext } from "../context/forum-provider";
import { userContext } from "../context/user-provider"

function BuatPertanyaan() {
  const {isLogin} = useContext(userContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (!isLogin) {
            navigate("/login")
        }
    }, [isLogin])

  const { AddForum } = useContext(forumContext)
  const [judul, setJudul] = useState()
  const [keluhan, setKeluhan] = useState()
  const [errorMessage, setErrorMessage] = useState("");
  const user_id = localStorage.getItem("userid")

  const handleAdd = (e) => {
    e.preventDefault();
  
    // Periksa apakah data kosong
    if (!judul || !keluhan) {
      setErrorMessage("Judul dan keluhan harus diisi.");
      return;
    }

    const newForum = {
      user_id: user_id,
      judul: judul,
      pertanyaan: keluhan,
      status: false,
    };
  
    AddForum(newForum);
    navigate("/forum");
  };

  return (
    <form className="p-4 lg:px-24 flex flex-col items-center grow">
      <Backbutton nama="Buat Pertanyaan" />
      <div className="mt-4 max-w-xl w-full">
        <span className="text-xl font-bold">Judul Diskusi</span>
        <input
          type="text"
          onChange={(e) => setJudul(e.target.value)}
          value={judul}
          className="bg-white h-11 w-full border-2 border-black rounded-xl mx-auto mt-2 px-4 text-base text"
          placeholder="Masukkan Judul"
        />
      </div>
      <div className="mt-4 max-w-xl w-full">
        <span className="text-xl font-bold">Keluhan</span>
        <textarea
          onChange={(e) => setKeluhan(e.target.value)}
          value={keluhan}
          className="bg-white h-72 w-full border-2 border-black rounded-xl px-4 py-2 mt-2 text-base"
          placeholder="Masukkan Keluhan"
        />
      </div>
      <div className="mt-12 max-w-xl w-full">
        <div className="flex justify-center pb-4 font-bold">
          {errorMessage && <span className="text-red-500 text-center">{errorMessage}</span>}
        </div>
        <button onClick={handleAdd} type="submit" className="bg-red-700 rounded-xl font-medium w-full text-lg text-white p-2 hover:opacity-70 transition duration-200">
          Kirim
        </button>
      </div>
    </form>
  );
}

export default BuatPertanyaan;
