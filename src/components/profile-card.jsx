
function ProfileCard ({nama, tgl_lahir, no_telepon}) {
    return (
        <div className="px-10 py-10 bg-gray-100 flex rounded-md shadow-sm mt-2 space-y-6 border border-gray-200 hover:border-r-5 hover:border-b-5 hover:border-gray-500 transform hover:scale-101 transition duration-300 sm:text-sm">      
        <div className="relative flex flex-col space-y-4 justify-between items-start font-sans bottom-7 right-5 sm:text-sm">
                <div className=' font-bold'>{nama}</div>
                <h1 className=''>{tgl_lahir}</h1>
                <div className=''>{no_telepon}</div>
                <li className="border-black-300 border-b-2 font-bold list-none"><a href="#">Perubahan Data</a></li>
        </div>

        </div>
        
    )
}

export default ProfileCard