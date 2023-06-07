import { IoMdAddCircle } from "react-icons/io";
import { useState } from "react";

import "../index.css";

function AddTask(props) {
  const [newTaskName, setNewTaskName] = useState("");

  const handleAddTask = () => {
    props.createNewTask(newTaskName);
    setNewTaskName("");
  };

  return (
    <>
      <div className="add-task">
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Add your new task ..."
        />
        <button onClick={handleAddTask}>
          <IoMdAddCircle />
        </button>
      </div>
    </>
  );
}

export default AddTask;
