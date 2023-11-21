import Backbutton from "../components/backbutton"
import UjiLabCard from "../components/ujilab-card"

function ListUjiLab(){
    return(
        <div className="p-4">
            <Backbutton nama="Rekam Medis"/>
            <form action="" className="w-full mb-4">
                <input className="border-2 w-full text-lg rounded-lg p-4 border-black" type="text" name="" id="" placeholder="Cari Nomor Rekam Medis" />
            </form>
            <h3 className="text-xl font-bold mb-4">Riwayat Rekam Medis</h3>
            <UjiLabCard />
            <UjiLabCard />
            <UjiLabCard />
            <UjiLabCard />
        </div>
    )
}
export default ListUjiLab