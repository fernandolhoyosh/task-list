import "./TaskList.css";
import { useState, useEffect} from "react";
import AddTask from "./AddTask";
import Task from "./Task";
import { ClearTasks } from "./atoms/ClearTasks";

export function TaskList() {

  const [tasksItems, setTasksItems] = useState([]);

  // Crear una nueva tarea y realizar copia del array de tareas
  function createNewTask(taskName){
    if(!tasksItems.find(task => task.name === taskName)){
      setTasksItems([...tasksItems, {name: taskName, state: false}]);
    }
  }

  //funcion para cambiar el estado de las tareas a traves de una llamada de devolucion del componente hijo Task
  const handleCheckboxChange = (taskId, isChecked) =>{
    setTasksItems((prevTasks)=>
        prevTasks.map((task, index)=>
        index === taskId ? {...task, state: isChecked}:task
        )
    );
  };

  //Cargar la lista de tareas desde el localStorage cuando se recargue la pagina y validamos si hay datos en el localStorage
  useEffect(()=>{
    let localStorageData = localStorage.getItem('taskList');
    if(localStorageData){
      setTasksItems(JSON.parse(localStorageData));
    }
  },[])

  // Guardar la lista de tareas en el localStorage cada vez que la lista cambie
  useEffect(()=>{
    localStorage.setItem('taskList',JSON.stringify(tasksItems));
  },[tasksItems]);

  const handleClearTasks = () =>{
    setTasksItems([]);
    localStorage.removeItem('taskList');
  }

  return (
    <>
    <AddTask createNewTask={createNewTask}/>
    <section className="task-list">
      {tasksItems.map(({ name, state }, index) => (
        <Task key={name} id={index} name={name} estado={state} onCheckboxChange={handleCheckboxChange} />
      ))}
    </section>
    {tasksItems.length!=0 && <ClearTasks onClearTasks = {handleClearTasks} />}
    </>
  );
}
