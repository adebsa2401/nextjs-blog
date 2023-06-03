import fs from "fs";
import path from "path";
import {format} from "date-fns";
import Author from "@/components/author";
import CoverImage from "@/components/cover-image";
import styles from "./_styles/page.module.scss";
import React from "react";
import {usePostContent} from "@/hooks/data";

type Props = {
  params: {
    slug: string
  }
}

const BlogPost = async ({ params }: Props) => {
  const { data, content } = await usePostContent(params.slug);

  return (
    <>
      <article className={styles.post}>
        <h1 className={styles.post__title}>{data.title}</h1>
        <div className={styles.post__author}>
          <Author {...data.author}/>
        </div>
        <div className={styles.post__cover}>
          <CoverImage src={data.coverImage} alt={`cover image for ${data}`} width={1300} height={630}/>
        </div>
        <div className={styles['content-container']}>
          <div className={styles.post__date}>
            <time dateTime={data.date}>{format(new Date(data.date), 'LLLL d, yyyy')}</time>
          </div>
          <div className={styles.post__content} dangerouslySetInnerHTML={{ __html: content }}/>
        </div>
      </article>
    </>
  )
}

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "data/_posts");
  const files = await fs.promises.readdir(postsDir);

  return files.map((file: string) => ({
    params: { slug: file.replace(/\.md$/, "") },
  }));
}

export default BlogPost;
