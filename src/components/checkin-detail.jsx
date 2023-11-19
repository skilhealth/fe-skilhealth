function CheckInDetail() {
    return (
        <div className="flex flex-wrap gap-4 justify-between mx-4 my-4">
            <div className="flex-1 min-w-max mb-4">
                <h4 className=" text-base font-bold">Nomor Token</h4>
                <h3 className="text-3xl font-black">GH651H</h3>
            </div>
            <div className="flex-1 min-w-max mb-4">
                <h4 className="text-base font-bold">Nomor Antrian</h4>
                <h3 className="text-3xl font-black">JT03</h3>
            </div>
            <div className="flex-1 min-w-max mb-4">
                <h4 className="text-base font-bold">Sisa Antrian didepan</h4>
                <h3 className="text-xl font-black">2 Orang</h3>
            </div>
            <div className="flex-1 min-w-max mb-4">
                <h4 className="text-base font-bold">Hari Pemeriksaan</h4>
                <h3 className="text-xl font-black">12-12-2023</h3>
            </div>
        </div>
    )
}
export default CheckInDetail