import { IoMdAddCircle } from "react-icons/io";
import { useState, useEffect } from "react";
import { TaskList } from "./TaskList";

import "../index.css";


function AddTask() {

  const [addTask, setAddTask] = useState(false);
  const [valor, setValor] = useState('');

  const handleClick = () => {
    setAddTask(true);
    console.log(valor)
  };

  const handleChange = (e) => {
    setValor(e.target.value);
  };

  return (
    <>
      <div className="add-task">
        <input type="text" value={valor} onChange={handleChange} placeholder="Add your new task ..." />
        <button onClick={handleClick}>
          <IoMdAddCircle />
        </button>
      </div>
      <TaskList state = {addTask} taskName ={valor} />
    </>
  );
}

export default AddTask;
