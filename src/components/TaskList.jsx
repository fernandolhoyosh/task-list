import './TaskList.css'

import Task from './Task'

export function TaskList({obj}){

    return (
        <section className='task-list'>
            {obj.map(({name, status},index) =>(
                <Task id={index} name={name} estado={status}/>
            ))}
        </section>
    )
}