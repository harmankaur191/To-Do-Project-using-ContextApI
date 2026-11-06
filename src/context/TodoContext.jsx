import { createContext, useContext, useState } from "react";
export const TodoContext =createContext();
export function TodoProvider({children}){
const [tasks, setTasks]=useState([]);
const addTodo=(text)=>{
    const newTask={
        id:Date.now(),
        text:text,
        completed:false
    };
    setTasks((prev)=>[...prev,newTask]);
};
console.log(tasks)
    return(
        <TodoContext.Provider value={{tasks,addTodo}}>
            {children}
        </TodoContext.Provider>
    )
        
    }
