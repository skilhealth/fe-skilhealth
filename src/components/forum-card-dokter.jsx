import React from "react";
import { useNavigate } from "react-router-dom";

function ForumCardDokter({ data }) {
  const navigate = useNavigate();

  const toDiskusiDokter = () => {
    navigate("/diskusi-dokter", { state: { data } });
  };

  return (
    <section
      className="bg-slate-200 w-full h-32 flex px-4 py-2 mt-2 rounded-xl"
      onClick={toDiskusiDokter}
    >
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          {/* status */}
          <span
            className={
              data.status === "Sudah Terjawab"
                ? "text-green-500 font-semibold"
                : "text-red-500 font-semibold"
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
          <span className="">Dijawab: {data.dokter}</span>
        </div>
      </div>
    </section>
  );
}
export default ForumCardDokter;
