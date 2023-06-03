import React from "react";
import styles from "./_styles/layout.module.scss";
import Logo from "@/components/logo";
export default function PostLayout({children}: { children: React.ReactNode }) {
  return (
    <>
      <div className={styles.logo}>
        <Logo />
      </div>
      {children}
    </>
  );
}