import { Button, TextField } from "@mui/material";
import "./Contact.scss";
import { motion } from "framer-motion";
import { DarkModeContext } from "../../../context/DarkModeContext";
import { useContext } from "react";
import { styled } from "@mui/material/styles";
import { LanguageContext } from "../../../context/LanguageContext";

const CssTextField = styled(TextField)((props) => ({
  "& label.Mui-focused": {
    color: props.darkMode ? "#fff" : "#000", // Cambiar color basado en darkMode prop
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: props.darkMode ? "#fff" : "#000", // Cambiar color basado en darkMode prop
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: props.darkMode ? "#fff" : "#000", // Cambiar color basado en darkMode prop
    },
    "&:hover fieldset": {
      borderColor: props.darkMode ? "#9e9e9e" : "#000", // Cambiar color basado en darkMode prop
    },
    "&.Mui-focused fieldset": {
      borderColor: props.darkMode ? "#fff" : "#000", // Cambiar color basado en darkMode prop
    },
  },
}));

export function Contact({ data }) {
  const {
    openForm,
    viewForm,
    handleSubmit,
    handleChange,
    values,
    errors,
    showMessageSuccessfully,
    showMessageError,
  } = data;

  const { darkMode } = useContext(DarkModeContext);
  const { languageEnglish } = useContext(LanguageContext);

  return (
    <section className="container-contact">
      <div className="container-button">
        <motion.div whileTap={{ x: 50, duration: 2 }}>
          <Button
            className="button"
            variant="contained"
            sx={{ width: "150px", color: "#fff" }}
            color={darkMode ? "whiteColor" : "blackColor"}
            style={
              darkMode ? { color: "#000", fontWeight: 600 } : { color: "#fff" }
            }
            onClick={openForm}
          >
            {languageEnglish ? "Contact me" : "Contáctame"}
          </Button>
        </motion.div>

        <motion.div whileTap={{ x: 50, duration: 2 }}>
          <Button
            variant="outlined"
            sx={{ width: "150px" }}
            color="secondary"
            className="button"
          >
            {languageEnglish ? "Download" : "Descargar"} CV
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
            <CssTextField
              darkMode={darkMode}
              label={languageEnglish ? "Name and surname" : "Nombre y apellido"}
              className="input"
              name="name"
              onChange={handleChange}
              value={values.name}
              error={errors.name}
              helperText={errors.name}
              InputLabelProps={{
                style: {
                  color: darkMode ? "#fff" : "#000",
                },
              }}
              inputProps={{
                style: darkMode ? { color: "#fff" } : { color: "#000" },
              }}
            />
            <CssTextField
              darkMode={darkMode}
              label={languageEnglish ? "Phone" : "Teléfono"}
              className="input"
              name="phone"
              onChange={handleChange}
              value={values.phone}
              error={errors.phone}
              helperText={errors.phone}
              InputLabelProps={{
                style: {
                  color: darkMode ? "#fff" : "#000",
                },
              }}
              inputProps={{
                style: darkMode ? { color: "#fff" } : { color: "#000" },
              }}
            />
            <CssTextField
              darkMode={darkMode}
              label={languageEnglish ? "Comment" : "Comentario"}
              multiline
              rows={4}
              className="input"
              name="comment"
              onChange={handleChange}
              value={values.comment}
              error={errors.comment}
              helperText={errors.comment}
              InputLabelProps={{
                style: {
                  color: darkMode ? "#fff" : "#000",
                },
              }}
              inputProps={{
                style: darkMode ? { color: "#fff" } : { color: "#000" },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ color: "#fff" }}
              onClick={openForm}
              className="input"
              color={darkMode ? "whiteColor" : "blackColor"}
              style={
                darkMode
                  ? { color: "#000", fontWeight: 600 }
                  : { color: "#fff" }
              }
            >
              {languageEnglish ? "Send" : "Enviar"}
            </Button>

            {showMessageSuccessfully && (
              <motion.div
                className="container-message"
                initial={{ scale: 0.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2 }}
              >
                <div
                  style={
                    darkMode
                      ? { border: "1px solid #fff" }
                      : { border: "1px solid #000" }
                  }
                >
                  <p style={darkMode ? { color: "#fff" } : { color: "#000" }}>
                    {languageEnglish
                      ? "The email was sent successfully."
                      : "El correo se envió correctamente."}
                  </p>
                </div>
              </motion.div>
            )}

            {showMessageError && (
              <motion.div
                className="container-message"
                initial={{ scale: 0.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2 }}
              >
                <div
                  style={
                    darkMode
                      ? { border: "1px solid #fff" }
                      : { border: "1px solid #000" }
                  }
                >
                  <p style={darkMode ? { color: "#fff" } : { color: "#000" }}>
                    {languageEnglish
                      ? "Error, you couldn't send the email. Please try again later."
                      : "Error, no pudiste enviar el correo. Inténtalo de nuevo más tarde."}
                  </p>
                </div>
              </motion.div>
            )}
          </motion.form>
        )}
      </div>
    </section>
  );
}
