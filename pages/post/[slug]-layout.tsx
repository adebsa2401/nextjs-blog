import React from "react";
import Layout from "@/components/layout";
import styles from "./[slug]-layout.module.scss";
import Logo from "@/components/logo";
export default function PostLayout({children}: { children: React.ReactNode }) {
  return (
    <Layout>
      <div className={styles.logo}>
        <Logo />
      </div>
      {children}
    </Layout>
  );
}