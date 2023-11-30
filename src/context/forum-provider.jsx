import axios from "axios";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";

export const forumContext = createContext()

function ForumProvider({ children }) {
    const [forum, setForum] = useState(null);
    const [token, setToken] = useState("");
    const [role, setRole] = useState("pasien");

    const [id, setId] = useState("");

    useEffect(() => {
        setToken(localStorage.getItem("token"))
        setId(localStorage.getItem("userid"))
        setRole(localStorage.getItem("role"))
    }, [])
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://be-skilhealth.up.railway.app/forum`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(response.data)
            setForum(response.data.data);
        } catch (error) {
            console.error('Error fetching forum:', error);
        }
    }
    useEffect(() => {
        fetchData(id)
    }, [])

    const AddForum = async (konten) => {
        try {
            const response = await axios.post("https://be-skilhealth.up.railway.app/forum", konten, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response.data.message)
            fetchData()
            return response.data.message
        } catch (err) {
            console.error(err.response.data.message)
        }
    }
    const JawabForum = async (konten,forumid) => {
        try {
            const response = await axios.put(`https://be-skilhealth.up.railway.app/forum/${forumid}`, konten, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response.data.message)
            fetchData()
            return response.data.message
        } catch (err) {
            console.error(err.response.data.message)
        }
    }
    return (
        <forumContext.Provider value={{ role, forum, AddForum, setForum,JawabForum }}>
            {children}
        </forumContext.Provider>
    )

}
export default ForumProvider