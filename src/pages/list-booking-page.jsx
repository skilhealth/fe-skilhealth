import axios from "axios"
import moment from "moment/moment"
import { useEffect } from "react"
import { useState } from "react"
import Backbutton from "../components/backbutton"
import BookingCard from "../components/booking-card"
// pake localhost:4000/bookings?user=1
function ListBooking() {
    const [listJanji, setList] = useState(null)
    const id = localStorage.getItem("userid")
    const token = localStorage.getItem("token")
    const booking = async (id) => {
        try {
            const response = await axios.get(`http://be-skilhealth.up.railway.app/bookings?user=${id}`,{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response.data.message)
            return response.data.data
        } catch (err) {
            console.error(err)
        }
    }
    useEffect(()=>{
        const fetchData = async (id) =>{
            const listbooking = await booking(id);
            setList(listbooking)
        }
        fetchData(id)
    },[])
    console.log(listJanji)
    
    if(!listJanji){
        return(
            <div>Tidak ada Dokter</div>
        )
    }
    return (
        <div className="p-4 lg:px-24 flex flex-col items-center w-full">
            <Backbutton nama="Jadwal Janji Temu" />
            <div className="flex flex-col gap-2 max-w-5xl w-full mt-2">
                {
                    listJanji.map((item, index) => (
                        <BookingCard key={index} data={item} />
                    ))
                }
            </div>
        </div>
    )
}
export default ListBooking