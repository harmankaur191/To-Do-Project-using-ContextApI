import { ThemeContext } from "../context/ThemeContext";
import { TodoContext } from "../context/TodoContext";
import { useContext } from "react";
export default function TodoInput() {
    const {theme, toggleTheme}=useContext(ThemeContext);
    const {tasks, addTodo, toggleTodo}=useContext(TodoContext);
    

    const handleSubmit = (e)=>{
        if(e.target.id === 'addTask'){
            const todoInput = document.getElementById('taskInput');
            const value=todoInput.value;
            addTodo(value);
            todoInput.value='';
        }
    }
    

    const style= theme === 'dark'? 'bg-gray-700 text-white':'bg-white text-black'
    return (<div className="flex gap-2">
        <input type="text" id='taskInput' className={`${style} rounded-sm p-2 text-sm min-w-[350px]`} placeholder="What needs to be done?"  required />
        <button type='submit' id='addTask' onClick = {handleSubmit} className="bg-blue-600 text-white px-5 py-1.5 rounded-sm hover:bg-blue-800" >Add Todo</button>
    </div>)
}