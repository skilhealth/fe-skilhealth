import Backbutton from "../components/backbutton"
import BookingCard from "../components/booking-card"

function ListBooking(){
    return(
        <div className="p-4">
            <Backbutton nama="Jadwal Janji Temu"/>
            <div className="flex flex-col gap-2">
                <BookingCard />
                <BookingCard />
                <BookingCard />
                <BookingCard />
                <BookingCard />
            </div>
        </div>
    )
}
export default ListBooking