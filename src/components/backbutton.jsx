import { useNavigate } from "react-router-dom"
import backicon from "../assets/back-button.png"
import { useNavigate } from "react-router-dom"
import backicon from "../assets/back-button.png"

function Backbutton({nama}){
    const history = useNavigate()
    return( 
        <div className="w-full h-8 item-center align-baseline flex text-xl font-bold gap-3 mb-4 lg:justify-center lg:text-3xl">
            <button onClick={()=>history(-1)}><img src={backicon} alt="" className="h-full lg:hidden"/></button>
            {nama}
        </div>
    )
}
export default Backbutton