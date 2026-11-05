import Buttons from "./components/Buttons";
import TodoInput from "./components/TodoInput";
import './app.css'
import Header from "./components/Header";
import ToggleButton from "./components/ToggleButton";
import TaskList from "./components/TaskList";
export default function App(){
  return(
<div className="flex flex-col bg-black text-white p-10 gap-5">
  <div className="flex ">
     <Header/><ToggleButton/>
  </div>
      <TodoInput />
      <Buttons />
      <TaskList />
</div>

  )
}