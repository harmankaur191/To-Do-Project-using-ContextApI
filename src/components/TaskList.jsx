import TaskListItem from "./TaskListItem";
import { TodoContext } from "../context/TodoContext";
import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
export default function TaskList(){
    const {tasks = []} =useContext(TodoContext);
    const {filter} = useContext(FilterContext);
    const style='border-gray border-1 w-full place-items-start p-5'
    if(tasks.length===0 ){
        console.log(tasks.length);
        return(
            <ul>
                 <label>No todos yet! Add one above</label>
            </ul>
        )
    }
    const filteredTasks = tasks.filter((task)=>{
        if(filter==='active'){
            console.log(filter);
            return (!task.completed);
        }else if(filter === 'completed'){
            console.log(filter);
            return (task.completed);
        }else {
            
            return task;
        }
            
    })
    if(filteredTasks.length===0)
    {
        return(<span className="text-gray-300 text-xl"><em>No {filter} todos.</em></span>)
    }
    return(
        <ul className={style}>
            
            {filteredTasks?.map((task)=>{
              return  <TaskListItem key={task.id} task={task}/>
            })}
            
        </ul>
    )
}