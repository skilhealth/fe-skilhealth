function AmbulanceCard ({nama, alamat}) {
    return (
        <div className=" mb-10 bg-gray-100 flex items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div className=' relative flex flex-col space-y-4 justify-between items-start font-sans bottom-2 lg:me-auto' >
            <h1 className='mt-2 text-lg'>{nama}</h1>
            <div className='text-lg'>{alamat}</div>
        </div>
        </div>

    )
}

export default AmbulanceCard