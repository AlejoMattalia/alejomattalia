import {createContext, useState} from "react";

export const LanguageContext = createContext();

export function LanguageContextProvider({children}) {

  //Lenguage de la app, true==Ingles  false==Español 
  const [languageEnglish, setLanguageEnglish] = useState(false);
 

  const data = {
    languageEnglish, 
    setLanguageEnglish
  }

  return (
    <LanguageContext.Provider value={data}>
        {children}
    </LanguageContext.Provider>
  )
}
