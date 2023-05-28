import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__left}>
          <h4>Statically Generated with Next.js.</h4>
        </div>
        <div className={styles.footer__right}>
          <a className={styles['footer__documentation-link']} href="https://nextjs.org/docs/basic-features/pages">Read Documentation</a>
          <a className={styles['footer__github-link']} href="https://github.com/vercel/next.js/tree/canary/examples/blog-starter">View on GitHub</a>
        </div>
      </div>
    </footer>
  )
}