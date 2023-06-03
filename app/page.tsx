import Logo from "@/components/logo";
import styles from "@/app/_styles/page.module.scss";
import PostDataType from "@/types/post-data";
import HeroPost from "@/components/hero-post";
import Post from "@/components/post";
import {usePostsData} from "@/hooks/data";

type Props = {
  postsData: PostDataType[];
}

const Home = async () => {
  const [heroPost, ...morePosts] = await usePostsData();

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

export default Home;
