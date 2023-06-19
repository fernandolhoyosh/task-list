import { IoMdAddCircle } from "react-icons/io";
import { useRef, useContext } from "react";
import { TaskListContext } from "../contexts/TaskListContext";
import "../index.css";

function AddTask() {

  const inputValueRef = useRef(); //uso el hook para tomar la referencia o valor del input de texto
  const {dispatch} = useContext(TaskListContext);

  //funcion para capturar el nombre de la tarea
  const handleAddTask = (e) => {
    e.preventDefault();
    if(inputValueRef.current.value.trim()){
      dispatch({type: "addTask", title:inputValueRef.current.value});
      inputValueRef.current.value = "";
    }else{
      alert("El campo esta vacio!");
      inputValueRef.current.value = "";
    }
  };

  return (
    <>
      <form className="add-task">
        <input type="text" ref={inputValueRef} placeholder="Add your new task ..."/>
        <button onClick={handleAddTask}>
          <IoMdAddCircle />
        </button>
      </form>
    </>
  );
}

export default AddTask;
