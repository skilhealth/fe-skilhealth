import { useState } from "react"

function JadwalDokter({jadwal,useharga,useidjadwal}) {
    const [selectOption, setoption] = useState("")
    const handleOption = (id,harga,idjd) => {
        setoption(id)
        useharga(harga)
        useidjadwal(idjd)
    }

    return (
        <div className="bg-slate-200 lg:bg-transparent w-full p-2">
            <h3 className="lg:pb-4 lg:border-b-2 border-slate-500 text-lg lg:text-2xl font-bold mb-2 lg:text-center lg:mb-4">Jadwal Praktik</h3>
            <div className="flex text-xs gap-3">
                {
                    jadwal.map((item,index) => (
                        <label key={index} className={`flex flex-col w-max rounded-md p-2 border-2 ${(selectOption === index) ? "border-red-700 bg-red-700 text-white" : "border-black"}`}>
                            <input type="radio" name="jadwal" value={item.id} className="hidden" onChange={() => handleOption(index,item.harga,item.id)} />
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