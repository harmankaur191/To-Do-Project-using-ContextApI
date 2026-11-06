import edit from '../assets/edit.png'
import deletebtn from '../assets/deleteTodo.png';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
export default function TaskListItem({ task }) {
    const {toggleTodo,deleteTodo}=useContext(TodoContext)
    const style = 'text-white  '
    console.log(task)
    const handleToggle=()=>{
      
            toggleTodo(task.id)
        
        
    }
    const handledelete=(e)=>{
        deleteTodo(task.id)

    }
    console.log(task.completed)
    return (<div className='flex flex-row gap-20'>
        <input type='checkbox' id='checkbox' onChange={handleToggle} checked={task.completed}/>
        <li className={style} key={task.id}>{task.text}{task.completed?'True':'false'}  
        </li>
        <button id='editTask' type='submit'><img src={edit} className='max-w-[20px]' /></button>
            <button id='deleteTask' type='submit' onClick={handledelete}><img src={deletebtn} className='max-w-[20px]' /></button>
    </div>
    )
}