import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import Backbutton from "../components/backbutton"
import DoctorCard from "../components/doctor-card"
function HasilCariPage() {
    const location = useLocation()
    let message = ""
    const filterdata = location.state && location.state.SearchDoc
    const [listdokter, setList] = useState(null)
    const Doctor = async (data) => {
        try {
            const response = await axios.post("https://be-skilhealth.up.railway.app/doctors/search", data)
            message = response.data.message
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
    const data = listdokter
    console.log(data)
    if (!listdokter) {
        return (
            <div className="p-4 lg:px-24">
                <Backbutton nama="Janji pasien " />
                <div className="flex flex-col gap-2">
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="text-lg font-semibold text-slate-300 absolute top-1/2 -translate-y-1/2">
                            Tidak Ada Dokter
                        </div>
                    </div>
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