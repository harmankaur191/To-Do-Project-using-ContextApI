import edit from '../assets/edit.png'
import deletebtn from '../assets/deleteTodo.png';
import { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import { ThemeContext } from '../context/ThemeContext';
import { FilterContext } from '../context/FilterContext';

export default function TaskListItem({ task }) {
    const { theme } = useContext(ThemeContext)
    const { filter } = useContext(FilterContext)
    const { toggleTodo, deleteTodo, editTodo } = useContext(TodoContext)
    const [editText, setEditText] = useState(task ? task.text : '');
    const [isEditing, setIsEditing] = useState(false);
    const style = theme === 'dark' ? 'text-white bg-gray-800' : 'text-black';

    const handleToggle = () => {

        toggleTodo(task.id)


    }
    const handledelete = (e) => {
        deleteTodo(task.id)

    }

    const handleEdit = (e) => {
        if (editText !== '') {
            editTodo(task.id, editText);
            setIsEditing(false);
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleEdit();
        }

    }

    return (<div className={`${style} w-full flex gap-20 border-b border-gray-900 justify-between shadow-sm shadow-black p-5 rounded-md`}>
        <div className='flex gap-3'>
            <input type='checkbox' id='checkbox' onChange={handleToggle} checked={task.completed} />
            {isEditing ?
                <input type='text' value={editText} onChange={(e) => { setEditText(e.target.value) }} onKeyDown={handleKeyDown} onBlur={handleEdit} className={`${theme==='dark'? 'bg-gray-800 border-white border-1': 'bg-white border-black border-1'}`} autoFocus/>

            : (
                <li key={task.id} className={`${style}  `}>{task.text}
                </li>)}
            </div>
        <div className='flex flex-row gap-3 place-items-end'>
            <button id='editTask' type='button' onClick={() => { setIsEditing(true) }}><img src={edit} className='max-w-[20px]' /></button>
            <button id='deleteTask' type='submit' onClick={handledelete}><img src={deletebtn} className='max-w-[20px]' /></button>
        </div>
    </div>
    )
}