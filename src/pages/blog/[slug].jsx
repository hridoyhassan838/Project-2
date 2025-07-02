import SeoHead from "..../components/SeoHead";

export default function BlogPost({ post }) {
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
