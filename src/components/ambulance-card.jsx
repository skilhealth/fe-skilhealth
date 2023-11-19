function AmbulanceCard ({nama, alamat}) {
    return (
        <div className="px-5 py-5 bg-gray-100 flex rounded-md shadow-sm mt-8 space-y-6 border border-gray-200 hover:border-r-5 hover:border-b-5 hover:border-gray-500 transform hover:scale-101 transition duration-300 sm:text-sm">
        <div className=' relative flex flex-col space-y-4 justify-between items-start font-sans bottom-10 left-4 sm:text-sm' >
            <h1 className='mt-9 text-lg'>{nama}</h1>
            <div className='text-lg'>{alamat}</div>
        </div>
        </div>

    )
}

export default AmbulanceCard