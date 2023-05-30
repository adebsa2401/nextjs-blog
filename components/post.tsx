import PostDataType from "@/types/post-data";
import { format } from "date-fns"
import Author from "@/components/author";
import styles from "./post.module.scss";
import Link from "next/link";
import CoverImage from "@/components/cover-image";

export default function Post({title, coverImage, date, excerpt, author, slug}: PostDataType) {
  return (
    <article className={styles.post}>
      <div className={styles.post__cover}>
        <CoverImage href={`/post/${slug}`} src={coverImage} alt={`cover image for ${title}`} width={1300} height={630}/>
      </div>
      <Link href={`/post/${slug}`}>
        <h3 className={styles.post__title}>{title}</h3>
      </Link>
      <div className={styles.post__date}>
        <time dateTime={date}>{format(new Date(date), "LLLL d, yyyy")}</time>
      </div>
      <p className={styles.post__excerpt}>{excerpt}</p>
      <Author {...author}/>
    </article>
  );
}