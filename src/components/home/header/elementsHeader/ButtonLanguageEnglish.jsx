import { useContext } from "react";
import { LanguageContext } from "../../../../context/LanguageContext";
import "./_StyleButton.scss";
import { DarkModeContext } from "../../../../context/DarkModeContext";

export function ButtonLanguageEnglish() {
  const { languageEnglish, setLanguageEnglish } = useContext(LanguageContext);
  const { darkMode } = useContext(DarkModeContext);

  const handleButtonLaguage = () => {
    setLanguageEnglish(!languageEnglish);
  };

  return (
    <div>
      {languageEnglish ? (
        <div onClick={handleButtonLaguage} className="div_language">
          <img
            src="https://res.cloudinary.com/dp0zorgdp/image/upload/v1691089060/porfolio/espana_mmaxjo.png"
            alt="España"
            className="img-language"
          />
          <p
            className="p_language"
            style={darkMode ? { color: "#fff" } : { color: "#000" }}
          >
            ES
          </p>
        </div>
      ) : (
        <div onClick={handleButtonLaguage} className="div_language">
          <img
            src="https://res.cloudinary.com/dp0zorgdp/image/upload/v1691088941/porfolio/estados-unidos_b8n0xw.png"
            alt="EEUU"
            className="img-language"
          />
          <p
            className="p_language"
            style={darkMode ? { color: "#fff" } : { color: "#000" }}
          >
            EN
          </p>
        </div>
      )}
    </div>
  );
}
