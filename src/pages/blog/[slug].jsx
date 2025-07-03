import { useRouter } from "next/router";
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

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  // যদি slug পাওয়া যায়, তাহলে posts থেকে মেলানো পোস্ট খোঁজা
  const post = posts.find((p) => p.slug === slug);

  // যদি পোস্ট না পাওয়া যায় বা পেজ এখনও লোড হচ্ছে
  if (!post) {
    return <p>Loading or Post not found...</p>;
  }

  return (
    <>
      <SeoHead
        title={`${post.title} - One New World`}
        description={post.excerpt}
        keywords={post.tags.join(", ")}
      />
      <article>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </article>
    </>
  );
}
