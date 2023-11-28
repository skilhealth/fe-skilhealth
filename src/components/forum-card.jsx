import React from "react";
import { useNavigate } from "react-router-dom";

function ForumCard({ data }) {
  const navigate = useNavigate();

  const toDiskusi = () => {
    navigate(`/forum/${data.id}`, { state: { data } });
  };

  return (
    <section
      className="bg-slate-100 w-full flex p-4 rounded-xl lg:min-w-[370px] flex-1 mb-2"
      onClick={toDiskusi}
    >
      <div className="flex flex-col justify-center">
        <div className="flex flex-col">
          {/* status */}
          <span
            className={
              data.status === "Sudah Terjawab"
                ? "text-green-500 font-semibold text-xs"
                : "text-red-500 font-semibold text-xs"
            }
          >
            {data.status}
          </span>

          {/* title */}
          <span className="text-lg font-bold">{data.judul}</span>
        </div>
        <div className="flex flex-col">
          {/* sender */}
          <span className="">Oleh: {data.user}</span>

          {/* answer */}
          
          <span className={`${data.dokter?"":"hidden"}`}>Dijawab: {data.dokter}</span>
        </div>
      </div>
    </section>
  );
}
export default ForumCard;
