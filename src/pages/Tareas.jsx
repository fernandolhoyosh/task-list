import Header from "../components/HEader";
import AddTask from "../components/AddTask";
import { TaskList } from "../components/TaskList";
import TaskCount from "../components/atoms/TaskCount";
import { TaskListContext } from "../contexts/TaskListContext";
import { useReducer } from "react";
import { TaskListReducer } from "../reducers/TaskListReducer";
import "./Tareas.css";

function Tareas() {
  const [tasksList, dispatch] = useReducer(TaskListReducer, []);

  return (
    <>
      <TaskListContext.Provider value={{ tasksList, dispatch }}>
        <main>
          <Header />
          <AddTask />
          <TaskList />
        </main>
        <TaskCount />
      </TaskListContext.Provider>
    </>
  );
}

export default Tareas;
