import Backbutton from "../components/backbutton"
import qrcode from "../assets/qrcode.png"
import CheckInDetail from "../components/checkin-detail"
import CheckInCard from "../components/checkin-card"
import moment from "moment/moment"
import { useLocation, useParams } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"

function CheckIn() {
    const [checkin, setCheckin] = useState()
    const token = localStorage.getItem("token")
    const Booking = async (id) => {
        try {
            const response = await axios.get(`https://be-skilhealth.up.railway.app/bookings/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response.data)
            return response.data
        } catch (err) {
            console.error(err)
        }
    }
    const { id } = useParams()
    useEffect(() => {
        const fetchData = async () => {
            const antrianData = await Booking(id);
            setCheckin(antrianData);
        };
        fetchData();
    }, [id]);
    console.log(checkin)

    if (!checkin) {
        return (
            <div></div>
        )
    }
    return (
        <div className="p-4 lg:py-10 flex flex-col items-center">
            <Backbutton nama="Check In dan Antrian" />
            <div className="flex flex-col w-full lg:flex-row lg:border-2 lg:rounded-xl border-slate-500 lg:max-w-4xl lg:p-4">
                <div className="w-full flex justify-center lg:w-auto lg:flex-2">
                    <img src={qrcode} alt="" className="lg:h-[480px]" />
                </div>
                <div className="lg:flex-1 lg:flex lg:flex-col-reverse lg:justify-end lg:py-8">
                    <CheckInDetail antrian={checkin.antrian} token={checkin.data.token} tgl={moment(checkin.data.Jadwal.date)} />
                    <CheckInCard data={checkin.data.Dokter} booking={Booking} setCheckin={(data)=>setCheckin(data)} id={id}/>
                </div>
            </div>
        </div>
    )
}
export default CheckIn