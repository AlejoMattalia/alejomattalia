import { BsLinkedin, BsGithub, BsFillBriefcaseFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import "./_NavBar.scss";
import { motion } from "framer-motion";
import { DarkModeContext } from "../../../context/DarkModeContext";
import { useContext } from "react";

export function NavBar() {
  const { darkMode } = useContext(DarkModeContext);

  //Seccion donde se muestra las redes sociales
  return (
    <div className="div-occupy-space">
      <section
        className="container-navBar"
        style={
          darkMode ? { backgroundColor: "#0c0c0c", borderRight: "1px solid rgb(34, 34, 34)" } : { backgroundColor: "#fff", borderRight: "1px solid rgb(189, 189, 189)" }
        }
      >
        <motion.img
          animate={{ scale: 1.1 }}
          transition={{ duration: 2, repeat: 3 }}
          src={
            darkMode
              ? "https://res.cloudinary.com/dp0zorgdp/image/upload/v1691012946/porfolio/portfolioIconblanco_gsfakn.png"
              : "https://res.cloudinary.com/dp0zorgdp/image/upload/v1691012915/porfolio/portfolioIconNegro_dqndjg.png"
          }
          alt="icon"
        />

        <motion.div
          animate={{ scale: 1.3 }}
          transition={{ duration: 2, repeat: 3 }}
        >
          <BsFillBriefcaseFill className="icon-briefcase" style={darkMode ? {color:"#fff"} : {color: "#000"}}/>
        </motion.div>

        <div className="container-info">
          <motion.div
            className="container-icon"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <a href="https://www.instagram.com/alejomattalia/" target="_blank" rel="noreferrer">
              <AiFillInstagram className="icon" style={darkMode ? {color:"#fff"} : {color: "#000"}}/>
            </a>
            <a href="https://www.instagram.com/alejomattalia/" target="_blank" rel="noreferrer">
              <p style={darkMode ? {color:"#fff"} : {color: "#000"}}>Instagram</p>
            </a>
          </motion.div>

          <motion.div
            className="container-icon"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <a href="https://www.linkedin.com/in/alejo-mattalia/" target="_blank" rel="noreferrer">
              <BsLinkedin className="icon" style={darkMode ? {color:"#fff"} : {color: "#000"}}/>
            </a>
            <a href="https://www.linkedin.com/in/alejo-mattalia/" target="_blank" rel="noreferrer">
              <p style={darkMode ? {color:"#fff"} : {color: "#000"}}>Linkedin</p>
            </a>
          </motion.div>

          <motion.div
            className="container-icon"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <a href="https://api.whatsapp.com/send?phone=543468530707" target="_blank" rel="noreferrer">
              <IoLogoWhatsapp className="icon" style={darkMode ? {color:"#fff"} : {color: "#000"}}/>
            </a>
            <a href="https://api.whatsapp.com/send?phone=543468530707" target="_blank" rel="noreferrer">
              <p style={darkMode ? {color:"#fff"} : {color: "#000"}}>Whatsapp</p>
            </a>
          </motion.div>

          <motion.div
            className="container-icon"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <a href="mailto:alejoomattalia@gmail.com" target="_blank" rel="noreferrer">
              <MdEmail className="icon" style={darkMode ? {color:"#fff"} : {color: "#000"}}/>
            </a>
            <a href="mailto:alejoomattalia@gmail.com" target="_blank" rel="noreferrer">
              <p style={darkMode ? {color:"#fff"} : {color: "#000"}}>Gmail</p>
            </a>
          </motion.div>

          <motion.div
            className="container-icon"
            whileHover={{ scale: 1.2, rotate: 10 }}
          >
            <a href="https://github.com/AlejoMattalia" target="_blank" rel="noreferrer">
              <BsGithub className="icon" style={darkMode ? {color:"#fff"} : {color: "#000"}}/>
            </a>
            <a href="https://github.com/AlejoMattalia" target="_blank" rel="noreferrer">
              <p style={darkMode ? {color:"#fff"} : {color: "#000"}}>GitHub</p>
            </a>
          </motion.div>
        </div>

        <p style={darkMode ? {color:"#fff"} : {color: "#000"}}>
          . . .<span> . .</span>
        </p>
      </section>
    </div>
  );
}
