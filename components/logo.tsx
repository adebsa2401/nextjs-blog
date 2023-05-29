import styles from './logo.module.scss';
import clsx from "clsx";

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
    <h2 className={styles.logo}>Blog.</h2>
  );
}

Logo.defaultProps = {
  home: false
}
