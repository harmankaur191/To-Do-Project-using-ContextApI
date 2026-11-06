import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
export default function Header(){
    const {theme, setTheme}=useContext(ThemeContext);
    return(
    <div className={`${theme === 'dark'? 'text-white':'text-black' } text-4xl font-bold`}>
    <h1>Todo App(Context API)</h1>
</div>
)
}