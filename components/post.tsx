import PostType from "@/types/post";
import Image from "next/image";
import { format } from "date-fns"
import Author from "@/components/author";
import styles from "./post.module.scss";

export default function Post({title, coverImage, date, excerpt, author, slug}: PostType) {
  return (
    <article className={styles.post}>
      <div>
        <Image className={styles.post__cover} src={coverImage} alt={`cover image for ${title}`} width={1300} height={630}/>
      </div>
      <h3 className={styles.post__title}>{title}</h3>
      <div className={styles.post__date}>
        <time dateTime={date}>{format(new Date(date), "LLLL d, yyyy")}</time>
      </div>
      <p className={styles.post__excerpt}>{excerpt}</p>
      <Author {...author}/>
    </article>
  );
}