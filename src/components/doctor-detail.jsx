import imgdoctor from "../assets/doctor1.png"

function DoctorDetail() {
    return (
        <div className="w-full bg-slate-200">
            <div className="bg-slate-200 w-full h-40 flex p-5 gap-3">
                <div className="h-full">
                    <img src={imgdoctor} alt="" className="h-full rounded-xl object-cover" />
                </div>
                <div className="flex flex-col jus">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-green-500"></div>
                        Sedang di Rumah Sakit
                    </div>
                    <div className="text-xl font-bold">Dr. Jaydon Schleifer</div>
                    <div className="text-base font-medium">Ahli Jantung</div>
                    <div className="text-base font-regular">Skilvul Hospital Jakarta</div>
                </div>
            </div>
            <div className="px-4 pb-4">
                <div className="mb-2">
                    <h3 className="font-bold">Tentang Dokter</h3>
                    <p className="text">Dr. Jaydon Schleifer adalah seorang spesialis jantung berpengalaman dengan lebih dari
                        15 tahun praktik medis.Saat ini Beliau praktik di skilvul Hospital Jakarta.</p>
                </div>
                <div className="mb-2">
                    <h3 className="font-bold">Nomor SKD</h3>
                    <p className="text">10297361028361</p>
                </div>
                <div className="mb-2">
                    <h3 className="font-bold">Pengalaman Praktek</h3>
                    <ul className="px-4">
                        <li className="list-disc">RSUD ANU</li>
                        <li className="list-disc">RSUD ANU</li>
                    </ul>
                </div>
                <div className="mb-2">
                    <h3 className="font-bold">Pendidikan Terakhir</h3>
                    <p className="text">Universitas Kedokteran</p>
                </div>
            </div>
        </div>
    )
}
export default DoctorDetail