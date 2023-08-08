import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const WidthPageContext = createContext();

export function WidthPageContextProvider({ children }) {

  //Obtener el ancho de la pagina sea cual sea su medida
  const [widthPage, setWidthPage] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidthPage(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const data = {
    widthPage
  };

  return (
    <WidthPageContext.Provider value={data}>
      {children}
    </WidthPageContext.Provider>
  );
}
