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
        <h1>The ultimate React component library_</h1>
        <p>
          Introducing BuildKit, the fastest way to build and deploy websites
          with React.
        </p>
        <ContactForm />
      </div>
      <div className={styles.footer}>
        <p>Copyright © 2020 Ángel Vāzquez.</p>
      </div>
    </div>
  );
}
