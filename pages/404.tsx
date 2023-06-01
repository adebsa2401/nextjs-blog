import React from "react";
import Layout from "@/pages/post/[slug]-layout";
import type {NextPageWithLayout} from "@/types/app-props";
import styles from "@/styles/404.module.scss";

const Error404: NextPageWithLayout = () => {
  return (
    <>
      <div className={styles.content}>
        <h1 className={styles.error}>404 - Page Not Found</h1>
      </div>
    </>
  );
}

Error404.getLayout = (page: React.ReactElement) => (
  <Layout>
    {page}
  </Layout>
);

export default Error404;
