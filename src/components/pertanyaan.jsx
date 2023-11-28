function Pertanyaan({ data }) {
  return (
    <div className="flex flex-col m-4">
      <span>Kamis, 07 - 09 - 2023, 17:00 WIB</span>
      <span className="text-2xl font-bold">{data.judul}</span>
      <span className="text-lg ">Oleh: {data.user}</span>
      <p className="mt-4 border-b border-black border-solid font-semibold text-lg px-2">
        <span>{data.pertanyaan}</span><br></br>

      </p>
    </div>
  );
}

export default Pertanyaan;
