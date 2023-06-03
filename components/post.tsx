import PostDataType from "@/types/post-data";
import { format } from "date-fns"
import Author from "@/components/author";
import styles from "./styles/post.module.scss";
import Link from "next/link";
import CoverImage from "@/components/cover-image";

export default function Post({title, coverImage, date, excerpt, author, slug}: PostDataType) {
  return (
    <article className={styles.post}>
      <div className={styles.post__cover}>
        <CoverImage href={`/post/${slug}`} src={coverImage} alt={`cover image for ${title}`} width={1300} height={630}/>
      </div>

        <h3 className={styles.post__title}>
          <Link className={styles.post__title__link} href={`/post/${slug}`}>{title}</Link>
        </h3>

      <div className={styles.post__date}>
        <time dateTime={date}>{format(new Date(date), "LLLL d, yyyy")}</time>
      </div>
      <p className={styles.post__excerpt}>{excerpt}</p>
      <Author {...author}/>
    </article>
  );
}