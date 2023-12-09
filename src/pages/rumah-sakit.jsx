import SearchHospital from "../components/search";
import Backbutton from '../components/backbutton';
import HospitalCard from "../components/rs-card";
import { useContext } from "react";
import { instansiContext } from "../context/instansi-provider";
import { useState } from "react";
import Loading from "../components/loading";
function Hospital() {
    const { instansi } = useContext(instansiContext)
    const [searchhospital,setHospital] = useState("")
    if (!instansi) return (
        <Loading/>
    )
    const list = instansi.filter((item)=>item.nama.toLowerCase().includes(searchhospital.toLowerCase()))
    return (
        <div className="p-4 lg:px-24">
            <Backbutton nama=" Rumah Sakit" />
            {/* <SearchHospital></SearchHospital> */}
            <h1>Hospital</h1>
            <form className="w-full max-w-sm mx-auto">
                <div className="rounded-md shadow-sm -space-y-px">
                    <input
                        className="px-5 py-5 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-600 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
                        type="text"
                        placeholder="Cari rumah sakit"
                        value={searchhospital}
                        onChange={((e)=>setHospital(e.target.value))}
                    />
                </div>
            </form>
            {
                list.map((item, index) => (
                    <HospitalCard key={index} name={item.nama} area={item.area} imghospital="{imghospital}" alamat={item.alamat} />
                ))
            }
        </div>
    )
}

export default Hospital