import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({children}){
    const [theme,setTheme] = useState('dark');
    const toggleTheme=()=>{
        setTheme((prev)=>{ return prev === 'dark'? 'light':'dark'});
    };
console.log(theme);
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

