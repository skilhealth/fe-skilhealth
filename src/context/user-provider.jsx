import axios from "axios";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";

export const userContext = createContext()

function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLogin, setLogin] = useState(false)
    const [token, setToken] = useState("");
    const [role, setRole] = useState();
    const [id, setId] = useState("");

    useEffect(() => {
        setToken(localStorage.getItem("token"))
        setId(localStorage.getItem("userid"))
        if (role !== localStorage.getItem("role") && localStorage.getItem("role")) {
            setRole(localStorage.getItem("role"))
        }
    }, [])
    useEffect(() => {
        if (!localStorage.getItem("role")) {
            setRole("noLogin")
        }
    })
    const fetchData = async (id) => {
        try {
            console.log(id)
            let response = null
            if (role === "dokter") {
                response = await axios.get(`https://be-skilhealth.up.railway.app/dokter/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            } else {
                response = await axios.get(`https://be-skilhealth.up.railway.app/user/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            }
            console.log(response.data)
            setUser(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }
    console.log(role)
    useEffect(() => {
        fetchData(id)
    }, [token])
    useEffect(()=>{
        if(user!==null ||user!==undefined ||user!=='noLogin'){
            setLogin(true)
        }
        if(user===null ||user===undefined || user==='noLogin'){
            setLogin(false)
        }
    },[user,token])

    const Login = async (konten) => {
        try {
            setRole("")
            const response = await axios.post("https://be-skilhealth.up.railway.app/auth/login", konten)
            console.log(response.data.user)
            setUser(response.data.user)
            if (response.data.user) {
                setLogin(true)
            }
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("userid", response.data.user.id)
            localStorage.setItem("role", response.data.user.role)
            setRole(response.data.user.role)
            return response.data.user
        } catch (err) {
            console.error(err)
        }
    }
    const Register = async (konten) => {
        try {
            console.log(konten)
            const response = await axios.post("https://be-skilhealth.up.railway.app/auth/register", konten)
            console.log(response.data.message)
            return response.data.message
        } catch (err) {
            console.error(err.response.data.message)
        }
    }
    const Logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("userid")
        localStorage.removeItem("role")
        setUser(null)
        setLogin(false)
    }
    return (
        <userContext.Provider value={{ user, role, isLogin, Login, Register, Logout }} >
            {children}
        </userContext.Provider>
    )
}
export default UserProvider