import moment from "moment/moment"
import Backbutton from "../components/backbutton"
import PasienCard from "../components/pasien-card"
import "moment"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios"

function ListJanjiPasien() {
    const [listJanji, setJanji] = useState(null)
    const id = localStorage.getItem("userid")
    const token = localStorage.getItem("token")
    const role = localStorage.getItem("role")
    moment.locale("id")
    const Janji = async () => {
        try {
            const response = await axios.get(`https://be-skilhealth.up.railway.app/bookings/doctor?user=${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response.data.data)
            return response.data.data
        } catch (err) {
            console.error(err)
        }
    }
    useEffect(() => {
        const fetchData = async (id) => {
            const listpasien = await Janji(id);
            setJanji(listpasien)
        }
        fetchData(id)
    }, [])

    console.log(listJanji)
    if (!listJanji) {
        return (
            <div className="p-4 lg:px-24">
                <Backbutton nama="Janji pasien " />
                <div className="flex flex-col gap-2">
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="text-lg font-semibold text-slate-300 absolute top-1/2 -translate-y-1/2">
                            Janji Temu Tidak ada
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="p-4 lg:px-24">
            <Backbutton nama="Janji pasien " />
            <div className="flex flex-col gap-2">
                {
                    listJanji === undefined || listJanji.length === 0 ? (
                        <div className="w-full h-full flex justify-center items-center">
                            <div className="text-lg font-semibold text-slate-300 absolute top-1/2 -translate-y-1/2">
                                Janji Temu Tidak ada
                            </div>
                        </div>
                    ) : (

                        listJanji.map((item, index) => (
                            <PasienCard data={item} />
                        ))
                    )

                }

            </div>
        </div>
    )
}
export default ListJanjiPasien