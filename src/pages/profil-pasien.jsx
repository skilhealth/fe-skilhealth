
import Backbutton from "../components/backbutton";
import ProfileCard from "../components/profile-card";


function ProfilePasien () {
     return (
      <div>
           <Backbutton nama= "Profil Pasien" />
           <h1 className="font-sans font-bold mt-5 ml-5 lg:mx-10">Saya Sendiri</h1>
           <ProfileCard nama="Andrew Lee" tgl_lahir= "15 September 2003" no_telepon= "+62881234454367"></ProfileCard>
           <h1 className="font-sans font-bold mt-5 ml-5 lg: bottom-40 lg:mx-10">Orang Lain</h1>
           <button
            type="submit"
            className='bg-red-700 text-white text-sm font-bold px-3 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mt-96 ml-24 w-52  ease-linear transition-all duration-150 lg:mx-96'
          >
            Tambah Profil Lain
          </button>
      </div>
      
        
     )
}

export default ProfilePasien