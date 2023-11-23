 import imghospital from "../assets/Low-Fi placeholder.png"
 
 function HospitalCard ({jarak, name, area, alamat}) {
    return (
        <div className='px-4 py-6 bg-gray-100 flex rounded-md shadow-sm mt-8 space-y-px border border-gray-200 hover:border-r-5 hover:border-b-5 hover:border-gray-500 transform hover:scale-101 transition duration-300 w-full focus:z-10 sm:px-6 lg:px-6'>
        <img className='w-26 h-28 border mt-5' src={imghospital} alt=""  />
            <div className=' relative flex flex-col space-y-4 justify-between items-start font-sans left-4 sm:text-sm' >
                <div className=''>{jarak}</div>
                <h1 className='font-extrabold'>{name}</h1>
                <div className='font-semibold'>{area}</div>
                <div className=''>{alamat}</div>
            </div>
        
    </div>
    )
 }

 export default HospitalCard