import "./Proyect.scss";
import { Button } from "@mui/material";
import { BsFillGearFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsArrowDownCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Proyect({ data }) {
  const {
    proyect,
    arrayTecnology,
    darkMode,
    languageEnglish,
    setShowEffect,
    showEffect,
    widthPage
  } = data;

  return (
    <section
      className="container-proyect-background"
      style={
        darkMode ? { backgroundColor: "#0c0c0c" } : { backgroundColor: "#fff" }
      }
    >
      <Link
        to="/"
        className="container-arrow-exit link"
        style={darkMode ? { color: "#ebebeb" } : { color: "#585858" }}
      >
        <AiOutlineArrowLeft className="arrow" />

        <p>{languageEnglish ? "EXIT" : "VOLVER"}</p>
      </Link>

      <div
        className="container-proyect"
        style={
          darkMode
            ? { border: "2px solid #333333" }
            : { border: "2px solid #e7e7e7" }
        }
      >
        <img src={proyect.img} alt="proyect" className="img-proyect" />

        <div className="container-data">
          <p style={widthPage <= 540 && darkMode ? { color: "#fff" } : { color: "#000" }}>
            {languageEnglish ? proyect.nameEnglish : proyect.nameSpanish}
          </p>

          <div className="container-img">
            <div>
              <BsFillGearFill style={{ fontSize: "20px" }} />
              <AiOutlineArrowRight />
            </div>{" "}
            {arrayTecnology &&
              arrayTecnology.map((tecnology, index) => {
                return <img src={tecnology} alt="" key={index} />;
              })}
          </div>

          <div className="container-button">
            <a href={proyect.deploy} target="_blank" rel="noreferrer">
              <Button
                variant="contained"
                color="blackColor"
                className="button button-deploy"
              >
                {languageEnglish ? "Deploy" : "Ir al sitio"}
              </Button>
            </a>

            <a href={proyect.gitHub} target="_blank" rel="noreferrer">
              <Button variant="outlined" color="secondary" className="button">
                {languageEnglish ? "repository" : "Ver código"}
              </Button>
            </a>
          </div>

          <BsArrowDownCircleFill
            className="arrow-bottom"
            onClick={() => setShowEffect(true)}
          />
        </div>
      </div>

      <motion.div
        className="container-description"
        style={
          darkMode
            ? { border: "2px solid #333333", borderTop: "none" }
            : { border: "2px solid #e7e7e7", borderTop: "none" }
        }
        initial={{ y: -190 }}
        animate={showEffect && { y: 0, x: 0 }}
        transition={{ duration: 2 }}
      >
        <p className="description">
          {languageEnglish ? "Description" : "Descripción"}
        </p>
        <p className="text">
          {languageEnglish
            ? proyect.descriptionEnglish
            : proyect.descriptionSpanish}
        </p>
      </motion.div>
    </section>
  );
}
