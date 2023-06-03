import Header from "@/components/header";
import Footer from "@/components/footer";
import React from "react";
import '@/styles/global.scss';
import styles from "@/app/_styles/layout.module.scss";

export default function Layout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main className={styles.main}>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}