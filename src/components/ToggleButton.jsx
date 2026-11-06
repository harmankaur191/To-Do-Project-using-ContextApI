import { useState } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { useContext } from "react"
export default function ToggleButton(){
const{theme,toggleTheme}=useContext(ThemeContext);

    return(
        <button id='submit' value='theme' className="toggleBtn" onClick={toggleTheme}>Toggle</button>
    )
}