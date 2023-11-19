import Backbutton from "../components/backbutton"
import qrcode from "../assets/qrcode.png"
import CheckInDetail from "../components/checkin-detail"
import CheckInCard from "../components/checkin-card"

function CheckIn() {
    return (
        <div className="p-4">
            <Backbutton nama="Check In dan Antrian" />
            <div className="flex flex-col w-full">
                <div className="w-full flex justify-center">
                    <img src={qrcode} alt="" />
                </div>
                <CheckInDetail />
                <CheckInCard />
            </div>
        </div>
    )
}
export default CheckIn