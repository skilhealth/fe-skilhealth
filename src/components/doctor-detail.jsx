

function DoctorDetail({ data }) {

    return (
        <div className="w-full max-w-5xl bg-slate-200 lg:bg-transparent">
            <div className="w-full h-36 lg:h-56 flex p-5 gap-3">
                <div className="h-full">
                    <img src={`${data.images}`} alt="" className="h-full rounded-xl object-cover" />
                </div>
                <div className="flex flex-col gap-2 justify-center">
                    <div>
                        <div className="flex items-center gap-2 md:text-sm">
                            <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${data.status ? "bg-green-500" : "bg-red-500"} `}></div>
                            {data.status ? "Aktif" : "Tidak Aktif"}
                        </div>
                        <div className="text-md md:text-xl lg:text-3xl font-bold">{data.nama}</div>
                    </div>
                    <div>
                        <div className="text-sm md:text-base :text-lg font-medium">{data.Instansi.nama}</div>
                        <div className="text-sm md:text-base lg:text-lg font-regular">{data.Spesiali.nama}</div>
                    </div>
                </div>
            </div>
            <div className="px-4 pb-4 lg:text-lg">
                <div className="mb-2">
                    <h3 className="font-bold">Tentang Dokter</h3>
                    <p className="text-sm md:text-base lg:text-lg">{data.deskripsi}</p>
                </div>
                <div className="mb-2">
                    <h3 className="font-bold">Nomor SKD</h3>
                    <p className="text-sm md:text-base lg:text-lg">{data.skd}</p>
                </div>
                <div className="mb-2">
                    <h3 className="font-bold">Pengalaman Praktek</h3>
                    <ul className="px-4 text-sm md:text-base lg:text-lg">
                        {data.pengalaman.map((item,index) => (
                            <li key={index} className="list-disc">{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="mb-2">
                    <h3 className="font-bold">Pendidikan Terakhir</h3>
                    {data.pendidikan.map((item,index) => (
                        <li key={index} className="list-disc text-sm md:text-base lg:text-lg">{item}</li>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default DoctorDetail