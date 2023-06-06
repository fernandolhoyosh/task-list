import './TaskList.css'
import Task from './Task'
import { useState } from 'react'

export function TaskList({props}){

    const{taskName} = props;

    const[tasks, setTasks] = useState([]);

    const newTask = {
        name: taskName,
        state: false
    };

    

    return (
        <section className='task-list'>
            {taskList.map(({name, status},index) =>(
                <Task key={index} id={index} name={name} estado={status}/>
            ))}
        </section>
    )
}