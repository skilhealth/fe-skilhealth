import imgdoctor from "../assets/doctor1.png"

function BookingCard() {
    return (
        <div className="bg-slate-200 w-full h-40 flex p-5 gap-3">
            <div className="h-full">
                <img src={imgdoctor} alt="" className="h-full rounded-xl object-cover" />
            </div>
            <div className="flex flex-col jus">
                <div className="flex items-center gap-2">
                    <div className="p-1 rounded-lg bg-green-500 text-white">Regular</div>
                    12 September 2023
                </div>
                <div className="text-xl font-bold">Dr. Jaydon Schleifer</div>
                <div className="text-base font-medium">Ahli Jantung</div>
                <div className="text-base font-regular">Skilvul Hospital Jakarta</div>
            </div>
        </div>
    )
}
export default BookingCard