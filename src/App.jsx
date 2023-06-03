import Header from "./components/HEader";
import { TaskList } from "./components/TaskList";
import AddTask from "./components/AddTask";

import "./App.css";

function App() {
  return (
    <>
      <main>    
        <Header />
        <AddTask/>
        <TaskList />
      </main>
    </>
  );
}

export default App;
