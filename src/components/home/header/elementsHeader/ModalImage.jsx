import Modal from "react-modal";
import { motion } from "framer-motion";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { WidthPageContext } from "../../../../context/WidthPageContext";

export function ModalImage({ modalIsOpen, setModalISOpen }) {
  const [mediaImg, setMediaImg] = useState("");
  const [mediaModal, setMediaModal] = useState("");
  const { widthPage } = useContext(WidthPageContext);

  useEffect(() => {
    if (widthPage >= 1075) {
      setMediaImg("550px");
      setMediaModal("500px");
    } else if (widthPage >= 750 && widthPage < 1075) {
      setMediaImg("400px");
      setMediaModal("350px");
    }
    else if (widthPage >= 500 && widthPage < 750) {
      setMediaImg("350px");
      setMediaModal("300px");
    }
    else if(widthPage >= 300 && widthPage < 500){
      setMediaImg("300px");
      setMediaModal("250px");
    }
  }, [widthPage]);

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalISOpen(false)}
        shouldCloseOnOverlayClick={true} // Close the modal when clicking the overlay
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.90)",
            zIndex: 1000,
          },
          content: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "none",
            position: "absolute",
            right: 0,
            left: 0,
            bottom: 0,
            top: 0,
            margin: "auto",
            border: "none",
            width: mediaModal,
            height: mediaModal,
            borderRadius: "50%",
            overflow: "hidden",
          },
        }}
      >
        <motion.div
          initial={{ scale: 1, rotate: -80 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 2 }}
        >
          <img
            src="https://res.cloudinary.com/dp0zorgdp/image/upload/v1691034298/porfolio/imagenmia_xmusne.jpg"
            alt="Alejo Mattalia"
            style={{ width: mediaImg, height: mediaImg }}
          />
        </motion.div>
      </Modal>
    </>
  );
}
