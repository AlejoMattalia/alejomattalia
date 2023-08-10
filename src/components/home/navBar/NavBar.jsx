import { BsLinkedin, BsGithub, BsFillBriefcaseFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import "./_NavBar.scss";
import { motion } from "framer-motion";

export function NavBar() {
  //Seccion donde se muestra las redes sociales
  return (
    <div className="div-occupy-space">
      <section className="container-navBar">
        <motion.img
          animate={{ scale: 1.1 }}
          transition={{ duration: 2, repeat: 3 }}
          src="https://res.cloudinary.com/dp0zorgdp/image/upload/v1691012915/porfolio/portfolioIconNegro_dqndjg.png"
          alt="icon"
        />

        <motion.div
          animate={{ scale: 1.3 }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <BsFillBriefcaseFill className="icon-briefcase" />
        </motion.div>

        <div className="container-info">
          <motion.div
            className="container-icon"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{
              scale: 1,
              rotate: -90,
              borderRadius: "100%",
            }}
          >
            <a href="">
              <AiFillInstagram className="icon" />
            </a>
            <a href="">
              <p>Instagram</p>
            </a>
          </motion.div>

          <motion.div
            className="container-icon"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{
              scale: 1,
              rotate: -90,
              borderRadius: "100%",
            }}
          >
            <a href="">
              <BsLinkedin className="icon" />
            </a>
            <a href="">
              <p>Linkedin</p>
            </a>
          </motion.div>

          <motion.div
            className="container-icon"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{
              scale: 1,
              rotate: -90,
              borderRadius: "100%",
            }}
          >
            <a href="">
              <IoLogoWhatsapp className="icon" />
            </a>
            <a href="">
              <p>Whatsapp</p>
            </a>
          </motion.div>

          <motion.div
            className="container-icon"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{
              scale: 1,
              rotate: -90,
              borderRadius: "100%",
            }}
          >
            <a href="">
              <MdEmail className="icon" />
            </a>
            <a href="">
              <p>Gmail</p>
            </a>
          </motion.div>

          <motion.div
            className="container-icon"
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{
              scale: 1,
              rotate: -90,
              borderRadius: "100%",
            }}
          >
            <a href="">
              <BsGithub className="icon" />
            </a>
            <a href="">
              <p>GitHub</p>
            </a>
          </motion.div>
        </div>

        <p>
          . . .<span> . .</span>
        </p>
      </section>
    </div>
  );
}
