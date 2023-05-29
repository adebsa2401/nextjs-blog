import Image from "next/image";
import Layout from "@/components/layout";
import Logo from "@/components/logo";
import styles from "./index.module.scss";

export default function Home() {
  return (
    <Layout>
      <section className={styles.headline}>
        <Logo home/>
        <p className={styles.headline__text}>
          A statically generated blog example using <a className={styles.headline__link} href="https://nextjs.org/">Next.js</a> and Markdown.
        </p>
      </section>
      {/*<div>*/}
      {/*  <Image src="" alt="dynamic routing cover"/>*/}
      {/*</div>*/}
    </Layout>
  );
}