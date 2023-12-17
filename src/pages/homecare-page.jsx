import Backbutton from "../components/backbutton"
import DoctorCard from "../components/doctor-card"
import 'moment/locale/id'
import moment from "moment/moment";
import { useLocation } from "react-router-dom";


function Homecare() {
    moment.locale('id');
    const location = useLocation()
    const data = location.state && location.state.dataAntrian
    return (
        <div className="p-4 lg:px-24">
            <Backbutton nama="Status Dokter" />
            <DoctorCard data={data.Dokter} />
        </div>
    )
}
export default Homecare