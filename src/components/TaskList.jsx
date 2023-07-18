import "./TaskList.css";
import { useEffect, useContext } from "react";
import { TaskListContext } from "../contexts/TaskListContext";
import Task from "./Task";
import { ClearTasks } from "./atoms/ClearTasks";
import { Tag } from "@chakra-ui/react";

export function TaskList() {
  const { tasksList, dispatch } = useContext(TaskListContext);

  //Cargar la lista de tareas desde el localStorage cuando se recargue la pagina y validamos si hay datos en el localStorage
  useEffect(() => {
    let localStorageData = localStorage.getItem("taskList");
    if (localStorageData) {
      const dataStorage = JSON.parse(localStorageData);
      dispatch({ type: "loadTasksLocalStorage", loadTasks: dataStorage });
    }
  }, [dispatch]);

  // Guardar la lista de tareas en el localStorage cada vez que la lista cambie
  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(tasksList));
  }, [tasksList]);

  return (
    <>
      <section className="task-list">
        {tasksList.map((task, index) => (
          <Task
            key={task.title}
            id={index}
            name={task.title}
            estado={task.status}
            description={task.description}
          />
        ))}
      </section>
      {tasksList.length != 0 && <ClearTasks />}
    </>
  );
}
