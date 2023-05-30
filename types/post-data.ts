type PostData = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: {
    name: string;
    picture: string;
  },
  slug: string;
}

export default PostData;
