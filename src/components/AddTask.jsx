import { IoMdAddCircle } from "react-icons/io";
import { useRef } from "react";
import { useTasks } from "../hooks/useTasks"
import "../index.css";

function AddTask() {

  const inputValueRef = useRef(); //uso el hook para tomar la referencia o valor del input de texto
  const {setAddTask} = useTasks(); // Recibo las funcion de añadir tarea del custom hook useTask

  //funcion para capturar el nombre de la tarea y enviar el evento del form
  const handleAddTask = (e) => {
    setAddTask(e, inputValueRef.current.value);
    inputValueRef.current.value = "";
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
