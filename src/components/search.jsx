import React, { useEffect, useState } from 'react';


function SearchHospital () {
   const [hospital, setHospital] = useState([]);

    useEffect(() => {
      async function getListRumahSakit() {
         const response = await fetch("")
         const data = await response.json()
         setHospital(data)
      }
        //getListRumahSakit()
    }, [])

 const handleChange = (e) => {
    setHospital(e.target.value);
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    alert('Hospital name submitted: ' + hospital);
 };

 return (
    <div className="container mx-auto">
      {hospital.length == 0 ? <div>Loading ...</div> : 
    <div>
      {hospital.map(item => (
         <div>
          
         </div>
      ))}
      </div>
      }
    <h1>{hospital}</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto">
        <div className="rounded-md shadow-sm -space-y-px">
          <input
            className="px-5 py-5 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-600 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
            type="text"
            placeholder="Cari rumah sakit"
            value={hospital}
            onChange={handleChange}
          />
        </div>
        </form>
    </div>


 );
        
};

export default SearchHospital;