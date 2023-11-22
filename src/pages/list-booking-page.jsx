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
            img: "/images/dokter/doctor1.png",
            spesialis: "Ahli Kandungan",
            rs: "Skivul Hospital Jakarta",
            jadwal: {
                tipe: "Daring",
                date: moment("2023-12-14").format('DD-MM-YYYY')
            }
        }]
    }
    return (
        <div className="p-4 lg:px-24">
            <Backbutton nama="Jadwal Janji Temu" />
            <div className="flex justify-center w-full mt-2">
                <div className="flex flex-col w-full gap-2 lg:gap-4 lg:flex-row lg:flex-wrap lg:justify-start lg:max-w-[808px]">
                    {
                        data.map((item, index) => (
                            <BookingCard key={index} data={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default ListBooking