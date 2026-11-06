import { createContext, useContext, useState } from "react";
export const FilterContext = createContext() ;
export function FilterProvider({children}){
    const [filter, setFilter]=useState('active');
    const filterTodo=(filter)=>{
        setFilter(filter)
    };
    console.log(filter);

    return(
        <FilterContext.Provider value={{filter,filterTodo}}>
            {children}
        </FilterContext.Provider>
    )
}