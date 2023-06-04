import { Formik, Form } from "formik";
import "../styles/styles.css";
import * as Yup from "yup";
import { MyTextInput, MySelect, MyCheckbox } from "../components";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Components</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          terms: false,
          jobType: "",
        }}
        onSubmit={(values) => {}}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(10, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .email("Ingrese un formato valido")
            .required("Requerido"),
          terms: Yup.boolean().oneOf([true], "Debe de aceptar las condiciones"),
          jobType: Yup.string()
            .notOneOf(["it-jr"], "Esta opcion no es permitida")
            .required("Requerido"),
        })}
      >
        {(formik) => {
          return (
            <Form noValidate>
              <MyTextInput
                label="First Name"
                name="firstName"
                placeholder="Samuel"
              />

              <MyTextInput
                label="Last Name"
                name="lastName"
                placeholder="Campos"
              />

              <MyTextInput
                label="Email Adress"
                name="email"
                placeholder="test@email.com"
                type="email"
              />

              <MySelect label={"Job Type"} name={"jobType"}>
                <option value="">Pick Something</option>
                <option value="developer">Developer</option>
                <option value="desinger">Desinger</option>
                <option value="it-senior">IT SENIOR</option>
                <option value="it-jr">IT JUNIOR</option>
              </MySelect>
              <MyCheckbox label={"Terms And Condition"} name={"terms"} />

              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
