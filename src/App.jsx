import Buttons from "./components/Buttons";
import TodoInput from "./components/TodoInput";
import './app.css'
import Header from "./components/Header";
import ToggleButton from "./components/ToggleButton";
import TaskList from "./components/TaskList";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { TodoProvider } from "./context/TodoContext";
import { FilterProvider } from "./context/FilterContext";
export default function App() {
  const { theme } = useContext(ThemeContext);

  console.log(theme)
  return (
    <TodoProvider>
      <FilterProvider>
        <div className={`flex flex-col min-h-screen p-10 gap-10 place-items-center border-gray border-1 ${theme === 'light' ? 'bg-gray-200 text-black' : 'bg-gray-900 text-white'}`}>
          <div className="flex gap-5 border-b border-gray-800 p-10">
            <Header /><ToggleButton />
          </div>
          <TodoInput />
          <Buttons />
          <TaskList />
        </div>
      </FilterProvider>
    </TodoProvider>

  )
}