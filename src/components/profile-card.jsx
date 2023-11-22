
function ProfileCard ({nama, tgl_lahir, no_telepon}) {
    return (
        <div className="px-5 py-5 bg-gray-100 flex rounded-md shadow-sm mt-2 space-y-6 border border-gray-200 hover:border-r-5 hover:border-b-5 hover:border-gray-500 transform hover:scale-101 transition duration-300 lg:w-2/4 item-center">  
        <div className="relative flex flex-col space-y-4 justify-between items-start font-sans bottom-2 right-2">
                <div className=' font-bold'>{nama}</div>
                <h1 className=''>{tgl_lahir}</h1>
                <div className=''>{no_telepon}</div>
                <li className="border-black-200 border-b-2 font-bold list-none"><a href="pages/edit-profile.jsx">Perubahan Data</a></li>
        </div>
        </div>
        
    )
}

export default ProfileCard