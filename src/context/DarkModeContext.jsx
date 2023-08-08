import {createContext, useState} from 'react'

export const DarkModeContext = createContext();

export function DarkModeContextProvider({children}) {

  //Modo de la app, true==Modo oscuro, false==Modo blanco
  const [darkMode, setDarkMode] = useState(false);


  const data={
    darkMode, 
    setDarkMode
  }

  return (
    <DarkModeContext.Provider value={data}>
        {children}
    </DarkModeContext.Provider>
  )
}
