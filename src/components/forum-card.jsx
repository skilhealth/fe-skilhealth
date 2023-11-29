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
              data.status
                ? "text-green-500 font-semibold text-xs"
                : "text-red-500 font-semibold text-xs"
            }
          >
            {data.status ? "Sudah Terjawab" : "Belum Terjawab"}
          </span>

          {/* title */}
          <span className="text-lg font-bold">{data.judul}</span>
        </div>
        <div className="flex flex-col">
          {/* sender */}
          <span className="">Oleh: {data.User.nama}</span>

          {/* answer */}
          {data.status && (
            <span className={`${data.Dokter ? "" : "hidden"}`}>
              Dijawab: {data.Dokter.nama}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
export default ForumCard;
