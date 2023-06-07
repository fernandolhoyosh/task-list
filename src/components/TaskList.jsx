import "./TaskList.css";
import Task from "./Task";
import { useState, useEffect} from "react";
import AddTask from "./AddTask";

export function TaskList(props) {

  const [tasksItems, setTasksItems] = useState([
    {name:"task 1",state: false},
    {name:"task 1",state: false},
    {name:"task 1",state: false},
  ])

  function createNewTask(taskName){
    if(!tasksItems.find(task => task.name === taskName)){
      setTasksItems([...tasksItems, {name: taskName, state: false}]);
    }
  }

  //Cargar la lista de tareas desde el localStorage cuando se recargue la pagina y validamos que ya hay datos en el localStorage
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

  return (
    <>
    <AddTask createNewTask={createNewTask}/>
    <section className="task-list">
      {tasksItems.map(({ name, state }, index) => (
        <Task key={index} id={index} name={name} estado={state} />
      ))}
    </section>
    </>
  );
}
