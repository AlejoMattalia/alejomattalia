import "./_Main.scss";
import { FiMonitor } from "react-icons/fi";
import { GrCertificate } from "react-icons/gr";
import { FaRegCommentDots } from "react-icons/fa";
import { ContainerImage } from "./elementsMain/containerImage";
import { proyects } from "../../../apis/proyects";
import { certifications } from "../../../apis/certifications";

export function Main({ data }) {
  const {
    clickIsProyect,
    handleProyectButton,
    clickIsCertifications,
    handleCertificationsButton,
    clickIsAboutMe,
    handleAboutMeButton,
  } = data;

  return (
    <main className="container-main">
      <div className="container-main-header">
        <div
          className="icon-p"
          style={
            clickIsProyect
              ? { borderTop: "2px solid #000" }
              : { borderTop: "2px solid transparent" }
          }
          onClick={handleProyectButton}
        >
          <FiMonitor />
          <p>PROYECTOS</p>
        </div>

        <div
          className="icon-p"
          style={
            clickIsCertifications
              ? { borderTop: "2px solid #000" }
              : { borderTop: "2px solid transparent" }
          }
          onClick={handleCertificationsButton}
        >
          <GrCertificate />
          <p>CERTIFICACIONES</p>
        </div>

        <div
          className="icon-p"
          style={
            clickIsAboutMe
              ? { borderTop: "2px solid #000" }
              : { borderTop: "2px solid transparent" }
          }
          onClick={handleAboutMeButton}
        >
          <FaRegCommentDots />
          <p>SOBRE MÍ</p>
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

      {clickIsAboutMe && (
        <div className="container-aboutMe">
          <p>
            Soy una persona apasionada y motivada por aprender cosas nuevas. Mi
            creatividad y determinación me guían en la dirección hacia mis
            objetivos y metas. Siempre expreso mi opinión en los temas en los
            que me involucro, aportando un enfoque crítico a la situación
            presente. 
            <br/>
            <br/>
            Constantemente busco nuevos desafíos, disfruto adquiriendo
            conocimientos y manteniéndome al día con las últimas innovaciones en
            el ámbito del desarrollo web. Mi interés por este campo se ha
            convertido en una pasión que me impulsa a explorar nuevas
            tecnologías y técnicas para crear proyectos llamativos. 
            <br/>
            <br/>
            Además, mi habilidad para trabajar en
            equipos me permite combinar mis habilidades
            técnicas con las de mi equipo, logrando así resultados sólidos
            y de alto impacto en proyectos web.
          </p>
        </div>
      )}
    </main>
  );
}
