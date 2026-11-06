import TaskListItem from "./TaskListItem";
import { TodoContext } from "../context/TodoContext";
import { useContext } from "react";
export default function TaskList(){
    const {tasks = []} =useContext(TodoContext);
    const style='border-gray border-1 w-full place-items-start p-5'
    if(tasks.length===0){
        console.log(tasks.length);
        return(
            <ul>
                 <label>No todos yet! Add one above</label>
            </ul>
        )
    }
    return(
        <ul className={style}>
            {tasks?.map((task)=>{
              return  <TaskListItem key={task.id} task={task}/>
            })}
            
        </ul>
    )
}