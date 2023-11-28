function JawabanDokter() {
  return (
    <div className="w-full h-auto flex flex-col px-4 py-2 mt-2">
      <div className="mt-4">
        <span className="text-xl font-bold">Jawaban</span>
        <textarea
          className="bg-white h-72 w-full border-2 border-black rounded-xl px-4 py-2 mt-2 text-base"
          placeholder="Jawab"
        />
      </div>
      <div className="mt-32">
        <button className="bg-red-700 rounded-xl font-medium w-full text-lg text-white p-2">
          Kirim
        </button>
      </div>
    </div>
  );
}

export default JawabanDokter;
