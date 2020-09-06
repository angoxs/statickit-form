import React from "react";
import { useForm, ValidationError } from "@statickit/react";
import styles from "./form.module.css";

function ContactForm(value) {
  const [state, handleSubmit] = useForm("contactForm");

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  function validateUsername(value) {
    let error;
    if (value === "jdllf") {
      error = "Nice try!";
    }
    return error;
  }
  if (state.succeeded) {
    return <p className={styles.success}>Thanks for joining!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        id="name"
        type="name"
        name="name"
        validate={validateUsername}
        className={styles.input}
        required
        placeholder="Enter your name"
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <input
        id="email"
        type="email"
        name="email"
        validate={validateEmail}
        className={styles.input}
        required
        placeholder="Enter your email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <button
        type="submit"
        disabled={state.submitting}
        className={styles.button}
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
