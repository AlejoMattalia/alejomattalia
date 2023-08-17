import { useContext } from "react"
import { DarkModeContext } from "../../../../context/DarkModeContext"
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import "./_StyleButton.scss";


export function ButtonDarkMode() {

  const {darkMode, setDarkMode} = useContext(DarkModeContext);

  const handleColorMode = ()=>{
    setDarkMode(!darkMode)
  }

  return (
    <>
        {
            darkMode === false  
            ?<BsFillMoonFill onClick={handleColorMode} className="icono-mode-dark moon"/>
            :<BsFillSunFill onClick={handleColorMode} className="icono-mode-dark sun"/>
        }
    </>
  )
}
