import { Formik, Form } from "formik";
import formJson from "../data/custom-form.json";
import { MySelect, MyTextInput } from "../components";
import * as Yup from "yup";
const initialValues: { [x: string]: any } = {};
const requiredFields: { [x: string]: any } = {};
for (const input of formJson) {
  initialValues[input.name] = input.value;
  if (!input.validations) continue;
  let schema = Yup.string();
  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("Este campo es requerido");
    }
    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value || 2,
        `Mimimo de ${(rule as any).value || 2} caracteres`
      );
    }
    if (rule.type === "email") {
      schema = schema.email("Ingrese un formato valido");
    }
  }
  requiredFields[input.name] = schema;
}
const validationSchema = Yup.object({ ...requiredFields });

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form noValidate>
              {formJson.map(
                ({ type, name, placeholder, label, options }, index) => {
                  if (
                    type === "input" ||
                    type === "password" ||
                    type === "email"
                  ) {
                    return (
                      <MyTextInput
                        key={name}
                        type={type as any}
                        name={name}
                        label={label}
                        placeholder={placeholder}
                      />
                    );
                  }
                  if (type === "select") {
                    return (
                      <MySelect key={name} name={name} label={label}>
                        <option value="">Select an option</option>
                        {options?.map((opt) => (
                          <option key={opt.id} value={opt.id}>
                            {opt.label}
                          </option>
                        ))}
                      </MySelect>
                    );
                  }
                  return <span>Type: {type} no es soportado</span>;
                }
              )}
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
