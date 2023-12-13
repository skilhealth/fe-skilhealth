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
    const [id, setId] = useState(0);

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
            setUser(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }
    useEffect(() => {
        fetchData(id)
    }, [token])
    useEffect(() => {
        if (user !== null || user !== undefined || user !== 'noLogin') {
            setLogin(true)
        }
        if (user === null || user === undefined || user === 'noLogin') {
            setLogin(false)
        }
    }, [user, token])

    const Login = async (konten) => {
        try {
            setRole("")
            const response = await axios.post("https://be-skilhealth.up.railway.app/auth/login", konten)
            if (response.data.user) {
                setUser(response.data.user)
                setLogin(true)
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("userid", response.data.user.id)
                localStorage.setItem("role", response.data.user.role)
                setRole(response.data.user.role)
            }
            return response.data
        } catch (err) {
            console.error(err)
            alert(err.response.data.message)
        }
    }
    const Register = async (konten) => {
        try {
            const response = await axios.post("https://be-skilhealth.up.railway.app/auth/register", konten)
            console.log(response.data.message)
            return response.data.message
        } catch (err) {
            console.error(err)
            alert(err.response.data.message)
        }
    }
    const Logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("userid")
        localStorage.removeItem("role")
        setUser(null)
        setLogin(false)
    }
    const Edit = async (konten) => {
        try {
            const response = await axios.put(`https://be-skilhealth.up.railway.app/user/${id}`,konten, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response.data.message)
            await fetchData(id)
            return response.data.message
        }catch (err) {
            console.error(err)
            alert(err.response.data.message)
        }
    }
    return (
        <userContext.Provider value={{ user, role, isLogin, Login, Register, Logout,Edit }} >
            {children}
        </userContext.Provider>
    )
}
export default UserProvider