import Backbutton from "../components/backbutton"
import qrcode from "../assets/qrcode.png"
import CheckInDetail from "../components/checkin-detail"
import CheckInCard from "../components/checkin-card"
import moment from "moment/moment"

function CheckIn() {
    const data = {
        token:"GH651H",
        antrian:"JT02",
        sisa:2,
        date:moment("2023-12-12").format('DD-MM-YYYY'),
        dokter:
        {
            status: "Sedang Dirumah Sakit",
            img: "/images/dokter/doctor1.png",
            nama: "Dr. Jaydon Schleifer",
            spesialis: "Ahli Jantung",
            rs: "Skilvul Hospital jakarta"
        },

    }
    return (
        <div className="p-4">
            <Backbutton nama="Check In dan Antrian" />
            <div className="flex flex-col w-full">
                <div className="w-full flex justify-center">
                    <img src={qrcode} alt="" />
                </div>
                <CheckInDetail data={data}/>
                <CheckInCard data={data.dokter}/>
            </div>
        </div>
    )
}
export default CheckIn