import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
export default function TodoInput() {
    const {theme, setTheme}=useContext(ThemeContext);
    const style= theme === 'dark'? 'bg-gray-700 text-white':'bg-white text-black'
    return (<div className="flex gap-2">
        <input type="text" id='taskInput' className={`${style} rounded-sm p-2 text-sm min-w-[350px]`} value="" placeholder="What needs to be done?"  required />
        <button type='submit' id='AddTask'className="bg-blue-600 text-white px-5 py-1.5 rounded-sm hover:bg-blue-800" >Add Too</button>
    </div>)
}