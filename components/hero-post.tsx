import {format} from "date-fns";
import styles from "./hero-post.module.scss";
import PostDataType from "@/types/post-data";
import Author from "@/components/author";
import Link from "next/link";
import CoverImage from "@/components/cover-image";

export default function HeroPost({title, coverImage, date, excerpt, author, slug}: PostDataType) {
  return (
    <article className={styles.post}>
      <div className={styles.post__cover}>
        <CoverImage href={`/post/${slug}`} src={coverImage} alt={`cover image for ${title}`} width={1300} height={630}/>
      </div>
      <div className={styles.post__footer}>
        <div className={styles.post__footer__left}>
          <Link href={`/post/${slug}`}>
            <h3 className={styles.post__title}>{title}</h3>
          </Link>
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
