import { useState } from "react";
import { Contact } from "./Contact";
import { useFormik } from "formik";
import * as Yup from "yup";

export function ContactContainer() {

  const [viewForm, setViewForm] = useState(false);

  const openForm = ()=>{
    setViewForm(true);
  }

  let initialValues = {
    name: "",
    phone: "",
    comment: ""
  }

  const onSubmit = (data)=>{
    console.log(data)
  }

  const {handleSubmit, handleChange, values, errors} = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required("Debes ingresar un nombre"),
      phone: Yup.string().required("Debes ingresar un teléfono"),
      comment: Yup.string().required("Debes ingresar un comentario")
    }),
    onSubmit
  })

  const data = {
    openForm,
    viewForm,
    handleSubmit,
    handleChange,
    values,
    errors
  }
  return (
    <Contact data={data}/>
  )
}
