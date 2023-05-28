import styles from './header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.header__text}>The source code for this blog is <a className={styles.header__link} href="https://www.github.com/adebsa2401">available on GitHub</a>.</p>
    </header>
  )
}