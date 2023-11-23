import React from "react";
import { useNavigate } from "react-router-dom";
import Backbutton from "../components/back-button";
import ListForum from "../components/list-forum";
import Paginations from "../components/pagination";

function Forum() {
  const navigate = useNavigate();

  const toPertanyaan = () => {
    navigate("/pertanyaan"); 
  };

  return (
    <main className="p-4">
      <Backbutton nama="Forum Chat" />
      <button
        className="bg-red-700 rounded-xl font-medium w-full text-lg text-white p-2 my-4"
        onClick={toPertanyaan}
      >
        Buat Pertanyaan
      </button>

      {/*input cari forum */}
      <input
        type="text"
        className="bg-white h-11 w-full mb-4 border-2 border-black rounded-xl my-4 mt-2 px-4 text-base text"
        placeholder="Cari Forum"
      />

      <span className="text-3xl my-4 font-bold">Sudah Terjawab</span>
      <ListForum />
      <Paginations />

      <span className="text-3xl my-4 font-bold">Belum Terjawab</span>
      <ListForum />
      <Paginations />
    </main>
  );
}
export default Forum;
