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

    //Función para actualizar el nombre de una tarea
    const handleUpdateTaskName = () => {
        const value = prompt('Ingrese el nuevo nombre de la tarea:',name);
        if(value !== null){
            const updateTaskName = value.trim();
            if(updateTaskName){
                dispatch({type:"updateTaskName", oldTitle: name, updateTitle: updateTaskName});
            }else{
                alert("Entrada vacia no valida. Intente nuevamente");
            }
        }  
    }

    // Función para eliminar una tarea de la lista
    const handleDeleteTask = () => {
        const confirmedAction = window.confirm(`¿Realmente desea eliminar la tarea: ${name}?`)
        confirmedAction && dispatch({type:"deleteTask",payload:id});
    };
    
    return(
        <article id={id} className="task-component">
            <div className="check-task">
                <input type="checkbox" checked = {estado} onChange={handleCheckedTaskChange} />
                <p className={classTask}>{name}</p>
            </div>
            <div className="buttons-actions">
                <button id="btn-edit" onClick={handleUpdateTaskName}><FaEdit className="icons"/></button>
                <button id="btn-delete" onClick={handleDeleteTask}><RiDeleteBin6Line className="icons"/></button>
            </div>
        </article>
    )
}