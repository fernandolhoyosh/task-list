import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useTasks } from "../hooks/useTasks";
import { useColorModeValue } from "@chakra-ui/react";

import AlertDeleteTask from "./alerts/AlertDeleteTask";

import './Task.css';
import { useState } from "react";

export default function Task(props){

    const colorNameTask = useColorModeValue("black","black");
    const [clickDelete, setClickDelete] = useState(false);

    const {id, name, estado, description} = props;

    //Desestructuro las funciones a utilizar del custom hook useTasks
    const {setChangeStatusTask, setUpdateTask} = useTasks();

    // condicion para cambiar la clase dependiendo del estado del checkbox
    const classTask = estado ? "task-strikethrough":"task-pending";

    //llamada de la funcion del custom hook para cambiar y actualizar el estado del checkbox cuando se de click
    const handleCheckedTaskChange = () => {
        setChangeStatusTask(id, !estado)
    };

    //llamada de la Función del custom hook para actualizar el nombre de una tarea de la lista
    const handleUpdateTaskName = () => {
        setUpdateTask(name);
    }
    
    return(
        <article id={id} className="task-component" title={description !== "" ? "Description: "+ description : description}>
            <div className="check-task">
                <input type="checkbox" checked = {estado} onChange={handleCheckedTaskChange} />
                <p style={{color:colorNameTask}} className={classTask}>{name}</p>
            </div>
            <div className="buttons-actions">
                <button id="btn-edit" onClick={handleUpdateTaskName} title="Edit task"><FaEdit className="icons"/></button>
                <button id="btn-delete" onClick={() => setClickDelete(true)} title="Delete task"><RiDeleteBin6Line className="icons"/></button>
            </div>
            {<AlertDeleteTask isOpen={clickDelete} onClose={()=>setClickDelete(false)} id={id} name={name}/>}
        </article>
    )
}