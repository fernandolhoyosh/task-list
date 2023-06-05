import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

import './Task.css';

export default function Task(props){

    const {id, name, estado} = props;

    const classTask = estado ? "task-tached":"pendiente";
    
    return(
        <article id={id} className="task-component">
            <div className="check-task">
                <input type="radio" readOnly checked ={estado} />
                <p className={classTask}>{name}</p>
            </div>
            <div className="buttons-actions">
                <button id="btn-edit"><FaEdit className="icons"/></button>
                <button id="btn-delete"><RiDeleteBin6Line className="icons"/></button>
            </div>
        </article>
    )
}