import SearchHospital from "../components/search";
import Backbutton from '../components/backbutton';
import HospitalCard from "../components/rs-card";
function Hospital() {
    return (
        <div>
            <Backbutton nama=" Rumah Sakit"/>
            <SearchHospital></SearchHospital>

            <HospitalCard jarak= "15KM" name= "Skilvul Hospital Jakarta" area= "Jabodetabek" imghospital= "{imghospital}" alamat= "JL.Laksada Adisucipto NO.15 Jakarta"></HospitalCard>
            <HospitalCard></HospitalCard>
            <HospitalCard></HospitalCard>
            <HospitalCard></HospitalCard>
        </div>
    )
}

export default Hospital