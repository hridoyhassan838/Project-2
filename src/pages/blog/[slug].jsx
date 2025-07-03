// pages/blog/[slug].jsx

import SeoHead from "../../components/SeoHead";

const posts = [
  {
    slug: "first-post",
    title: "My First Post",
    excerpt: "This is the excerpt of the first post.",
    content: "This is the full content of the first post.",
    tags: ["first", "blog", "example"],
  },
  {
    slug: "second-post",
    title: "Another Blog Post",
    excerpt: "This is the excerpt of the second post.",
    content: "This is the full content of the second post.",
    tags: ["second", "blog"],
  },
];

export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false, // কোনো slug না মিলে 404 দেখাবে
  };
}

export async function getStaticProps({ params }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: { post },
  };
}

export default function BlogPost({ post }) {
  return (
    <>
      <SeoHead
        title={`${post.title} - One New World`}
        description={post.excerpt}
        keywords={post.tags.join(", ")}
      />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700">{post.content}</p>
      </main>
    </>
  );
}
