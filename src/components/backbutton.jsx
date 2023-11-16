import { useNavigate } from "react-router-dom"
import backicon from "../assets/back-button.png"

function Backbutton({nama}){
    return( 
        <div className="w-full h-8 item-center align-baseline flex text-xl font-bold gap-3">
            <button><img src={backicon} alt="" className="h-full"/></button>
            {nama}
        </div>
    )
}
export default Backbutton