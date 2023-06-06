import { IoMdAddCircle } from "react-icons/io";
import { useState } from "react";
import { TaskList } from "./TaskList";

import "../index.css";

function AddTask() {

  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');

  const handleAddTask = () => {
    if(taskName.trim()){
      const newTask = {
        name:taskName,
        status:false
      };
      setTasks([...tasks,newTask]);
      setTaskName('');
    }
  };

  const handleTextChange = (e) => {
    setTaskName(e.target.value);
  };

  return (
    <>
      <div className="add-task">
        <input type="text" value={taskName} onChange={handleTextChange} placeholder="Add your new task ..." />
        <button onClick={handleAddTask}>
          <IoMdAddCircle />
        </button>
      </div>
      <TaskList taskList={tasks}/>
    </>
  );
}

export default AddTask;
