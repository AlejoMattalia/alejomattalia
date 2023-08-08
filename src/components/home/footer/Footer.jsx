import "./_Footer.scss";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";

export function Footer() {
  return (
    <div className="div-handle">
      <section className="container-footer">
        <img
          src="https://res.cloudinary.com/dp0zorgdp/image/upload/v1691012915/porfolio/portfolioIconNegro_dqndjg.png"
          alt=""
        />

        <div className="container-info-footer">
          <div className="container-icon-footer">
            <a href="">
              <AiFillInstagram className="icon" />
            </a>
            <a href="">
              <p>Instagram</p>
            </a>
          </div>

          <div className="container-icon-footer">
            <a href="">
              <BsLinkedin className="icon" />
            </a>
            <a href="">
              <p>Linkedin</p>
            </a>
          </div>

          <div className="container-icon-footer">
            <a href="">
              <IoLogoWhatsapp className="icon" />
            </a>
            <a href="">
              <p>Whatsapp</p>
            </a>
          </div>

          <div className="container-icon-footer">
            <a href="">
              <MdEmail className="icon" />
            </a>
            <a href="">
              <p>Gmail</p>
            </a>
          </div>

          <div className="container-icon-footer">
            <a href="">
              <BsGithub className="icon" />
            </a>
            <a href="">
              <p>GitHub</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
