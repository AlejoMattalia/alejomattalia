import { useState } from "react";
import { Contact } from "./Contact";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

export function ContactContainer() {
  const [viewForm, setViewForm] = useState(false);

  const openForm = () => {
    setViewForm(true);
  };

  let initialValues = {
    name: "",
    phone: "",
    comment: "",
  };

  const onSubmit = (data) => {
    const templateParams = {
      name: data.name,
      phone: data.phone,
      comment: data.comment,
    };

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => functionShowMessageSuccessfully())
      .catch(() => functionShowMessageError());
  };

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required("Ingresa un nombre"),
      phone: Yup.number().required("Ingresa un teléfono"),
      comment: Yup.string().required("Ingresa un comentario"),
    }),
    onSubmit,
  });


  //Mensaje de que el correo se envio correctamente
  const [showMessageSuccessfully, setShowMessageSuccessfully] = useState(false);

  const functionShowMessageSuccessfully = ()=>{
    setShowMessageSuccessfully(true)
    setTimeout(()=>setShowMessageSuccessfully(false), 6500)
  }

  //Mensaje cuando el envio del correo salio mal
  const [showMessageError, setShowMessageError] = useState(false);
  const functionShowMessageError = ()=>{
    setShowMessageError(true)
    setTimeout(()=>setShowMessageError(false), 6500)
  }

  const data = {
    openForm,
    viewForm,
    handleSubmit,
    handleChange,
    values,
    errors,
    showMessageSuccessfully,
    showMessageError
  };
  return <Contact data={data} />;
}
