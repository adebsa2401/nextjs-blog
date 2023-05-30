type Post = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: {
    name: string;
    picture: string;
  },
  slug: string;
  content?: string;
}

export default Post;
