import "./_Footer.scss";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { DarkModeContext } from "../../../context/DarkModeContext";
import { useContext } from "react";

export function Footer() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className="div-handle">
      <section
        className="container-footer"
        style={
          darkMode
            ? { borderTop: "1px solid rgb(34, 34, 34)" }
            : { borderTop: "1px solid rgb(189, 189, 189)" }
        }
      >
        <img
          src={
            darkMode
              ? "https://res.cloudinary.com/dp0zorgdp/image/upload/v1691012946/porfolio/portfolioIconblanco_gsfakn.png"
              : "https://res.cloudinary.com/dp0zorgdp/image/upload/v1691012915/porfolio/portfolioIconNegro_dqndjg.png"
          }
          alt=""
        />

        <div className="container-info-footer">
          <div className="container-icon-footer">
            <a href="https://www.instagram.com/alejomattalia/" target="_blank" rel="noreferrer">
              <AiFillInstagram
                className="icon"
                style={darkMode ? { color: "#fff" } : { color: "#000" }}
              />
            </a>
            <a href="https://www.instagram.com/alejomattalia/" target="_blank" rel="noreferrer" style={darkMode ? { color: "#fff" } : { color: "#000" }}>
              <p>Instagram</p>
            </a>
          </div>

          <div className="container-icon-footer">
            <a href="https://www.linkedin.com/in/alejo-mattalia/" target="_blank" rel="noreferrer">
              <BsLinkedin
                className="icon"
                style={darkMode ? { color: "#fff" } : { color: "#000" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/alejo-mattalia/" target="_blank" rel="noreferrer" style={darkMode ? { color: "#fff" } : { color: "#000" }}>
              <p>Linkedin</p>
            </a>
          </div>

          <div className="container-icon-footer">
            <a href="https://api.whatsapp.com/send?phone=543468530707" target="_blank" rel="noreferrer">
              <IoLogoWhatsapp
                className="icon"
                style={darkMode ? { color: "#fff" } : { color: "#000" }}
              />
            </a>
            <a href="https://api.whatsapp.com/send?phone=543468530707" target="_blank" rel="noreferrer" style={darkMode ? { color: "#fff" } : { color: "#000" }}>
              <p>Whatsapp</p>
            </a>
          </div>

          <div className="container-icon-footer">
            <a href="mailto:alejoomattalia@gmail.com" target="_blank" rel="noreferrer">
              <MdEmail
                className="icon"
                style={darkMode ? { color: "#fff" } : { color: "#000" }}
              />
            </a>
            <a href="mailto:alejoomattalia@gmail.com" target="_blank" rel="noreferrer" style={darkMode ? { color: "#fff" } : { color: "#000" }}>
              <p>Gmail</p>
            </a>
          </div>

          <div className="container-icon-footer">
            <a href="https://github.com/AlejoMattalia" target="_blank" rel="noreferrer">
              <BsGithub
                className="icon"
                style={darkMode ? { color: "#fff" } : { color: "#000" }}
              />
            </a>
            <a href="https://github.com/AlejoMattalia" target="_blank" rel="noreferrer" style={darkMode ? { color: "#fff" } : { color: "#000" }}>
              <p>GitHub</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
