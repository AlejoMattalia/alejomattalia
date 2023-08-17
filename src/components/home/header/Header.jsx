import { useState } from "react";
import "./_Header.scss";
import { ButtonDarkMode } from "./elementsHeader/ButtonDarkMode";
import { ButtonLanguageEnglish } from "./elementsHeader/ButtonLanguageEnglish";
import { CarouselState } from "./elementsHeader/Carousel";
import { ModalImage } from "./elementsHeader/ModalImage";
import { motion } from "framer-motion";
import { useContext } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";
import { LanguageContext } from "../../../context/LanguageContext";
import { proyects } from "../../../apis/proyects.js";

export function Header() {
  const [modalIsOpen, setModalISOpen] = useState(false);
  const { darkMode } = useContext(DarkModeContext);
  const { languageEnglish } = useContext(LanguageContext);

  return (
    <section
      className="container-header"
      style={
        darkMode
          ? { background: "#0c0c0c", borderBottom: "1px solid rgb(34, 34, 34)" }
          : { background: "#fff", borderBottom: "1px solid rgb(189, 189, 189)" }
      }
    >
      <div className="container-img-info">
        <img
          src="https://res.cloudinary.com/dp0zorgdp/image/upload/v1691034298/porfolio/imagenmia_xmusne.jpg"
          alt="imagen Alejo Mattalia"
          style={
            darkMode
              ? { border: "1px solid #2b2b2b" }
              : { border: "1px solid rgb(189, 189, 189)" }
          }
          onClick={() => setModalISOpen(true)}
        />

        <ModalImage setModalISOpen={setModalISOpen} modalIsOpen={modalIsOpen} />

        <div className="conatiner-info-header">
          <motion.div
            className="user-darkMood"
            initial={{ y: -1500 }}
            animate={{ y: 0 }}
            transition={{ duration: 3 }}
          >
            <p style={darkMode ? { color: "#fff" } : { color: "#000" }}>
              Alejo Mattalia
            </p>

            <div className="container-func">
              <ButtonDarkMode />
              <ButtonLanguageEnglish />
            </div>
          </motion.div>

          <motion.div
            className="proyects-frontEnd"
            initial={{ x: 1500 }}
            animate={{ x: 0 }}
            transition={{ duration: 3 }}
            style={darkMode ? { color: "#fff" } : { color: "#000" }}
          >
            <p>
              <span>{proyects.length} </span>
              {languageEnglish ? "projects" : "proyectos"}
            </p>
            <p>
              {languageEnglish
                ? "FrontEnd Developer"
                : "Desarrollador FrontEnd"}
            </p>
            <p>{languageEnglish ? "Programming" : "Programación"}</p>
          </motion.div>

          <motion.div
            className="container-data"
            initial={{ x: -1500 }}
            animate={{ x: 0 }}
            transition={{ duration: 3 }}
            style={darkMode ? { color: "#fff" } : { color: "#000" }}
          >
            <p>🅰Alejo Mattalia</p>

            <p>🥧{languageEnglish ? "19 years" : "19 años"}</p>
            <p>🌆Corral de Bustos, Argentina</p>
            <p>
              ⚽<span>Hobbies</span>:{" "}
              {languageEnglish ? "playing football" : "jugar al fútbol"}
            </p>
            <p>💻{languageEnglish ? "Web development" : "Desarrollo web"}</p>
          </motion.div>
        </div>
      </div>

      <CarouselState />

      <section className="container-front-proyect-responsive">
        <div
          className="container-front-proyect-responsive-children"
          style={
            darkMode
              ? { color: "#fff", borderTop: "1px solid rgb(34, 34, 34)" }
              : { color: "#000", borderTop: "1px solid rgb(189, 189, 189)" }
          }
        >
          <div>
            <p>{proyects.length}</p>
            <p>{languageEnglish ? "projects" : "proyectos"}</p>
          </div>

          <div>
            <p>{languageEnglish ? "FrontEnd" : "Desarrollador"}</p>
            <p>{languageEnglish ? "Developer" : "FrontEnd"}</p>
          </div>

          <div>
            <p>{languageEnglish ? "Programming" : "Programación"}</p>
          </div>
        </div>
      </section>
    </section>
  );
}
