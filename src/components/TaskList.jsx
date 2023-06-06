import './TaskList.css'

import Task from './Task'

export function TaskList({taskList}){

    return (
        <section className='task-list'>
            {taskList.map(({name, status},index) =>(
                <Task key={index} id={index} name={name} estado={status}/>
            ))}
            {console.log(taskList)}
        </section>
    )
}