import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {remark} from "remark";
import html from "remark-html";
import PostDataType from "@/types/post-data";
import PostType from "@/types/post";

export async function usePostsData(): Promise<PostDataType[]> {
  const postsDir = path.join(process.cwd(), "data/_posts");
  const files = await fs.promises.readdir(postsDir);

  // @ts-ignore
  return files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const content = fs.readFileSync(path.join(postsDir, file), "utf8");
    const {data} = matter(content);

    return {
      ...data,
      slug,
    };
  });
}

export async function usePostContent(slug: string): Promise<PostType> {
  const postDir = path.join(process.cwd(), "data/_posts", `${slug}.md`);
  const content = fs.readFileSync(postDir, "utf8");
  const { data, content: markdown } = matter(content);

  const processedContent = await remark().use(html).process(markdown);
  const contentHtml = processedContent.toString();

  return {
    content: contentHtml,
    // @ts-ignore
    data: {
      slug,
      ...data
    },
  };
}
