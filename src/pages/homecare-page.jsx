import Backbutton from "../components/backbutton"
import DoctorCard from "../components/doctor-card"

function Homecare(){
    return(
        <div className="p-4">
            <Backbutton nama="Status Dokter" />
            <DoctorCard />
        </div>
    )
}
export default Homecare