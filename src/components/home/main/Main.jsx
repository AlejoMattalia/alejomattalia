import "./_Main.scss";
import { FiMonitor } from "react-icons/fi";
import { PiCertificateBold } from "react-icons/pi";
import { FaRegCommentDots } from "react-icons/fa";
import { ContainerImage } from "./elementsMain/ContainerImage";
import { proyects } from "../../../apis/proyects";
import { certifications } from "../../../apis/certifications";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";
import { LanguageContext } from "../../../context/LanguageContext";

export function Main({ data }) {
  const {
    clickIsProyect,
    handleProyectButton,
    clickIsCertifications,
    handleCertificationsButton,
    clickIsAboutMe,
    handleAboutMeButton,
  } = data;

  const { darkMode } = useContext(DarkModeContext);
  const { languageEnglish } = useContext(LanguageContext);
  const [borderColor, setBorderColor] = useState("#000");

  useEffect(() => {
    if (darkMode === true) {
      setBorderColor("#fff");
    } else {
      setBorderColor("#000");
    }
  }, [darkMode]);

  return (
    <main className="container-main">
      <div className="container-main-header">
        <div
          className="icon-p"
          style={
            clickIsProyect
              ? { borderTop: `2px solid ${borderColor}` }
              : { borderTop: "2px solid transparent" }
          }
          onClick={handleProyectButton}
        >
          <FiMonitor style={darkMode ? { color: "#fff" } : { color: "#000" }} />
          <p style={darkMode ? { color: "#fff" } : { color: "#000" }}>
            {languageEnglish ? "PROYECTS" : "PROYECTOS"}
          </p>
        </div>

        <div
          className="icon-p"
          style={
            clickIsCertifications
              ? { borderTop: `2px solid ${borderColor}` }
              : { borderTop: "2px solid transparent" }
          }
          onClick={handleCertificationsButton}
        >
          <PiCertificateBold
            style={darkMode ? { color: "#fff" } : { color: "#000" }}
          />
          <p style={darkMode ? { color: "#fff" } : { color: "#000" }}>
            {languageEnglish ? "CERTIFICATIONS" : "CERTIFICACIONES"}
          </p>
        </div>

        <div
          className="icon-p"
          style={
            clickIsAboutMe
              ? { borderTop: `2px solid ${borderColor}` }
              : { borderTop: "2px solid transparent" }
          }
          onClick={handleAboutMeButton}
        >
          <FaRegCommentDots
            style={darkMode ? { color: "#fff" } : { color: "#000" }}
          />
          <p style={darkMode ? { color: "#fff" } : { color: "#000" }}>
            {languageEnglish ? "ABOUT ME" : "SOBRE MÍ"}
          </p>
        </div>
      </div>

      {clickIsProyect ? (
        <ContainerImage
          array={proyects}
          proyect={true}
          certifications={false}
        />
      ) : (
        clickIsCertifications && (
          <ContainerImage
            array={certifications}
            proyect={false}
            certifications={true}
          />
        )
      )}

      {clickIsAboutMe &&
        (languageEnglish ? (
          <div className="container-aboutMe">
            <p style={darkMode ? { color: "#fff" } : { color: "#000" }}>
              I am a passionate and motivated individual driven to learn new
              things. My creativity and determination guide me in the direction
              towards my goals and objectives. I always express my opinion on
              the subjects I engage with, contributing a critical approach to
              the current situation.
              <br />
              <br />
              I constantly seek new challenges, enjoy acquiring knowledge, and
              staying up-to-date with the latest innovations in the field of web
              development. My interest in this field has turned into a passion
              that drives me to explore new technologies and techniques to
              create compelling projects.
              <br />
              <br />
              Furthermore, my ability to work in teams allows me to blend my
              technical skills with those of my team, thereby achieving strong
              and impactful outcomes in web projects.
            </p>
          </div>
        ) : (
          <div className="container-aboutMe">
            <p style={darkMode ? { color: "#fff" } : { color: "#000" }}>
              Soy una persona apasionada y motivada por aprender cosas nuevas.
              Mi creatividad y determinación me guían en la dirección hacia mis
              objetivos y metas. Siempre expreso mi opinión en los temas en los
              que me involucro, aportando un enfoque crítico a la situación
              presente.
              <br />
              <br />
              Constantemente busco nuevos desafíos, disfruto adquiriendo
              conocimientos y manteniéndome al día con las últimas innovaciones
              en el ámbito del desarrollo web. Mi interés por este campo se ha
              convertido en una pasión que me impulsa a explorar nuevas
              tecnologías y técnicas para crear proyectos llamativos.
              <br />
              <br />
              Además, mi habilidad para trabajar en equipos me permite combinar
              mis habilidades técnicas con las de mi equipo, logrando así
              resultados sólidos y de alto impacto en proyectos web.
            </p>
          </div>
        ))}
    </main>
  );
}
