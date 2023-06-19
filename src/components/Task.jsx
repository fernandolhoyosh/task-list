import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useContext } from "react";
import { TaskListContext } from "../contexts/TaskListContext";

import './Task.css';

export default function Task(props){

    const {id, name, estado} = props;

    const {dispatch} = useContext(TaskListContext);

    // condicion para cambiar la clase dependiendo del estado del checkbox
    const classTask = estado ? "task-strikethrough":"task-pending";

    //funcion para cambiar y actualizar el estado del checkbox cuando se de click
    const handleCheckedTaskChange = () => {
        dispatch({type:"changeStatusTask", payload: id, status: !estado});
    };
    
    return(
        <article id={id} className="task-component">
            <div className="check-task">
                <input type="checkbox" checked = {estado} onChange={handleCheckedTaskChange} />
                <p className={classTask}>{name}</p>
            </div>
            <div className="buttons-actions">
                <button id="btn-edit"><FaEdit className="icons"/></button>
                <button id="btn-delete"><RiDeleteBin6Line className="icons"/></button>
            </div>
        </article>
    )
}