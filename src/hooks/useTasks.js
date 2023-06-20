import { useContext } from "react";
import { TaskListContext } from "../contexts/TaskListContext";

export function useTasks() {

  const { tasksList, dispatch } = useContext(TaskListContext);

  // Funcion para agregar una tarea
  const setAddTask = (e, taskName) => {
    e.preventDefault();
    if(taskName.trim()){
        if(tasksList.find(task => task.title === taskName)){
            alert(`La tarea "${taskName}" ya ha sido registrada.`);
        }else{
            dispatch({type: "addTask", title:taskName});
        }
    }else{
        alert("El campo esta vacio!");
    }
  }

  // Funcion para actualizar el nombre de una tarea
  const setUpdateTask = (taskName) => {
    const value = prompt('Ingrese el nuevo nombre de la tarea:',taskName);
        if(value !== null){
            const updateTaskName = value.trim();
            if(updateTaskName){
                dispatch({type:"updateTaskName", oldTitle: taskName, updateTitle: updateTaskName});
            }else{
                alert("Entrada vacia no valida. Intente nuevamente");
            }
        }  
  }

  // Funcion para eliminar una tarea de la lista
  const setDeleteTask = (id, taskName) => {
    const confirmedAction = window.confirm(`¿Realmente desea eliminar la tarea: ${taskName}?`)
        confirmedAction && dispatch({type:"deleteTask",payload:id});
  }

  // Funcion para cambiar el status una tarea
  const setChangeStatusTask = (id, taskStatus) => {
    dispatch({type:"changeStatusTask", payload: id, status: taskStatus});
  }

  // Funcion para eliminar todas las tareas de la lista
  const setResetTasksList = () => {
    dispatch({type: "resetTasksList"});
  }

  // Enviamos las funciones
  return {
    setAddTask,
    setUpdateTask,
    setDeleteTask,
    setChangeStatusTask,
    setResetTasksList
};

}