import { IoMdAddCircle } from "react-icons/io";
import { useRef, useState} from "react";
import { useTasks } from "../hooks/useTasks"
import "./AddTask.css"
import MessageSpan from "./atoms/MessageSpan";

function AddTask() {

  const inputValueRef = useRef(); //uso el hook para tomar la referencia o valor del input de texto
  const inputDescription = useRef(); //uso el hook para tomar la referencia del input description
  const {setAddTask} = useTasks(); // Recibo las funcion de añadir tarea del custom hook useTask

  const [formValidation, setFormValidation] = useState({task:undefined});

/*   const isFormValid = Object.keys(formValidation).every(
    (key) => formValidation[key] === ""
  ); */

  //funcion para capturar el nombre de la tarea y descripcion para enviar el evento del form
  const handleAddTask = (e) => {
    setAddTask(e, inputValueRef.current.value, inputDescription.current.value);
    inputValueRef.current.value = "";
    inputDescription.current.value = "";
    inputValueRef.current.focus();
    setFormValidation({...formValidation, task: undefined});
  };

  const handleDescriptionChange = () => {
    const value = inputValueRef.current.value;
    setFormValidation({
      ...formValidation,
      task: value.length === 0 ? "task name is required" : value.length < 3 ? "task name is very short" : ""
    });
  }
  console.log(formValidation);

  return (
    <>
      <form className="add-task">
        <input type="text" ref={inputValueRef} onChange={handleDescriptionChange} placeholder="Add your new task ..."/>
        <input type="text" ref={inputDescription} placeholder="Add description ..."/>
        <button onClick={handleAddTask}>
          <IoMdAddCircle />
        </button>
      </form>
      {formValidation.task && (<MessageSpan message={formValidation.task}/>)}
    </>
  );
}

export default AddTask;
