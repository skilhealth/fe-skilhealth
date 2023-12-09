import moment from "moment/moment"
import Backbutton from "../components/backbutton"
import 'moment/locale/id'
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import Loading from "../components/loading"

function HasilUjiLab() {
    const [data, setAntrian] = useState()
    const token = localStorage.getItem("token")
    moment.locale('id')
    const Booking = async (id) => {
        try {
            const response = await axios.get(`https://be-skilhealth.up.railway.app/bookings/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            return response.data.data
        } catch (err) {
            console.error(err)
        }
    }

    const { id } = useParams()
    useEffect(() => {
        const fetchData = async () => {
            const antrianData = await Booking(id);
            setAntrian(antrianData);
        };
        fetchData();
    }, []);
    const toggle = async (data) => {
        try {
            const response = await axios.patch(`https://be-skilhealth.up.railway.app/bookings/${id}/toggle`,{status:data} ,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        } catch (err) {
            console.error(err)
        }
    }
    const handleToggle = (e) => {
        const newStatus = e.target.value === "false"
        toggle(newStatus)
    }

    if (!data) {
        return (
            <Loading/>
        )
    }
    return (
        <div className="p-4 lg:px-24 flex flex-col items-center">
            <Backbutton nama="Catatan Medis" />
            <div className="w-full mb-4 max-w-5xl">
                <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold">Status Janji Temu</h3>
                <select value={data.status} onChange={handleToggle} name='status' className='px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm'>
                    <option value="true">Sudah Selesai</option>
                    <option value="false">Belum Mulai</option>
                </select>
            </div>
            <div className="bg-slate-200 w-full py-6 px-4 rounded-xl max-w-5xl">
                <div className="border-b-4 border-slate-300 py-4    ">
                    <div className=" text-sm lg:text-base">{`Hari ${moment(data.ujilab.createdAt).format('dddd')}, ${moment(data.ujilab.createdAt).format('DD-MM-YYYY')} / ${data.ujilab.id}`}</div>
                    <h1 className="text-xl lg:text-2xl font-bold">{data.ujilab.judul}</h1>
                    <div className="text-sm lg:text-base">{data.User.nama}</div>
                </div>
                <div className="py-4">
                    <div className="mb-4">
                        <h3 className="text-xl lg:text-2xl  font-bold mb-2">Keluhan</h3>
                        <p className="lg:text-lg">
                            {data.ujilab.keluhan}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl lg:text-2xl font-bold mb-2">Diagnosa</h3>
                        <p className="lg:text-lg">
                            {data.ujilab.diagnosa}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl lg:text-2xl font-bold mb-2">Catatan</h3>
                        <p className="lg:text-lg">
                            {data.ujilab.catatan}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HasilUjiLab