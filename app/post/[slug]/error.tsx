"use client";

import React from "react";
import styles from "./_styles/error.module.scss";
import Link from "next/link";

type Props = {
  error: Error;
  reset: () => void;
};

const Error= ({ error, reset}: Props) => {
  return (
    <>
      <div className={styles.content}>
        <h1 className={styles.error}>404 - Page Not Found</h1>
        <div className={styles['back-container']}>
          <Link className={styles.back} href="/">Back to home</Link>
        </div>
      </div>
    </>
  );
}

export default Error;
