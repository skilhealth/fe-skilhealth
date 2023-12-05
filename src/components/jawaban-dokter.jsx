import { useContext } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { forumContext } from "../context/forum-provider";

function JawabanDokter() {
  const navigate = useNavigate()
  const {JawabForum} = useContext(forumContext)
  const [jawab,setJawab] = useState()
  const dokter_id = localStorage.getItem("userid")
  const {id} = useParams()
  const handleAnswer = (e) =>{
    e.preventDefault()
    const answerForum ={
      dokter_id:dokter_id,
      jawaban:jawab
    }
    JawabForum(answerForum,id)
    navigate("/forum/")
  }
  return (
    <form onSubmit={handleAnswer} className="w-full h-auto flex flex-col py-2 mt-2">
      <div className="mt-4">
        <span className="text-xl font-bold">Jawaban</span>
        <textarea
        onChange={(e)=>setJawab(e.target.value)}
        value={jawab}
          className="bg-white h-72 w-full border-2 border-black rounded-xl px-4 py-2 mt-2 text-base"
          placeholder="Masukkan Keluhan"
        />
      </div>
      <div className="mt-32">
        <button type="submit" className="bg-red-700 rounded-xl font-medium w-full text-lg text-white p-2">
          Kirim
        </button>
      </div>
    </form>
  );
}

export default JawabanDokter;
