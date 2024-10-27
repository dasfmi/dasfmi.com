import { PostSummary } from "@/entity/Post";
import { FeaturedPostCard, PostCard } from "./components/blog/BlogPostCard";

type Props = {
    posts: PostSummary[];
}

export function BlogIndexPage({ posts }: Props) {

  return (
    <section className="container">
      <h1 className="page-title">المدونة</h1>
      <FeaturedPostCard post={posts[0]} />
      <h2 className="font-medium text-xl mt-12">أخر المقالات</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        {posts.slice(1).map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
