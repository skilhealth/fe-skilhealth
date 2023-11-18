import { useNavigate } from "react-router-dom"
import searchicon from "../assets/search Fill.png"

function SearchFill() {
    return( 
        <div className="w-full h-8 item-center flex text-xl font-bold gap-3 mb-6">
            <button><img src={searchicon} alt="" className="h-full"/></button>
        </div>
    )
}
export default SearchFill