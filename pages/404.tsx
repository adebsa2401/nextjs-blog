import Layout from "@/pages/post/[slug]-layout";
import styles from "@/styles/404.module.scss";

export default function Error404() {
  return (
    <Layout>
      <div className={styles.content}>
        <h1 className={styles.error}>404 - Page Not Found</h1>
      </div>
    </Layout>
  );
}