import "../styles/styles.css";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";

export const RegisterFormikPage = () => {
  return (
    <div>
      {" "}
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password1: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .min(2, "Minimo 2 caracteres")
            .required("Requerido"),
          email: Yup.string()
            .email("Ingrese un formato valido")
            .required("Requerido"),
          password1: Yup.string()
            .min(6, "Min 6 caracteres")
            .required("Requerido"),
          password2: Yup.string()
            .required("Requerido")
            .oneOf([Yup.ref("password1")], "Las contraseñas deben coincidir"),
        })}
      >
        {({ handleReset }) => {
          return (
            <Form>
              <MyTextInput label="Name" name="name" placeholder="Name" />
              <MyTextInput
                label="Email"
                name="email"
                placeholder="Email"
                type="email"
              />
              <MyTextInput
                label="Password"
                name="password1"
                placeholder="Password"
                type="password"
              />
              <MyTextInput
                label="Confirm Password"
                name="password2"
                placeholder="Confirm Password"
                type="password"
              />
              <button type="submit">Create</button>
              <button type="button" onClick={() => handleReset()}>
                Reset Form
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
