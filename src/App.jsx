import Buttons from "./components/Buttons";
import TodoInput from "./components/TodoInput";
import './app.css'
import Header from "./components/Header";
import ToggleButton from "./components/ToggleButton";
import TaskList from "./components/TaskList";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
export default function App(){
const {theme,toggleThe} =useContext(ThemeContext);
console.log(theme)
  return(
<div className={`flex flex-col min-h-screen p-10 gap-10 place-items-center ${theme === 'light'? 'bg-gray-200 text-black':'bg-black text-white'}`}>
  <div className="flex gap-5 border-b border-gray-800 p-10">
     <Header/><ToggleButton/>
  </div>
      <TodoInput />
        <Buttons />
      <TaskList />
</div>

  )
}