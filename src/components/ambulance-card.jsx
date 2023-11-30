function AmbulanceCard ({nama, alamat}) {
    return (
        <div className=" flex justify-center">
            <div className="w-full sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2 px-2 py-3">
        <div className="rounded-md bg-gray-100 shadow-md px-5 py-5  " >
            <h1 className='mt-3 text-lg font-semibold'>{nama}</h1>
            <div className='text-base border-b-4'>{alamat}</div>
        </div>
        </div>
        </div>
        

    )
}

export default AmbulanceCard