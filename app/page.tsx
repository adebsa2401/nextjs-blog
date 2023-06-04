import Logo from "@/components/logo";
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
      <section className="flex flex-col md:flex-row items-center justify-between mt-16 mb-16">
        <Logo home/>
        <p className="mt-5 text-lg text-center md:pl-8">
          A statically generated blog example using <a className="hover:text-[--accent-color]"
                                                       href="https://nextjs.org/">Next.js</a> and Markdown.
        </p>
      </section>
      <HeroPost {...heroPost} />
      <section className="mt-20 md:mt-28 mb-32">
        <h2 className="text-[2.5rem]/[1.2] md:text-7xl/[1.2] tracking-tighter font-bold mb-8">More Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
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
