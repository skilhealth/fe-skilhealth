import React from "react";
import { useNavigate } from "react-router-dom";

function ForumCard() {
  const navigate = useNavigate()

  const toDiskusi = () => {
    navigate('/diskusi')
  }

  return (
    <section className="bg-slate-200 w-full h-32 flex px-4 py-2 rounded-xl" onClick={toDiskusi}>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          {/* status */}
          <span className="text-green-500 font-semibold">Sudah Terjawab</span>

          {/* title */}
          <span className="text-lg font-bold">Susah Tidur di Malam Hari</span>
        </div>
        <div className="flex flex-col">
          {/* sender */}
          <span className="">Oleh: Fulan</span>

          {/* answer */}
          <span className="">Dijawab: Dr. Mira Iskandar</span>
        </div>
      </div>
    </section>
  );
}
export default ForumCard;
