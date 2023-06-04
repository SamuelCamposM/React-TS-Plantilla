import { useFormik } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";

export const FormikYupPage = () => {
  const { handleSubmit, errors, touched, getFieldProps } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Debe tener 15 caracteres o menos")
        .required("Requerido"),
      lastName: Yup.string()
        .max(10, "Debe tener 15 caracteres o menos")
        .required("Requerido"),
      email: Yup.string()
        .email("Ingrese un formato valido")
        .required("Requerido"),
    }),
  });
  return (
    <div>
      <h1>Formik Yup Tutorial</h1>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input type="text" {...getFieldProps("firstName")} />
        {errors.firstName && touched.firstName && (
          <span>{errors.firstName}</span>
        )}
        <label htmlFor="lastName">Last Name</label>

        <input type="text" {...getFieldProps("lastName")} />
        {errors.lastName && touched.lastName && <span>{errors.lastName}</span>}
        <label htmlFor="email">Email Adress</label>

        <input type="text" {...getFieldProps("email")} />
        {errors.email && touched.email && <span>{errors.email}</span>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
