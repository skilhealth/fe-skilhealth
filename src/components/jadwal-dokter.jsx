import { useState } from "react"

function JadwalDokter() {
    const [selectOption, setoption] = useState("")
    const handleOption = (id) => {
        setoption(id)
    }
    return (
        <div className="bg-slate-200 w-full mt-2 p-2">
            <h3 className="text-lg font-bold mb-2">Jadwal Praktik</h3>
            <div className="flex text-xs justify-between">
                <label className={`flex flex-col w-max rounded-md p-2 border-2 ${(selectOption === 1) ? "border-red-700 bg-red-700 text-white" : "border-black"}`}>
                    <input type="radio" name="jadwal" value={"senin"} className="hidden" onChange={() => handleOption(1)} />
                    <div className="">Regular</div>
                    <div className="">Selasa,</div>
                    <div className="">12-12-2023</div>
                </label>
                <label className={`flex flex-col w-max rounded-md p-2 border-2 ${(selectOption === 2) ? "border-red-700 bg-red-700 text-white" : "border-black"}`}>
                    <input type="radio" name="jadwal" value={"senin"} className="hidden" onChange={() => handleOption(2)} />
                    <div className="">Regular</div>
                    <div className="">Selasa,</div>
                    <div className="">12-12-2023</div>
                </label>
                <label className={`flex flex-col w-max rounded-md p-2 border-2 ${(selectOption === 3) ? "border-red-700 bg-red-700 text-white" : "border-black"}`}>
                    <input type="radio" name="jadwal" value={"senin"} className="hidden" onChange={() => handleOption(3)} />
                    <div className="">Regular</div>
                    <div className="">Selasa,</div>
                    <div className="">12-12-2023</div>
                </label>
                <label className={`flex flex-col w-max rounded-md p-2 border-2 ${(selectOption === 4) ? "border-red-700 bg-red-700 text-white" : "border-black"}`}>
                    <input type="radio" name="jadwal" value={"senin"} className="hidden" onChange={() => handleOption(4)} />
                    <div className="">Regular</div>
                    <div className="">Selasa,</div>
                    <div className="">12-12-2023</div>
                </label>
            </div>
        </div>
    )
}
export default JadwalDokter