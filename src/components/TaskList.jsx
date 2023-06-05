import './TaskList.css'

import Task from './Task'

export function TaskList(props){
    return (
        <section className='task-list'>
            {props.state && <Task name={props.taskName} estado = {false}/>}
        </section>
    )
}