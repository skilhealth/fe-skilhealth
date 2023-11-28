import Logo from "/LogoSkilHealth.png";

function Jawaban({ data }) {
  return (
    <div className="bg-slate-200 w-full h-auto flex flex-col px-4 py-2 mt-2 rounded-xl max-w-4xl">
      <span>Kamis, 07 - 09 - 2023, 17:00 WIB</span>
      <div className="flex flex-row gap-2 items-center">
        <img src={Logo} alt="logo" className="w-8 h-8 object-cover"/>
        <div className="flex flex-col">
          <span className="text-xl font-bold">{data.dokter}</span>
          <span>{data.spesialis}</span>
        </div>
      </div>

      <p className="mt-4">{data.jawaban}</p>
    </div>
  );
}

export default Jawaban;
