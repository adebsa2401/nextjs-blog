import Image from "next/image";
import {format} from "date-fns";
import styles from "./hero-post.module.scss";
import PostType from "@/types/post";
import Author from "@/components/author";

export default function HeroPost({title, coverImage, date, excerpt, author, slug}: PostType) {
  return (
    <article className={styles.post}>
      <div>
        <Image className={styles.post__cover} src={coverImage} alt={`cover image for ${title}`} width={1300}
               height={630}/>
      </div>
      <div className={styles.post__footer}>
        <div className={styles.post__footer__left}>
          <h3 className={styles.post__title}>{title}</h3>
          <div className={styles.post__date}>
            <time dateTime={date}>{format(new Date(date), 'LLLL d, yyyy')}</time>
          </div>
        </div>
        <div className={styles.post__footer__right}>
          <p className={styles.post__excerpt}>{excerpt}</p>
          <Author {...author}/>
        </div>
      </div>
    </article>
  );
}
