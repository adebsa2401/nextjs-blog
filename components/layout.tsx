import Header from "@/components/header";
import Footer from "@/components/footer";
import React from "react";
import styles from "./layout.module.scss";

export default function Layout({children}: { children: React.ReactNode }) {
  return (
    <>
      <Header/>
      <main className={styles.main}>{children}</main>
      <Footer/>
    </>
  );
}