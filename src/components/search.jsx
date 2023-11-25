import React, { useEffect, useState } from 'react';
import { getListRumahSakit } from './SearchRs';

const SearchHospital = () => {

    useEffect(() => {
        getListRumahSakit()
    }, [])


 const [hospital, setHospital] = useState('');

 const handleChange = (e) => {
    setHospital(e.target.value);
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    alert('Hospital name submitted: ' + hospital);
 };

 return (
    <div className="container mx-auto">
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