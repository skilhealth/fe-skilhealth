import moment from "moment/moment"
import Backbutton from "../components/backbutton"
import BookingCard from "../components/booking-card"

function ListBooking() {
    const { data } = {
        data: [{
            nama: "Dr. Jaydon Schleifer",
            img: "/images/dokter/doctor1.png",
            spesialis: "Ahli Jantung",
            rs: "Skivul Hospital Jakarta",
            jadwal: {
                tipe: "Regular",
                date: moment("2023-12-14").format('DD-MM-YYYY')
            }
        },
        {
            nama: "Dr. JaydonG Schleifer",
            img: "/images/dokter/doctor1.png",
            spesialis: "Ahli Jantung",
            rs: "Skivul Hospital Jakarta",
            jadwal: {
                tipe: "Homecare",
                date: moment("2023-12-14").format('DD-MM-YYYY')
            }
        }, {
            nama: "Dr. Jaydone Schleifer",
            img: "/images/dokter/doctor1.png",
            spesialis: "Ahli Kandungan",
            rs: "Skivul Hospital Jakarta",
            jadwal: {
                tipe: "Daring",
                date: moment("2023-12-14").format('DD-MM-YYYY')
            }
        },
        {
            nama: "Dr. Jaydone Schleifer",
            img:"/images/dokter/doctor1.png",
            spesialis: "Ahli Kandungan",
            rs: "Skivul Hospital Jakarta",
            jadwal: {
                tipe: "Daring",
                date: moment("2023-12-14").format('DD-MM-YYYY')
            }
        },
    {
            nama: "Dr. Jaydone Schleifer",
            img:"/images/dokter/doctor1.png",
            spesialis: "Ahli Kandungan",
            rs: "Skivul Hospital Jakarta",
            jadwal: {
                tipe: "Daring",
                date: moment("2023-12-14").format('DD-MM-YYYY')
            }
        }]
    }
    return (
        <div className="p-4 px-24 flex flex-col items-center">
            <Backbutton nama="Jadwal Janji Temu" />
            <div className="flex flex-col gap-2 max-w-5xl w-full mt-2">
                {
                    data.map((item, index) => (
                        <BookingCard key={index} data={item} />
                    ))
                }
            </div>
        </div>
    )
}
export default ListBooking