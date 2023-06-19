import './ClearTasks.css'

export const ClearTasks = ({onClearTasks})=>{

    return(
        <button id="btn-reset" onClick={()=> onClearTasks()}>Delete Tasks</button>
    )
}