import { createContext, useContext, useState } from "react";
export const TodoContext = createContext();
export function TodoProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    const addTodo = (text) => {
        const newTask = {
            id: Date.now(),
            text: text,
            completed: false
        };
        setTasks((prev) => [...prev, newTask]);
    };

    const toggleTodo = (id) => {
        setTasks(tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task))

    };
    const deleteTodo = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))

    }
    const editTodo = (id, newText) => {

        setTasks(tasks.map((task) => task.id === id ? { ...task, text: newText } : task))
        console.log(tasks)
    }


    return (
        <TodoContext.Provider value={{ tasks, addTodo, toggleTodo, deleteTodo, editTodo }}>
            {children}
        </TodoContext.Provider>
    )

}
