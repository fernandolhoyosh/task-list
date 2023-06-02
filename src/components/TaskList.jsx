import './TaskList.css'

import Task from './Task'

export function TaskList(){
    return (
        <section className='task-list'>
            <Task name={"Buy a new gaming laptop"} estado = {false}/>
            <Task name={"Complete a previous task"} estado = {false}/>
            <Task name={"Create a video for YouTube"} estado = {true}/>
            <Task name={"Create a new portafolio site"} estado = {true}/>
        </section>
    )
}