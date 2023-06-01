import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Logo from "@/components/logo";
import styles from "./index.module.scss";
import PostDataType from "@/types/post-data";
import HeroPost from "@/components/hero-post";
import Post from "@/components/post";

type Props = {
  postsData: PostDataType[];
}

const Home = ({postsData}: Props) => {
  const [heroPost, ...morePosts] = postsData;

  return (
    <>
      <section className={styles.headline}>
        <Logo home/>
        <p className={styles.headline__text}>
          A statically generated blog example using <a className={styles.headline__link}
                                                       href="https://nextjs.org/">Next.js</a> and Markdown.
        </p>
      </section>
      <HeroPost {...heroPost} />
      <section className={styles['more-stories']}>
        <h2 className={styles['more-stories__title']}>More Stories</h2>
        <div className={styles['more-stories__grid']}>
          {morePosts.map((post) => (
            <Post key={post.slug} {...post} />
          ))}
        </div>
      </section>
    </>
  )
    ;
}

export async function getStaticProps() {
  const postsDir = "./data/_posts";
  const files = await fs.promises.readdir(postsDir);
  const postsData = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const content = fs.readFileSync(path.join(postsDir, file), "utf8");
    const {data} = matter(content);

    return {
      slug,
      ...data,
    };
  });

  return {
    props: {
      postsData
    }
  };
}

export default Home;
