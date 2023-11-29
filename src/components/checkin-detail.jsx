import moment from "moment/moment"
import "moment/locale/id"

function CheckInDetail({antrian,token,tgl}) {
    moment.locale("id")
    return (
        <div className="flex flex-wrap gap-4 justify-between mx-4 my-4">
            <div className="flex-1 min-w-max mb-4">
                <h4 className=" text-base font-semibold">Nomor Token</h4>
                <h3 className="text-3xl font-bold">{token}</h3>
            </div>
            <div className="flex-1 min-w-max mb-4">
                <h4 className="text-base font-semibold">Nomor Antrian</h4>
                <h3 className="text-3xl font-bold">{antrian.ke}</h3>
            </div>
            <div className="flex-1 min-w-max mb-4">
                <h4 className="text-base font-semibold">Sisa Antrian didepan</h4>
                <h3 className="text-xl font-bold">{antrian.sisa} Orang</h3>
            </div>
            <div className="flex-1 min-w-max mb-4">
                <h4 className="text-base font-semibold">Tanggal Pemeriksaan</h4>
                <h3 className="text-xl font-bold">{tgl.format('DD MMMM YYYY')}</h3>
            </div>
        </div>
    )
}
export default CheckInDetail