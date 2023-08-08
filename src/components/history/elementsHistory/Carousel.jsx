import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ProgressBar } from "./ProgressBar";
import "../_History.scss";

export function CarouselHistory({ technology }) {
  const arrayImage = technology.image;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1150 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1150, min: 385 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 385, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="contianer-history">
      <div className="container-card-history">
        <div className="container-progressBar">
          <ProgressBar />
          <ProgressBar />
          <ProgressBar />
        </div>
        <div className="container-img-title">
          <img src={technology.img} alt="" />
          <p>{technology.name}</p>
        </div>

        <div className="container-carrousel">
          {arrayImage !== undefined && (
            <Carousel
              responsive={responsive}
              autoPlay={true}
              autoPlaySpeed={5200}
              style={{ pointerEvents: "none" }} // Usar "pointerEvents" en minúsculas
            >
              <div>
                <img src={arrayImage[0]} alt="" />
              </div>
              <div>
                <img src={arrayImage[1]} alt="" />
              </div>
              <div>
                <img src={arrayImage[2]} alt="" />
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
}
