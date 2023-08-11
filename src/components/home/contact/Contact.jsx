import { Button, TextField } from "@mui/material";
import "./Contact.scss";
import { motion } from "framer-motion";

export function Contact({ data }) {
  const { openForm, viewForm, handleSubmit, handleChange, values, errors } = data;

  return (
    <section className="container-contact">
      <div className="container-button">
        <motion.div whileTap={{ x: 50, duration: 2 }}>
          <Button
            variant="contained"
            sx={{ width: "150px", color: "#fff" }}
            color="blackColor"
            onClick={openForm}
          >
            Contáctame
          </Button>
        </motion.div>

        <motion.div whileTap={{ x: 50, duration: 2 }}>
          <Button variant="outlined" sx={{ width: "150px" }} color="secondary">
            Descargar CV
          </Button>
        </motion.div>
      </div>

      <div>
        {viewForm && (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ scale: 0.3 }}
            animate={{ scale: 1 }}
            transition={{ duration: 3 }}
          >
            <TextField
              id="outlined-basic"
              label="Nombre y apellido"
              variant="outlined"
              className="input"
              name="name"
              onChange={handleChange}
              value={values.name}
              error={errors.name}
              helperText={errors.name}
            />
            <TextField
              id="outlined-basic"
              label="teléfono"
              variant="outlined"
              className="input"
              name="phone"
              onChange={handleChange}
              value={values.phone}
              error={errors.phone}
              helperText={errors.phone}
            />
            <TextField
              id="outlined-multiline-static"
              label="Comentario"
              multiline
              rows={4}
              className="input"
              name="comment"
              onChange={handleChange}
              value={values.comment}
              error={errors.comment}
              helperText={errors.comment}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ color: "#fff" }}
              color="blackColor"
              onClick={openForm}
              className="input"
            >
              Enviar
            </Button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
