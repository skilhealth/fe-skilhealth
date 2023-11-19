function ForumCard() {
  return (
    <section className="bg-slate-200 w-full h-32 flex px-4 py-2 rounded-xl">
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <span className="text-green-500 font-semibold">Sudah Terjawab</span>
          <span className="text-lg font-bold">Susah Tidur di Malam Hari</span>
        </div>
        <div className="flex flex-col">
          <span className="">Oleh: Fulan</span>
          <span className="">Dijawab: Dr. Mira Iskandar</span>
        </div>
      </div>
    </section>
  );
}
export default ForumCard;
