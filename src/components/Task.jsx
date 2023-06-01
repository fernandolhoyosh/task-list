import { FaCreditCard } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Task(){
    const text = "tarea uno";
    return(
        <div>
            <input type="radio" id="check" value={0} />
            <label htmlFor="check">{text}</label>
            <button><FaCreditCard/></button>
            <button><RiDeleteBin6Line/></button>
        </div>
    )
}