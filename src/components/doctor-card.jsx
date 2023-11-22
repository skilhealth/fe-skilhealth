function DoctorCard() {
    return (
        <div className="bg-slate-200 w-full h-40 flex p-5 gap-3">
            <div className="h-full">
                <img src="" alt="" className="h-full rounded-xl object-cover" />
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
    )
}
export default DoctorCard