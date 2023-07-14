import { useContext } from "react";
import { TaskListContext } from "../contexts/TaskListContext";

export function useTasks() {

  const { tasksList, dispatch } = useContext(TaskListContext);

  // Funcion para agregar una tarea
  const setAddTask = (e, inputRefTask, inputRefDescription, formValidation) => {

    e.preventDefault();
    const taskName = inputRefTask.current.value;
    const taskDescription = inputRefDescription.current.value;

    if(formValidation.task !== ""){

      alert(formValidation.task === undefined ? "The task name cannot be empty" : formValidation.task);
      formValidation.task = "task name  is required";
    }else{
      if(tasksList.find(task => task.title === taskName)){
        alert(`The task "${taskName}" has already been registered. Enter another name`);
        formValidation.task = undefined;
        inputRefTask.current.value = "";
    }else{
        dispatch({type: "addTask", title:taskName, description:taskDescription.trim()});
        formValidation.task = undefined;
        inputRefTask.current.value = "";
        inputRefDescription.current.value = "";

      }
    }
    inputRefTask.current.focus();
  }

  // Funcion para actualizar el nombre de una tarea
  const setUpdateTask = (taskName) => {
    const value = prompt('Enter the new task name:',taskName);
        if(value !== null){
            const updateTaskName = value.trim();
            if(updateTaskName){
                dispatch({type:"updateTaskName", oldTitle: taskName, updateTitle: updateTaskName});
            }else{
                alert("Invalid empty entry. Try again");
            }
        }  
  }

  // Funcion para eliminar una tarea de la lista
  const setDeleteTask = (id, taskName) => {
    const confirmedAction = window.confirm(`Do you really want to delete the task: ${taskName}?`)
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