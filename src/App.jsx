import Header from "./components/HEader";
import AddTask from "./components/AddTask";
import { TaskList } from "./components/TaskList";
import { TaskListContext } from "./contexts/TaskListContext";
import { useReducer } from "react";
import { TaskListReducer } from "./reducers/TaskListReducer";

import "./App.css";


function App() {

  const [tasksList, dispatch] = useReducer(TaskListReducer, []);

  return (
    <>
      <main>
        <TaskListContext.Provider value={{tasksList, dispatch}}>
          <Header />
          <AddTask/>
          <TaskList/>
        </TaskListContext.Provider>    
      </main>
    </>
  );
}

export default App;
