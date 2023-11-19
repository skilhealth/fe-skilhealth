import Backbutton from "../components/back-button";

function Pertanyaan() {
  return (
    <main className="p-4">
      <Backbutton nama="Buat Pertanyaan" />
      <div className="mt-4">
        <span className="text-xl font-bold">Judul Diskusi</span>
        <input
          type="text"
          className="bg-white h-11 w-full border-2 border-black rounded-xl mx-auto mt-2 px-4 text-base text"
          placeholder="Masukkan Judul"
        />
      </div>
      <div className="mt-4">
        <span className="text-xl font-bold">Keluhan</span>
        <input
          type="text"
          className="bg-white h-72 w-full border-2 border-black rounded-xl px-4 py-2 text-base text-left align-top"
          placeholder="Masukkan Keluhan"
        />
      </div>
      <div className="mt-48">
        <button className="bg-red-700 rounded-xl font-medium w-full text-lg text-white p-2">
          Kirim
        </button>
      </div>
    </main>
  );
}

export default Pertanyaan;
