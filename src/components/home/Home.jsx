import { Header } from "./header/Header";
import "./_Home.scss";
import { Footer } from "./footer/Footer";
import { NavBar } from "./navBar/NavBar";
import { MainContainer } from "./main/MainContainer";
import { ContactContainer } from "./contact/ContactContainer";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { Rings } from "react-loader-spinner";
import { useEffect } from "react";
import { useState } from "react";

export function Home() {
  const { darkMode } = useContext(DarkModeContext);
  const { languageEnglish } = useContext(LanguageContext);

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Mostrar los anillos de carga durante 5 segundos
    const loadingTimer = setTimeout(() => {
      setShowLoading(false);
    }, 2500);

    return () => {
      clearTimeout(loadingTimer); // Limpiar el temporizador al desmontar el componente
    };
  }, []);

  return (
    <>
      {showLoading ? (
        <div
          className="container-loading-ring"
          style={
            darkMode
              ? {
                  backgroundColor: "#0c0c0c",
                }
              : {
                  backgroundColor: "#fff",
                }
          }
        >
          <p style={darkMode ? { color: "#fff" } : { color: "#0c0c0c" }}>
            {languageEnglish ? "LOADING..." : "CARGANDO..."}
          </p>
          <Rings
            height="150"
            width="150"
            color={darkMode ? "#fff" : "#0c0c0c"}
            radius="10"
            visible={true}
            ariaLabel="rings-loading"
          />
        </div>
      ) : (
        <div
          className="container-home"
          style={darkMode ? { background: "#0c0c0c" } : { background: "#fff" }}
        >
          <div style={{ display: "flex" }}>
            <NavBar />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Header />
              <MainContainer />
              <ContactContainer />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
