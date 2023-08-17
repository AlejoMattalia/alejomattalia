import { useParams } from "react-router-dom";
import { Proyect } from "./Proyect.jsx";
import { useEffect, useState } from "react";
import { proyects } from "../../apis/proyects.js";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext.jsx";
import { LanguageContext } from "../../context/LanguageContext.jsx";

export function ProyectContainer() {
  const [proyect, setProyect] = useState({});
  const { id } = useParams();

  useEffect(() => {
    let proyectSelected = proyects.find((el) => el.id === +id);

    new Promise((res) => res(proyectSelected)).then((response) =>
      setProyect(response)
    );
  }, [id]);

  //Guardar en un array las imagenes delas tecnologias utilizadas
  const [arrayTecnology, setArrayTecnology] = useState([]);
  useEffect(() => setArrayTecnology(proyect.technologies), [proyect]);

  //Modo oscuro
  const { darkMode } = useContext(DarkModeContext);

  //Efecto en la descripcion
  const [showEffect, setShowEffect] = useState(false);

  //Ingles
  const {languageEnglish} = useContext(LanguageContext)

  const data = {
    proyect,
    arrayTecnology,
    darkMode,
    setShowEffect,
    showEffect,
    languageEnglish
  };

  return <Proyect data={data} />;
}
