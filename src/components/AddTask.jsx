import { IoMdAddCircle } from "react-icons/io";
import { useState, useEffect } from "react";
import { TaskList } from "./TaskList";

import "../index.css";


function AddTask() {

  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskState, setTaskState] = useState(false);

  const handleAddTask = () => {
    if(taskName.trim()){
      const newTask = {
        name:taskName,
        status:taskState
      };
      setTasks([...tasks,newTask]);
      setTaskName('');
    }
  };

  const handleChange = (e) => {
    setTaskName(e.target.value);
  };

  return (
    <>
      <div className="add-task">
        <input type="text" value={taskName} onChange={handleChange} placeholder="Add your new task ..." />
        <button onClick={handleAddTask}>
          <IoMdAddCircle />
        </button>
      </div>
      <TaskList taskList={tasks}/>
    </>
  );
}

export default AddTask;
