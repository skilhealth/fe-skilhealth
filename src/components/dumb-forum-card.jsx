function Dumb({data}) {

    return (
        <section
            className="bg-slate-100 w-full flex p-4 rounded-xl lg:min-w-[370px] flex-1">
            <div className="flex flex-col justify-center">
                <div className="flex flex-col">
                    {/* status */}
                    <span
                        className={
                            data.status === "Sudah Terjawab"
                                ? "text-green-500 font-semibold text-xs"
                                : "text-red-500 font-semibold text-"
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