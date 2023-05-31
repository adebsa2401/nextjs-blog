import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {remark} from "remark";
import html from "remark-html";
import {format} from "date-fns";
import PostType from "@/types/post";
import Layout from "@/components/layout";
import Logo from "@/components/logo";
import Author from "@/components/author";
import CoverImage from "@/components/cover-image";
import styles from "./[slug].module.scss";

type Props = {
  post: PostType
}

export default function BlogPost({ post }: Props) {
  const { data, content } = post;

  return (
    <Layout>
      <div className={styles.logo}>
        <Logo />
      </div>
      <article className={styles.post}>
        <h1 className={styles.post__title}>{data.title}</h1>
        <div className={styles.post__author}>
          <Author {...data.author}/>
        </div>
        <div className={styles.post__cover}>
          <CoverImage src={data.coverImage} alt={`cover image for ${post.data}`} width={1300} height={630}/>
        </div>
        <div className={styles['content-container']}>
          <div className={styles.post__date}>
            <time dateTime={data.date}>{format(new Date(data.date), 'LLLL d, yyyy')}</time>
          </div>
          <div className={styles.post__content} dangerouslySetInnerHTML={{ __html: content }}/>
        </div>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const postsDir = "./data/_posts";
  const files = await fs.promises.readdir(postsDir);

  const paths = files.map((file: string) => ({
    params: { slug: file.replace(/\.md$/, "") },
  }));

  return { paths, fallback: false };
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const postsDir = "./data/_posts";
  const content = fs.readFileSync(path.join(postsDir, `${params.slug}.md`), "utf8");
  const { data, content: markdown } = matter(content);

  const processedContent = await remark().use(html).process(markdown);
  const contentHtml = processedContent.toString();

  return {
    props: {
      post: {
        content: contentHtml,
        data: {
          slug: params.slug,
          ...data
        },
      }
    }
  }
}