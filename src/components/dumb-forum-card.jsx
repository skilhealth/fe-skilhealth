function Dumb({data}) {

    return (
        <section
            className="bg-slate-200 w-full h-32 flex px-4 py-2 mt-2 rounded-xl lg:max-w-xl lg:min-w-[370px] flex-1">
            <div className="flex flex-col justify-center">
                <div className="flex flex-col">
                    {/* status */}
                    <span
                        className={
                            data.status === "Sudah Terjawab"
                                ? "text-green-500 font-semibold"
                                : "text-red-500 font-semibold"
                        }
                    >
                        {data.status}
                    </span>

                    {/* title */}
                    <span className="text-lg font-bold">{data.judul}</span>
                </div>
                <div className="flex flex-col">
                    {/* sender */}
                    <span className="">Oleh: {data.user}</span>

                    {/* answer */}
                </div>
            </div>
        </section>
    )
}
export default Dumb