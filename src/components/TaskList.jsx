import TaskListItem from "./TaskListItem";
import { TodoContext } from "../context/TodoContext";
import { useContext } from "react";
export default function TaskList(){
    const {tasks = []} =useContext(TodoContext);
    if(tasks.length===0){
        console.log(tasks.length);
        return(
            <ul>
                 <label>No todos yet! Add one above</label>
            </ul>
        )
    }
    return(
        <ul>
            {tasks?.map((task)=>{
              return  <TaskListItem key={task.id} task={task}/>
            })}
            
        </ul>
    )
}