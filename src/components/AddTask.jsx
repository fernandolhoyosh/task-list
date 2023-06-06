import { IoMdAddCircle } from "react-icons/io";
import { useState } from "react";
import { TaskList } from "./TaskList";

import "../index.css";

function AddTask() {

  const [task, setTask] = useState('');
  const [taskNameInput, setTaskNameInput] = useState('');

  const handleAddTask = () => {
    if(taskNameInput.trim()){
      setTask(taskNameInput);
      setTaskNameInput('');
    }
  };

  const handleTextChange = (e) => {
    setTaskNameInput(e.target.value);
  };

  return (
    <>
      <div className="add-task">
        <input type="text" value={taskNameInput} onChange={handleTextChange} placeholder="Add your new task ..." />
        <button onClick={handleAddTask}>
          <IoMdAddCircle />
        </button>
      </div>
      <TaskList taskName={task}/>
    </>
  );
}

export default AddTask;
