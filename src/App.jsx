import React, { useState } from 'react'
import NoteApp from './components/Noteapp';
import { createContext } from "react";


export const ThemeContext = createContext();


const App = () => {
  
   const [theme,setTheme] = useState('light')
   

   // function dark mode 
   const toggleFunction =()=>{
    if(theme==='light'){
      setTheme('dark')
    }else{
      setTheme('light')
    }
   }


  return (
    <div>
      <ThemeContext.Provider value={{theme,toggleFunction}}>
        
        <div style={{color: theme === "light" ? "#333" : "#fff",
         border: theme === "light" ? "1px solid #000" : "1px solid #fff",
         backgroundColor: theme === "light" ? "#fff" : "#333"}}>
          
        <NoteApp />
        </div>
      </ThemeContext.Provider>
    </div>
  )
}

export default App
