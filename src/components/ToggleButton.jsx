import { useState } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { useContext } from "react"
import moon from '../assets/mooncopy.png'
import sun from '../assets/sun.png'
export default function ToggleButton(){
const{theme,toggleTheme}=useContext(ThemeContext);
const style= theme === 'dark'?'bg-yellow-600 text-gray-800':'bg-gray-600 text-white'
const img =theme === 'light'? moon:sun;

    return(
        <button id='submit' value='theme' className={`${style} rounded-sm p-2 flex gap-3 font-bold max-w-[150px]`} onClick={toggleTheme}>
            <img src={img} alt="theme" className="max-w-[20px]"/>
            {theme === 'dark'? 'Switch to Light':'Switch to Dark'}
        </button>
    )
}