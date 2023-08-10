import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../_Header.scss";
import { technologies } from "../../../../apis/technologies.js";
import { Link } from "react-router-dom";
import { ProgressBarContext } from "../../../../context/ProgressBarContext";
import { useContext } from "react";
import { motion } from "framer-motion";


export function CarouselState() {

  const {setFirstHistory} = useContext(ProgressBarContext);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1150 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1150, min: 385 },
      items: 6,
    },
    mobile: {
      breakpoint: { max: 385, min: 0 },
      items: 5,
    },
  };

  return (
    <div className="container-carrousel">
      <Carousel responsive={responsive}>
        {technologies.length > 0 &&
          technologies.map((el) => {
            return (
              <Link
                to={`/history/${el.id}`}
                key={el.id}
                className="link"
                style={{ color: "#000" }}
              >
                <div className="container-state" onClick={()=> setFirstHistory(true)}>
                  <motion.div className="container-img" whileHover={{ scale: 1.01}}>
                    <img src={el.img} alt="" />
                  </motion.div>
                  <p>{el.name}</p>
                </div>
              </Link>
            );
          })}
      </Carousel>
    </div>
  );
}
