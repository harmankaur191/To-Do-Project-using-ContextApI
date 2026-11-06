
export default function TaskListItem({task}){
    const style='text-white'
    console.log(task)
    return(
           <li className={style} key={task.id}>{task.text}</li>)
}