import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useState } from "react";

import './Task.css';

export default function Task(props){

    const {id, name, estado, onCheckboxChange} = props;
    const [taskState, setTaskState] = useState(estado);


    const classTask = taskState ? "task-strikethrough":"task-pending";

    const handleCheckedTaskChange = () => {
        const isChecked = !taskState;
        setTaskState(isChecked);
        onCheckboxChange(id, isChecked); //Devolucion de llamada al componente padre TaskList
    };
    
    return(
        <article id={id} className="task-component">
            <div className="check-task">
                <input type="checkbox" checked = {taskState} onChange={handleCheckedTaskChange} />
                <p className={classTask}>{name}</p>
            </div>
            <div className="buttons-actions">
                <button id="btn-edit"><FaEdit className="icons"/></button>
                <button id="btn-delete"><RiDeleteBin6Line className="icons"/></button>
            </div>
        </article>
    )
}