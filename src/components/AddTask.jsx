import { IconButton } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import { useRef, useState} from "react";
import { useTasks } from "../hooks/useTasks"
import "./AddTask.css"
import MessageSpan from "./atoms/MessageSpan";

function AddTask() {

  const inputValueRef = useRef(); //uso el hook para tomar la referencia o valor del input de texto
  const inputDescription = useRef(); //uso el hook para tomar la referencia del input description
  const {setAddTask} = useTasks(); // Recibo las funcion de añadir tarea del custom hook useTask

  const [formValidation, setFormValidation] = useState({task:undefined});

  //funcion para capturar el nombre de la tarea y descripcion para enviar el evento del form
  const handleAddTask = (e) => {
    setAddTask(e, inputValueRef, inputDescription, formValidation);
    /* setFormValidation({...formValidation, task: undefined}); */
  };

  const handleFormValidationTask = () => {
    const value = inputValueRef.current.value;
    setFormValidation({
      ...formValidation,
      task: value.length === 0 ? "task name is required" : value.length < 3 ? "task name is very short" : ""
    });
  }

  const classInputTask = formValidation.task ? "input-error":"input-text";

  console.log(formValidation);

  return (
    <>
      <form className="add-task">
        <input type="text" className={classInputTask} ref={inputValueRef} onChange={handleFormValidationTask} placeholder="Add your new task ..."/>
        <input type="text" className="input-text" ref={inputDescription} placeholder="Add a description ..."/>
        <IconButton id='btn-add-task' type='submit' colorScheme="blue" aria-label="Add task" icon={<AddIcon/>} title="Add task" onClick={handleAddTask}/>
        {formValidation.task && (<MessageSpan message={formValidation.task}/>)}
      </form>
    </>
  );
}

export default AddTask;
