import React from "react";
import Logo from "/LogoSkilHealth.png";

function Jawaban({ data }) {
  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
    const formattedDate = new Date(dateString).toLocaleDateString('id-ID', options);
    return formattedDate;
  };

  return (
    <div className={`bg-slate-200 w-full h-auto flex flex-col px-4 py-2 mt-2 rounded-xl max-w-4xl ${data.jawaban ? "" : "hidden"}`}>
      <span>{formatDate(data.updatedAt)}</span>
      <div className="flex flex-row gap-2 items-center">
        <img src={Logo} alt="logo" className="w-8 h-8 object-cover" />
        <div className="flex flex-col">
          <span className="text-xl font-bold">{data.Dokter.nama}</span>
          <span>{data.Dokter.Spesiali.nama}</span>
        </div>
      </div>

      <p className="mt-4">{data.jawaban}</p>
    </div>
  );
}

export default Jawaban;
