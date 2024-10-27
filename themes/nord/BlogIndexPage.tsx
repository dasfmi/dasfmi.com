import { PostSummary } from "@/entity/Post";
import ar from "@/locales/ar";
import Link from "next/link";

const PostEntry = ({ post }: { post: PostSummary }) => {
  return (
    <div className="flex gap-4 items-center">
      <div className="flex flex-col">
        <span className="text-alt text-sm">{post.formattedPubDate}</span>
        <h2 className="text-lg font-medium">
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </h2>
        <p className="text-alt line-clamp-2 lg:w-1/2 mt-2">
          {post.description}
        </p>
      </div>
    </div>
  );
};

export const BlogIndexPage = ({ posts }: { posts: PostSummary[] }) => {
  return (
    <section className="container">
      <h1 className="page-title">
        {ar.nav.blog} / {ar.blog.latest}
      </h1>
      <div className="flex flex-col gap-12 mt-8">
        {posts.slice(1).map((post) => (
          <PostEntry key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};
