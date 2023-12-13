import axios from "axios";
import { useEffect } from "react";
import { createContext } from "react";
import { useState } from "react";

export const forumContext = createContext()

function ForumProvider({ children }) {
    const [forum, setForum] = useState(null);
    const [token, setToken] = useState("");

    const [id, setId] = useState("");

    useEffect(() => {
        setToken((prevToken) => {
            const newToken = localStorage.getItem("token") || "";
            if (prevToken !== newToken) {
                fetchData(id);
            }
            return newToken;
        });
        setId(localStorage.getItem("userid") || "");
    }, [id]);
        
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://be-skilhealth.up.railway.app/forum`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
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
        <forumContext.Provider value={{ forum, AddForum, setForum,JawabForum }}>
            {children}
        </forumContext.Provider>
    )

}
export default ForumProvider