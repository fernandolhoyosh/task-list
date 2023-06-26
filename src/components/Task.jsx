import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useTasks } from "../hooks/useTasks";

import './Task.css';

export default function Task(props){

    const {id, name, estado, description} = props;

    //Desestructuro las funciones a utilizar del custom hook useTasks
    const {setChangeStatusTask, setUpdateTask, setDeleteTask} = useTasks();

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

    //llamada de la Función del custom hook para eliminar una tarea de la lista
    const handleDeleteTask = () => {
        setDeleteTask(id, name);
    };
    
    return(
        <article id={id} className="task-component" title={description !== "" ? "Description: "+ description : description}>
            <div className="check-task">
                <input type="checkbox" checked = {estado} onChange={handleCheckedTaskChange} />
                <p className={classTask}>{name}</p>
            </div>
            <div className="buttons-actions">
                <button id="btn-edit" onClick={handleUpdateTaskName} title="Edit task"><FaEdit className="icons"/></button>
                <button id="btn-delete" onClick={handleDeleteTask} title="Delete task"><RiDeleteBin6Line className="icons"/></button>
            </div>
        </article>
    )
}