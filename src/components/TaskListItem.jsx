import edit from '../assets/edit.png'
import deleteTodo from '../assets/deleteTodo.png';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
export default function TaskListItem({ task }) {
    const {toggleTodo}=useContext(TodoContext)
    const style = 'text-white  '
    console.log(task)
    const handleToggle=(e)=>{
        const toggle =e.target; 
        if(toggle.checked){
            toggleTodo(task.id)
        }
        
    }
    console.log(task.completed)
    return (<div className='flex flex-row gap-20'>
        <input type='checkbox' id='checkbox' onChange={handleToggle}/>
        <li className={style} key={task.id}>{task.text}

            
        </li>
        <button id='editTask' type='submit'><img src={edit} className='max-w-[20px]' /></button>
            <button id='deleteTask' type='submit'><img src={deleteTodo} className='max-w-[20px]' /></button>
    </div>
    )
}