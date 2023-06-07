import './ClearTasks.css'

export const ClearTasks = ({onClearTasks})=>{

    const handleclearTask = ()=>{
        onClearTasks();
    }

    return(
        <button id="btn-reset" onClick={handleclearTask}>Delete Tasks</button>
    )
}