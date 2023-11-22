

function DoctorDetail({ data }) {
    return (
        <div className="w-full bg-slate-200">
            <div className="bg-slate-200 w-full h-40 flex p-5 gap-3">
                <div className="h-full">
                    <img src={`${data.img}`} alt="" className="h-full rounded-xl object-cover" />
                </div>
                <div className="flex flex-col jus">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-green-500"></div>
                        {data.rs}
                    </div>
                    <div className="text-xl font-bold">{data.nama}</div>
                    <div className="text-base font-medium">{data.spesialis}</div>
                    <div className="text-base font-regular">{data.rs}</div>
                </div>
            </div>
            <div className="px-4 pb-4">
                <div className="mb-2">
                    <h3 className="font-bold">Tentang Dokter</h3>
                    <p className="text">{data.keterangan}</p>
                </div>
                <div className="mb-2">
                    <h3 className="font-bold">Nomor SKD</h3>
                    <p className="text">{data.skd}</p>
                </div>
                <div className="mb-2">
                    <h3 className="font-bold">Pengalaman Praktek</h3>
                    <ul className="px-4">
                        {data.pengalaman.map((item,index) => (
                            <li key={index} className="list-disc">{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="mb-2">
                    <h3 className="font-bold">Pendidikan Terakhir</h3>
                    {data.pendidikan.map((item,index    ) => (
                            <li key={index} className="list-disc">{item}</li>
                        ))}
                </div>
            </div>
        </div>
    )
}
export default DoctorDetail