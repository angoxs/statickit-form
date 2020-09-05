import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContactForm from "../components/contactform";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.group}>
        <h1>Una pequeña pero bien hecha forma de contacto.</h1>
        <ContactForm />

        <p>
          By clicking "Submit" you agree to the <span>Terms of Use </span>
          and <span> Privacy Policy</span>
        </p>
      </div>
      <div className={styles.footer}>
        <p>Copyright © 2020 Ángel Vāzquez.</p>
      </div>
    </div>
  );
}
