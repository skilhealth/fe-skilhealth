import axios from "axios";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";

export const instansiContext = createContext()

function InstansiProvider({ children }) {
    const [instansi, setInstansi] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://be-skilhealth.up.railway.app/instansi`);
                setInstansi(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchData()
    },[])
    return(
        <instansiContext.Provider value={{instansi,setInstansi}}>
            {children}
        </instansiContext.Provider>
    )
}

export default InstansiProvider