import { useContext } from "react";
import { TaskListContext } from "../contexts/TaskListContext";
import { useToast } from "@chakra-ui/react";

export function useTasks() {

  const { tasksList, dispatch } = useContext(TaskListContext);
  const toast = useToast();

  // Funcion para agregar una tarea
  const setAddTask = (e, inputRefTask, inputRefDescription, formValidation) => {

    e.preventDefault();
    const taskName = inputRefTask.current.value;
    const taskDescription = inputRefDescription.current.value;

    if(formValidation.task !== ""){
      toast.closeAll();
      toast({
        description: formValidation.task === undefined ? "The task name cannot be empty" : formValidation.task,
        position: "top",
        status: "warning",
        duration: 3000,
        isClosable: true,
    });
    }else{
      if(tasksList.find(task => task.title === taskName)){
        toast({
          description: `The task "${taskName}" has already been registered. Enter another name`,
          position: "top",
          status: "info",
          duration: 5000,
          isClosable: true,
      });
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
  const setUpdateTask = (e, taskName, newTaskName) => {
        e.preventDefault();
        if(newTaskName !== null){
          const updateTaskName = newTaskName.trim();
          if(updateTaskName){
            dispatch({type:"updateTaskName", oldTitle: taskName, updateTitle: updateTaskName});
            toast({
              description: "The task name has been updated",
              status: "info",
              duration: 3000,
              isClosable: true,
          });
          }else{
            toast({
              description: "Invalid empty entry. Try again",
              status: "info",
              duration: 3000,
              isClosable: true,
          });
          }
        }
  }

  // Funcion para eliminar una tarea de la lista
  const setDeleteTask = (id) => {
    dispatch({type:"deleteTask",payload:id});
    toast({
      description: "Task successfully deleted",
      status: "info",
      duration: 3000,
      isClosable: true,
  });
  }

  // Funcion para cambiar el status una tarea
  const setChangeStatusTask = (id, taskStatus) => {
    dispatch({type:"changeStatusTask", payload: id, status: taskStatus});
  }

  // Funcion para eliminar todas las tareas de la lista
  const setResetTasksList = () => {
    dispatch({type: "resetTasksList"});
    toast({
      title: "Alert",
      description: "successfully deleted tasks",
      status: "warning",
      position: "bottom",
      duration: 3000,
      isClosable: true,
  });
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