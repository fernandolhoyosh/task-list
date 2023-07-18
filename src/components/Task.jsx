import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useTasks } from "../hooks/useTasks";
import { useColorModeValue, Tag, Checkbox, Highlight  } from "@chakra-ui/react";

import AlertDeleteTask from "./alerts/AlertDeleteTask";
import EditTask from "./promps/EditTask";

import "./Task.css";
import { useState } from "react";

export default function Task(props) {
  /* const colorNameTask = useColorModeValue("black","black"); */
  const [clickDelete, setClickDelete] = useState(false);
  const [clickEdit, setClickEdit] = useState(false);

  const { id, name, estado, description } = props;

  //Desestructuro las funciones a utilizar del custom hook useTasks
  const { setChangeStatusTask } = useTasks();

  // condicion para cambiar los styles de la clase dependiendo del estado del checkbox
  const classTaskText = estado ? "task-strikethrough" : "task-pending";
  const colorSchemeTag = estado ? "gray" : "gray";

  //llamada de la funcion del custom hook para cambiar y actualizar el estado del checkbox cuando se de click
  const handleCheckedTaskChange = () => {
    setChangeStatusTask(id, !estado);
  };

  return (
    <Tag
      id={id}
      className="task-component"
      size="lg"
      colorScheme={colorSchemeTag}
      title={description !== "" ? "Description: " + description : description}
    >
      {/* <article id={id} className="task-component" title={description !== "" ? "Description: "+ description : description}> */}
      <div className="check-task">
        <Checkbox
          size="lg"
          colorScheme="green"
          borderColor="gray"
          defaultChecked={estado}
          onChange={handleCheckedTaskChange}
        />
        {/* <input type="checkbox" checked = {estado} onChange={handleCheckedTaskChange} /> */}
        <p className={classTaskText}>{name}</p>
        {/* <Highlight query={name} styles={{ px: '5', py: '2', rounded:'full', bg: 'green.100' }} >{name}</Highlight> */}
      </div>
      <div className="buttons-actions">
        <button
          id="btn-edit"
          onClick={() => setClickEdit(true)}
          title="Edit task"
        >
          <FaEdit className="icons" />
        </button>
        <button
          id="btn-delete"
          onClick={() => setClickDelete(true)}
          title="Delete task"
        >
          <RiDeleteBin6Line className="icons" />
        </button>
      </div>
      {
        <AlertDeleteTask
          isOpen={clickDelete}
          onClose={() => setClickDelete(false)}
          id={id}
          name={name}
        />
      }
      {
        <EditTask
          isOpen={clickEdit}
          onClose={() => setClickEdit(false)}
          name={name}
        />
      }
      {/* </article> */}
    </Tag>
  );
}
