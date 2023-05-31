import styles from './logo.module.scss';
import clsx from "clsx";
import Link from "next/link";

type Props = {
  home?: boolean
};

export default function Logo({ home }: Props) {
  if (home) {
    return (
      <h1 className={clsx(styles.logo, styles.logo_home)}>Blog.</h1>
    );
  }

  return (
    <h2 className={styles.logo}>
      <Link className={styles.logo__link} href="/">Blog</Link>.
    </h2>
  );
}

Logo.defaultProps = {
  home: false
}
