import "./TaskList.css";
import Task from "./Task";
import { useState, useEffect } from "react";

export function TaskList(props) {

  const { taskName } = props;
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  // Agregar una nueva tarea a la lista
  useEffect(() => {
    if (taskName) {
      const newTask = {
        name: taskName,
        state: false,
      };
      setTasks([...tasks, newTask]);
    }
  }, [taskName]);


  //funcion para cambiar el estado de las tareas a traves de una llamada de devolucion del componente hijo
  const handleCheckboxChange = (taskId, isChecked) =>{
    setTasks((prevTasks)=>
        prevTasks.map((task, index)=>
        index === taskId ? {...task, state: isChecked}:task
        )
    );
  };

  return (
    <section className="task-list">
      {tasks.map(({ name, state }, index) => (
        <Task key={index} id={index} name={name} estado={state} onCheckboxChange={handleCheckboxChange} />
      ))}{/* console.log(tasks) */}
    </section>
  );
}
