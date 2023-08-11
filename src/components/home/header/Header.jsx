import { useState } from "react";
import "./_Header.scss";
import { ButtonDarkMode } from "./elementsHeader/ButtonDarkMode";
import { ButtonLanguageEnglish } from "./elementsHeader/ButtonLanguageEnglish";
import { CarouselState } from "./elementsHeader/Carousel";
import { ModalImage } from "./elementsHeader/ModalImage";
import { motion } from "framer-motion";

export function Header() {
  const [modalIsOpen, setModalISOpen] = useState(false);

  return (
    <section className="container-header">
      <div className="container-img-info">
        <img
          src="https://res.cloudinary.com/dp0zorgdp/image/upload/v1691034298/porfolio/imagenmia_xmusne.jpg"
          alt="imagen Alejo Mattalia"
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
            <p>Alejo Mattalia</p>

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
          >
            <p>
              <span>10</span> proyectos
            </p>
            <p>Desarrollador FrontEnd</p>
            <p>Programación</p>
          </motion.div>

          <motion.div
            className="container-data"
            initial={{ x: -1500 }}
            animate={{ x: 0 }}
            transition={{ duration: 3 }}
          >
            <p>🅰Alejo Mattalia</p>
            <p>🥧19 Años</p>
            <p>🌆Corral de bustos, Córdoba</p>
            <p>
              ⚽<span>Hobbie</span>: jugar al fútbol
            </p>
            <p>💻Desarrollo web</p>
          </motion.div>
        </div>
      </div>

      <CarouselState />

      <section className="container-front-proyect-responsive">
        <div className="container-front-proyect-responsive-children">
          <div>
            <p>10</p>
            <p>Proyectos</p>
          </div>

          <div>
            <p>Desarrollador</p>
            <p>FrontEnd</p>
          </div>

          <div>
            <p>Programación</p>
          </div>
        </div>
      </section>
    </section>
  );
}
