import React from "react";
import { useForm, ValidationError } from "@statickit/react";
import styles from "./form.module.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("contactForm");

  if (state.succeeded) {
    return <p className={styles.success}>Thanks for joining!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        id="name"
        type="name"
        name="name"
        className={styles.input}
        required
        placeholder="Enter your name"
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />
      <input
        id="email"
        type="email"
        name="email"
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
