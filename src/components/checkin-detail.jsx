function CheckInDetail({data}) {
    return (
        <div className="flex flex-wrap gap-4 justify-between mx-4 my-4">
            <div className="flex-1 min-w-max mb-4">
                <h4 className=" text-base font-semibold">Nomor Token</h4>
                <h3 className="text-3xl font-bold">{data.token}</h3>
            </div>
            <div className="flex-1 min-w-max mb-4">
                <h4 className="text-base font-semibold">Nomor Antrian</h4>
                <h3 className="text-3xl font-bold">{data.antrian}</h3>
            </div>
            <div className="flex-1 min-w-max mb-4">
                <h4 className="text-base font-semibold">Sisa Antrian didepan</h4>
                <h3 className="text-xl font-bold">{data.sisa} Orang</h3>
            </div>
            <div className="flex-1 min-w-max mb-4">
                <h4 className="text-base font-semibold">Tanggal Pemeriksaan</h4>
                <h3 className="text-xl font-bold">{data.date}</h3>
            </div>
        </div>
    )
}
export default CheckInDetail