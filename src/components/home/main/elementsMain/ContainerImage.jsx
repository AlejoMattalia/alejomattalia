import { Box, Grid } from "@mui/material";
import "../_Main.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function ContainerImage({ array, proyect, certifications }) {
  console.log(proyect, certifications);
  return (
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <Grid container spacing={0.5} className="conatinerImage-grid">
        {array !== undefined &&
          array.map((el) => {
            if (proyect === true && certifications === false) {
              return (
                <Grid item xs={4} className="grid" key={el.id}>
                  <Link
                    to={`/proyect/${el.id}`}
                    style={{ width: "100%" }}
                  >
                    <picture>
                      <motion.img
                        src={el.img}
                        alt=""
                        whileHover={{ borderRadius: "50%" }}
                      />
                    </picture>
                  </Link>
                </Grid>
              );
            } else if (certifications === true && proyect === false) {
              return (
                <Grid item xs={4} key={el.id} className="grid">
                  <a href={el.link} target="_blank" rel="noreferrer">
                    <motion.img
                      src={el.img}
                      alt=""
                      whileHover={{ borderRadius: "50%" }}
                    />
                  </a>
                </Grid>
              );
            }
          })}
      </Grid>
    </Box>
  );
}
