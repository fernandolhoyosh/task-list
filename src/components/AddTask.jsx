import { IoMdAddCircle } from "react-icons/io";

import '../index.css'

function AddTask(){
    return (
        <div className="add-task">
            <input type="text" placeholder="Add your new task ..." />
            <button><IoMdAddCircle/></button>
        </div>
    )

}

export default AddTask;