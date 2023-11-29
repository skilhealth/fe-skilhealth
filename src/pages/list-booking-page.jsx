import moment from "moment/moment"
import Backbutton from "../components/backbutton"
import BookingCard from "../components/booking-card"
// pake localhost:4000/bookings?user=1
function ListBooking() {
    // const { data } = {
    //     data: [{
    //         nama: "Dr. Jaydon Schleifer",
    //         img: "/images/dokter/doctor1.png",
    //         spesialis: "Ahli Jantung",
    //         rs: "Skivul Hospital Jakarta",
    //         jadwal: {
    //             tipe: "Regular",
    //             date: moment("2023-12-14").format('DD-MM-YYYY')
    //         }
    //     },
    //     {
    //         nama: "Dr. JaydonG Schleifer",
    //         img: "/images/dokter/doctor1.png",
    //         spesialis: "Ahli Jantung",
    //         rs: "Skivul Hospital Jakarta",
    //         jadwal: {
    //             tipe: "Homecare",
    //             date: moment("2023-12-14").format('DD-MM-YYYY')
    //         }
    //     }, {
    //         nama: "Dr. Jaydone Schleifer",
    //         img: "/images/dokter/doctor1.png",
    //         spesialis: "Ahli Kandungan",
    //         rs: "Skivul Hospital Jakarta",
    //         jadwal: {
    //             tipe: "Daring",
    //             date: moment("2023-12-14").format('DD-MM-YYYY')
    //         }
    //     },
    //     {
    //         nama: "Dr. Jaydone Schleifer",
    //         img:"/images/dokter/doctor1.png",
    //         spesialis: "Ahli Kandungan",
    //         rs: "Skivul Hospital Jakarta",
    //         jadwal: {
    //             tipe: "Daring",
    //             date: moment("2023-12-14").format('DD-MM-YYYY')
    //         }
    //     },
    // {
    //         nama: "Dr. Jaydone Schleifer",
    //         img:"/images/dokter/doctor1.png",
    //         spesialis: "Ahli Kandungan",
    //         rs: "Skivul Hospital Jakarta",
    //         jadwal: {
    //             tipe: "Daring",
    //             date: moment("2023-12-14").format('DD-MM-YYYY')
    //         }
    //     }]
    // }
    const {data} = {
        "message": "Menampilkan Antrian",
        "data": [
            {
                "id": 2,
                "status": false,
                "User": {
                    "id": 1
                },
                "Jadwal": {
                    "date": "2023-11-26T00:00:00.000Z",
                    "tipe": "reguler"
                },
                "Dokter": {
                    "id": 1,
                    "nama": "Dr. Jane Smith",
                    "images": "/images/dokter/doctor1.png",
                    "Spesiali": {
                        "nama": "Ahli Jantung"
                    },
                    "Instansi": {
                        "nama": "Skilvul Hospital Jakarta"
                    }
                }
            },
            {
                "id": 3,
                "status": false,
                "User": {
                    "id": 1
                },
                "Jadwal": {
                    "date": "2023-11-27T00:00:00.000Z",
                    "tipe": "reguler"
                },
                "Dokter": {
                    "id": 1,
                    "nama": "Dr. Jane Smith",
                    "images": "url_gambar_dokter",
                    "Spesiali": {
                        "nama": "Ahli Jantung"
                    },
                    "Instansi": {
                        "nama": "Skilvul Hospital Jakarta"
                    }
                }
            },
            {
                "id": 4,
                "status": true,
                "User": {
                    "id": 1
                },
                "Jadwal": {
                    "date": "2023-11-24T00:00:00.000Z",
                    "tipe": "reguler"
                },
                "Dokter": {
                    "id": 2,
                    "nama": "Dr. Janes Smith",
                    "images": "url_gambar_dokter",
                    "Spesiali": {
                        "nama": "Ahli Jantung"
                    },
                    "Instansi": {
                        "nama": "Skilvul Hospital Jakarta"
                    }
                }
            },
            {
                "id": 5,
                "status": true,
                "User": {
                    "id": 1
                },
                "Jadwal": {
                    "date": "2023-11-24T00:00:00.000Z",
                    "tipe": "reguler"
                },
                "Dokter": {
                    "id": 2,
                    "nama": "Dr. Janes Smith",
                    "images": "url_gambar_dokter",
                    "Spesiali": {
                        "nama": "Ahli Jantung"
                    },
                    "Instansi": {
                        "nama": "Skilvul Hospital Jakarta"
                    }
                }
            },
            {
                "id": 1,
                "status": true,
                "User": {
                    "id": 1
                },
                "Jadwal": {
                    "date": "2023-11-25T00:00:00.000Z",
                    "tipe": "daring"
                },
                "Dokter": {
                    "id": 1,
                    "nama": "Dr. Jane Smith",
                    "images": "url_gambar_dokter",
                    "Spesiali": {
                        "nama": "Ahli Jantung"
                    },
                    "Instansi": {
                        "nama": "Skilvul Hospital Jakarta"
                    }
                }
            }
        ]
    }
    return (
        <div className="p-4 lg:px-24 flex flex-col items-center w-full">
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