import "../styles/styles.css";
import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
export const RegisterPage = () => {
  const {
    // metods
    onChange,
    isValidEmail,
    // data
    formData,
    name,
    email,
    password1,
    password2,
    resetForm,
  } = useForm({
    name: "samuel",
    email: "",
    password1: "",
    password2: "",
  });
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ formData });
  };
  return (
    <div>
      <h1>Register Page</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          name="name"
          onChange={(e) => onChange(e)}
          className={`${name.trim() === "" && "has-error"}`}
        />
        {name.trim() === "" && <span>este campo es necesario</span>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          name="email"
          onChange={(e) => onChange(e)}
          className={`${!isValidEmail(email) && "has-error"}`}
        />
        {!isValidEmail(email) && <span>este campo es necesario</span>}
        <input
          type="password"
          placeholder="Password"
          value={password1}
          name="password1"
          onChange={(e) => onChange(e)}
        />
        {password1.trim() === "" && <span>este campo es necesario</span>}
        {password1.trim().length < 6 && password1.trim().length > 0 && (
          <span>La contraseña debe tener 6 caracteres</span>
        )}
        <input
          type="password"
          placeholder="Repeat Password"
          value={password2}
          name="password2"
          onChange={(e) => onChange(e)}
        />
        {password2.trim() === "" && <span>este campo es necesario</span>}
        {password2.trim() === "" ||
          (password2 !== password1 && (
            <span>Las contraseñas deben coincidir</span>
          ))}
        <button type="submit">Create</button>
        <button type="submit" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
};
