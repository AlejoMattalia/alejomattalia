import { Link } from "react-router-dom";
import "./_History.scss";
import { BsXLg } from "react-icons/bs";
import { CarouselHistory } from "./elementsHistory/Carousel.jsx"

export function History({ technology, handleWithStart }) {

  return (
    <section className="container-history">
      <div className="img-close">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dp0zorgdp/image/upload/v1691012946/porfolio/portfolioIconblanco_gsfakn.png"
            alt="icon"
            onClick={handleWithStart}
          />
        </Link>

        <Link to="/" style={{ color: "#fff" }}>
          <BsXLg className="icon" onClick={handleWithStart}/>
        </Link>
      </div>

      <CarouselHistory technology={technology}/>
    </section>
  );
}
