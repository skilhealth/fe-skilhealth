import moment from "moment/moment"
import Backbutton from "../components/backbutton"
import 'moment/locale/id'
import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import Loading from "../components/loading"
// get ujilab by id
function UjilabDetail() {
    const [data, setAntrian] = useState()
    const token = localStorage.getItem("token")
    moment.locale('id')
    const Booking = async (id) => {
        try {
            const response = await axios.get(`https://be-skilhealth.up.railway.app/ujilab/${id}`, {
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
    }, [id]);
    if (!data) {
        return (
            <Loading/>
        )
    }
    return (
        <div className="p-4 lg:px-24 flex flex-col items-center">
            <Backbutton nama="Informasi Medis" />
            <div className="bg-slate-200 w-full py-6 px-4 rounded-xl max-w-5xl">
                <div className="border-b-4 border-slate-300 py-4    ">
                    <div className=" text-sm lg:text-base">{`Hari ${moment(data.createdAt).format('dddd')}, ${moment(data.createdAt).format('DD-MM-YYYY')} / ${data.id}`}</div>
                    <h1 className="text-xl lg:text-2xl font-bold">{data.judul}</h1>
                    <div className="text-sm lg:text-base">{data.Dokter.nama}</div>
                </div>
                <div className="py-4">
                    <div className="mb-4">
                        <h3 className="text-xl lg:text-2xl  font-bold mb-2">Keluhan</h3>
                        <p className="lg:text-lg">
                            {data.keluhan}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl lg:text-2xl font-bold mb-2">Diagnosa</h3>
                        <p className="lg:text-lg">
                            {data.diagnosa}
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl lg:text-2xl font-bold mb-2">Catatan</h3>
                        <p className="lg:text-lg">
                            {data.catatan}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UjilabDetail