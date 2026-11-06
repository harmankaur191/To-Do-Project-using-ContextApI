import { useContext } from "react"
import { FilterContext } from "../context/FilterContext"
export default function Buttons(){
    const {filter,filterTodo}=useContext(FilterContext);

    const style='onclick:bg-blue-700';
    const handleFilter=(e)=>{
        const filterBtn=e.target.id
        filterTodo(filterBtn)
    }
    return(
        <div className="flex gap-5">
            <button type='submit' id='all' onClick={handleFilter} className={`${filter ==='all'?'bg-blue-600':'bg-gray-800 text-white'} px-5 py-2 rounded-sm`}>All</button>
            <button type='submit' id='active' onClick={handleFilter} className={`${filter ==='active'?'bg-blue-600':'bg-gray-800 text-white'} px-5 py-2 rounded-sm`}>Active</button>
            <button type='submit' id='completed' onClick={handleFilter} className={`${filter ==='completed'?'bg-blue-600':'bg-gray-800 text-white '} px-5 py-2 rounded-sm`} >Completed</button>
        </div>
    )
}