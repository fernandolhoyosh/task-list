import './ClearTasks.css'
import { useTasks } from '../../hooks/useTasks'

export const ClearTasks = ()=>{

    const{setResetTasksList} = useTasks(); // uso la funcion resetTaskList del custom hook useTasks

    return(
        <button id="btn-reset" onClick={setResetTasksList}>Clear All</button>
    )
}