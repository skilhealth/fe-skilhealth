 import imghospital from "../assets/Low-Fi placeholder.png"
 
 function HospitalCard ({jarak, name, area, alamat}) {
    return (
        <div className='w-full flex px-4 py-2 bg-gray-100 rounded-md shadow-sm mt-8 space-y-px border border-gray-200 hover:border-r-5 hover:border-b-5 hover:border-gray-500 transform hover:scale-101 transition duration-300 sm:px-6 lg:px-6'>
        <img className='w-26 h-28 border mt-5 sm:w-32 sm:h-36' src={imghospital} alt=""  />
            <div className=' relative flex flex-col space-y-4 justify-between items-start font-sans sm:left-4 sm:text-sm' >
                <div className=''>{jarak}</div>
                <h1 className='font-extrabold text-lg sm:text-xl'>{name}</h1>
                <div className='font-semibold text-sm'>{area}</div>
                <div className='text-sm'>{alamat}</div>
            </div>
        
    </div>
    )
 }

 export default HospitalCard