import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {remark} from "remark";
import html from "remark-html";
import PostType from "@/types/post";
import Layout from "@/components/layout";
import Logo from "@/components/logo";

type Props = {
  post: PostType
}

export default function BlogPost({ post }: Props) {
  return (
    <Layout>
      <Logo />
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
        slug: params.slug,
        content: contentHtml,
        ...data,
      }
    }
  }
}