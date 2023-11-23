function AmbulanceCard ({nama, alamat}) {
    return (
        <div className=" flex p-2 items-center justify-center">
        <div className="rounded-lg bg-gray-100 shadow w-5/6 h-32 px-4 py-5 underline " >
            <h1 className='mt-2 text-lg'>{nama}</h1>
            <div className='text-lg'>{alamat}</div>
        </div>
        </div>

    )
}

export default AmbulanceCard