import axios from "axios";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";

export const userContext = createContext()

function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState("");
    const [id, setId] = useState("");

    useEffect(() => {
        setToken(localStorage.getItem("token"))
        setId(localStorage.getItem("userid"))
    }, [])
    const fetchData = async (id) => {
        try {
            console.log(id)
            const response = await axios.get(`http://localhost:4000/user/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response.data.user)
            setUser(response.data.user);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }
    if (token) {
        fetchData(id)
    }


    const Login = async (konten) => {
        try {
            const response = await axios.post("http://localhost:4000/auth/login", konten)
            setUser(response.data.user)
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("userid", response.data.user.id)
            localStorage.setItem("role", response.data.user.role)
            console.log(response.data.user)
            return response.data.user
        } catch (err) {
            console.error(err.response.data.message)
        }
    }
    const Register = async (konten) => {
        try {
            console.log(konten)
            const response = await axios.post("http://localhost:4000/auth/register", konten)
            console.log(response.data.message)
            return response.data.message
        } catch (err) {
            console.error(err.response.data.message)
        }
    }
    return (
        <userContext.Provider value={{ user, Login, Register }} >
            {children}
        </userContext.Provider>
    )
}
export default UserProvider