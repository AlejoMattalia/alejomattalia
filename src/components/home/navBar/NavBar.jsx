import {BsLinkedin, BsGithub, BsFillBriefcaseFill} from 'react-icons/bs';
import {MdEmail} from 'react-icons/md'
import {IoLogoWhatsapp} from 'react-icons/io'
import {AiFillInstagram} from 'react-icons/ai'
import "./_NavBar.scss"

export function NavBar() {
   
  //Seccion donde se muestra las redes sociales  
  return (
    <div className='div-occupy-space'>
    <section className='container-navBar'>
        <img src="https://res.cloudinary.com/dp0zorgdp/image/upload/v1691012915/porfolio/portfolioIconNegro_dqndjg.png" alt="icon" />

        <BsFillBriefcaseFill className='icon-briefcase'/>

        <div className="container-info">
            <div className="container-icon">
                <a href=""><AiFillInstagram className='icon'/></a>
                <a href=""><p>Instagram</p></a>
            </div>

            <div className="container-icon">
                <a href=""><BsLinkedin className='icon'/></a>
                <a href=""><p>Linkedin</p></a>
            </div>

            <div className="container-icon">
                <a href=""><IoLogoWhatsapp className='icon'/></a>
                <a href=""><p>Whatsapp</p></a>
            </div>

            <div className="container-icon">
                <a href=""><MdEmail className='icon'/></a>
                <a href=""><p>Gmail</p></a>
            </div>

            <div className="container-icon">
                <a href=""><BsGithub className='icon'/></a>
                <a href=""><p>GitHub</p></a>
            </div>
        </div>

        <p>. . .<span> . .</span></p>
    </section>
    </div>
  )
}
