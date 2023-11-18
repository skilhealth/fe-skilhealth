 import imghospital from "../assets/Low-Fi placeholder.png"
 
 function HospitalCard ({jarak, name, area, alamat}) {
    return (
        <div className='px-5 py-5 bg-gray-100 flex rounded-md shadow-sm mt-8 space-y-6 '>
        <img className='w-26 h-28 border mt-5' src={imghospital} alt=""  />
        <div className=' relative flex flex-col space-y-4 justify-between items-start font-sans bottom-7 left-4' >
        <div className=''>{jarak}</div>
        <h1 className='font-extrabold'>{name}</h1>
        <div className='font-semibold'>{area}</div>
        <div className=''>{alamat}</div>
        </div>
        
    </div>
    )
 }

 export default HospitalCard