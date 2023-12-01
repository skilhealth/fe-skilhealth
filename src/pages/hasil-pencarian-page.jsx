import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import Backbutton from "../components/backbutton"
import DoctorCard from "../components/doctor-card"
function HasilCariPage() {
    const location = useLocation()
    const filterdata = location.state && location.state.SearchDoc
    console.log(filterdata)
    const [listdokter, setList] = useState(null)
    const Doctor = async (data) => {
        try {
            const response = await axios.post("https://be-skilhealth.up.railway.app/doctors/search", data)
            console.log(response.data.data)
            return response.data.data
        } catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        const fetchData = async (filterdata) => {
            const doctorData = await Doctor(filterdata);
            setList(doctorData);
        };
        fetchData(filterdata);
    }, []);
    console.log(listdokter)
    const data = listdokter
    if (!listdokter) {
        return (
            <div className="p-4 lg:px-24 flex flex-col w-full items-center">
                <Backbutton nama="Hasil Pencarian Dokter " />
                <div className="text-center text:lg lg:text-4xl font-semibold text-slate-400 absolute top-1/2 -translate-y-1/2">
                    Loading
                </div>
            </div>
        )
    }
    return (
        <div className="p-4 lg:px-24 flex flex-col items-center">
            <Backbutton nama="Hasil Pencarian Dokter " />
            <div className="flex flex-col gap-2 max-w-4xl w-full">
                {
                    data === undefined || data.length === 0 ? (
                        <div className="w-full h-full flex justify-center items-center">
                            <div className="text-lg font-semibold text-slate-300 absolute top-1/2 -translate-y-1/2">
                                Dokter Tidak Ditemukan
                            </div>
                        </div>
                    ) : (
                        data.map((item, index) => (
                            <DoctorCard key={index} data={item} />
                        ))
                    )
                }
            </div>
        </div>
    )
}
export default HasilCariPage