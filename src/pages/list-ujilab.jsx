import Backbutton from "../components/backbutton"
import UjiLabCard from "../components/ujilab-card"
import 'moment/locale/id'
import moment from "moment/moment"

function ListUjiLab() {
    moment.locale('id')
    const ujilab = {
        data: [{
            date: moment("2023-09-05"),
            nama: "Pemeriksaan Fisik Abdomen",
            dokter: "Dr. Jaydon Schleifer",
            ujiid: "050920230123433"
        },
        {
            date: moment("2023-09-04"),
            nama: "Pemeriksaan Fisik Abdomene",
            dokter: "Dr. Jaydone Schleifer",
            ujiid: "050920230123433"
        }]
    }
    return (
        <div className="p-4">
            <Backbutton nama="Rekam Medis" />
            <form action="" className="w-full mb-4">
                <input className="border-2 w-full text-lg rounded-lg p-4 border-black" type="text" name="" id="" placeholder="Cari Nomor Rekam Medis" />
            </form>
            <h3 className="text-xl font-bold mb-4">Riwayat Rekam Medis</h3>
            {
                ujilab.data.map((item) => (
                    <UjiLabCard data={item} />
                ))
            }
        </div>
    )
}
export default ListUjiLab