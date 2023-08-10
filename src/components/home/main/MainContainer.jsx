import { useState } from "react";
import {Main} from "./Main.jsx";

export function MainContainer() {
  //Variable para colocar el borde superior de la seccion proyectos
  const [clickIsProyect, setClickIsProyect] = useState(true)
  //Variable para colocar el borde superior de la seccion certificados
  const [clickIsCertifications, setClickIsCertifications] = useState(false);
  //Variable para colocar el borde superior de la seccion sobre mi
  const [clickIsAboutMe, setClickIsAboutMe] = useState(false)
  

  const handleProyectButton = ()=>{
    setClickIsProyect(true)
    setClickIsCertifications(false)
    setClickIsAboutMe(false)
  }
  const handleCertificationsButton = ()=>{
    setClickIsProyect(false)
    setClickIsCertifications(true)
    setClickIsAboutMe(false)
  }
  const handleAboutMeButton = ()=>{
    setClickIsProyect(false)
    setClickIsCertifications(false)
    setClickIsAboutMe(true)
  }

  const data = {
    clickIsProyect,
    handleProyectButton,
    clickIsCertifications,
    handleCertificationsButton,
    clickIsAboutMe,
    handleAboutMeButton
  }
  return (
    <Main data={data}/>
  )
}
