import { useState } from "react"

function JadwalDokter({jadwal,useharga}) {
    const [selectOption, setoption] = useState("")
    const handleOption = (id,harga) => {
        setoption(id)
        useharga(harga)
    }
    return (
        <div className="bg-slate-200 w-full mt-2 p-2">
            <h3 className="text-lg font-bold mb-2">Jadwal Praktik</h3>
            <div className="flex text-xs gap-3">
                {
                    jadwal.map((item,index) => (
                        <label key={index} className={`flex flex-col w-max rounded-md p-2 border-2 ${(selectOption === index) ? "border-red-700 bg-red-700 text-white" : "border-black"}`}>
                            <input type="radio" name="jadwal" value={"senin"} className="hidden" onChange={() => handleOption(index,item.harga)} />
                            <div className="">{item.tipe}</div>
                            <div className="">{item.hari},</div>
                            <div className="">{item.tgl}</div>
                        </label>
                    ))
                }
            </div>
        </div>
    )
}
export default JadwalDokter