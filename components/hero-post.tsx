import Image from "next/image";
import styles from "./hero-post.module.scss";
import PostType from "@/types/post";

export default function HeroPost({title, coverImage, date, excerpt, author, slug}: PostType) {
  return (
    <article className={styles.post}>
      <div>
        <Image className={styles.post__cover} src={coverImage} alt="dynamic routing cover" width={1300} height={630}/>
      </div>
      <div className={styles.post__footer}>
        <div className={styles.post__footer__left}>
          <h3 className={styles.post__title}>{title}</h3>
          <div className={styles.post__date}>{date}</div>
        </div>
        <div className={styles.post__footer__right}>
          <p className={styles.post__excerpt}>{excerpt}</p>
          <div className={styles.post__author}>
            <div>
              <Image className={styles.post__author__picture} src={author.picture} alt="dynamic routing cover" width={100} height={100}/>
            </div>
            <div className={styles.post__author__name}>{author.name}</div>
          </div>
        </div>
      </div>
    </article>
  );
}
