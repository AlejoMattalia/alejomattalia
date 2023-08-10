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
    handleAboutMeButton
  } = data;

  return (
    <main className="container-main">
      <div className="container-main-header">
        <div
          className="icon-p"
          style={clickIsProyect ? { borderTop: "2px solid #000" } : {borderTop: "2px solid transparent"}}
          onClick={handleProyectButton}
        >
          <FiMonitor />
          <p>PROYECTOS</p>
        </div>

        <div
          className="icon-p"
          style={
            clickIsCertifications ? { borderTop: "2px solid #000" } : {borderTop: "2px solid transparent"}
          }
          onClick={handleCertificationsButton}
        >
          <GrCertificate />
          <p>CERTIFICACIONES</p>
        </div>

        <div
          className="icon-p"
          style={
            clickIsAboutMe ? { borderTop: "2px solid #000" } : {borderTop: "2px solid transparent"}
          }
          onClick={handleAboutMeButton}
        >
          <FaRegCommentDots />
          <p>SOBRE MÍ</p>
        </div>
      </div>

      {
        clickIsProyect && <ContainerImage array={proyects} proyect={true} certifications={false}/>
      }
      {
        clickIsCertifications && <ContainerImage array={certifications} proyect={false} certifications={true}/>
      }
          
    </main>
  );
}
