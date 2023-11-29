import React from "react";

function Pertanyaan({ data }) {
  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateString).toLocaleDateString('id-ID', options);
    return formattedDate;
  };

  return (
    <div className="flex flex-col m-4 max-w-4xl w-full">
      <span>{formatDate(data.createdAt)}</span>
      <span className="text-2xl font-bold">{data.judul}</span>
      <span className="text-lg">Oleh: {data.User.nama}</span>
      <p className="mt-4">{data.pertanyaan}</p>
    </div>
  );
}

export default Pertanyaan;
