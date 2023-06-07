import { IoMdAddCircle } from "react-icons/io";
import { useState } from "react";
import { TaskList } from "./TaskList";

import "../index.css";

function AddTask() {

  const [ newTaskName, setNewTaskName] = useState('');

  const handleAddTask = () => {
    alert(newTaskName);
    setNewTaskName('');
  }


  return (
    <>
      <div className="add-task">
        <input type="text" value={newTaskName} onChange={(e)=>setNewTaskName(e.target.value)} placeholder="Add your new task ..." />
        <button onClick={handleAddTask}>
          <IoMdAddCircle />
        </button>
      </div>
    </>
  );
}

export default AddTask;
