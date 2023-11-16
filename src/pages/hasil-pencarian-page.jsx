import Backbutton from "../components/backbutton"
import DoctorCard from "../components/doctor-card"

function HasilCariPage(){
    return(
        <div className="p-4">
            <Backbutton nama="Hasil Pencarian Dokter "/>
            <div className="flex flex-col gap-2">
                <DoctorCard />
                <DoctorCard />
                <DoctorCard />
                <DoctorCard />
                <DoctorCard />
            </div>
        </div>
    )
}
export default HasilCariPage