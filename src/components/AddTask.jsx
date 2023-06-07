import { IoMdAddCircle } from "react-icons/io";
import { useState } from "react";

import "../index.css";

function AddTask(props) {
  const [newTaskName, setNewTaskName] = useState("");

  //funcion para capturar el nombre de la tarea
  const handleAddTask = () => {
    if(newTaskName.trim()){
      props.createNewTask(newTaskName);
      setNewTaskName("");
    }else{
      alert("El campo esta vacio!");
      setNewTaskName("");
    }
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
