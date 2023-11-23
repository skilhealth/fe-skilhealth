import Backbutton from "../components/backbutton"
import qrcode from "../assets/qrcode.png"
import CheckInDetail from "../components/checkin-detail"
import CheckInCard from "../components/checkin-card"
import moment from "moment/moment"

function CheckIn() {
    const data = {
        token: "GH651H",
        antrian: "JT02",
        sisa: 2,
        date: moment("2023-12-12").format('DD-MM-YYYY'),
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
        <div className="p-4 lg:py-10 flex flex-col items-center">
            <Backbutton nama="Check In dan Antrian" />
            <div className="flex flex-col w-full lg:flex-row lg:border-2 lg:rounded-xl border-slate-500 lg:max-w-4xl lg:p-4">
                <div className="w-full flex justify-center lg:w-auto lg:flex-2">
                    <img src={qrcode} alt="" className="lg:h-[480px]" />
                </div>
                <div className="lg:flex-1 lg:flex lg:flex-col-reverse lg:justify-end lg:py-8">
                    <CheckInDetail data={data} />
                    <CheckInCard data={data.dokter} />
                </div>
            </div>
        </div>
    )
}
export default CheckIn