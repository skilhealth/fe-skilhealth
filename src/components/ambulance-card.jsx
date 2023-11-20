function AmbulanceCard ({nama, alamat}) {
    return (
        <div className="flex items-center justify-center py-12 px-4 mt-8 space-y-6  bg-gray-100 rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:px-6 lg:px-8 ">
        <div className=' relative flex flex-col space-y-4 justify-between items-start font-sans bottom-6 right-10 sm:text-sm' >
            <h1 className='mt-2 text-lg'>{nama}</h1>
            <div className='text-lg'>{alamat}</div>
        </div>
        </div>

    )
}

export default AmbulanceCard