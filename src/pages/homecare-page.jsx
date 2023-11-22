import Backbutton from "../components/backbutton"
import DoctorCard from "../components/doctor-card"
import 'moment/locale/id'
import moment from "moment/moment";


function Homecare() {
    moment.locale('id');
    const data = {
        token: "GH651H",
        antrian: "JT02",
        sisa: 2,
        date: moment("2023-12-12"),
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
            <Backbutton nama="Status Dokter" />
            <DoctorCard data={data.dokter} />
        </div>
    )
}
export default Homecare