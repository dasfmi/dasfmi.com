import { getBlogPostList } from "@/services/blog.service";
import { PostCard } from "./components/blog/BlogPostCard";
import ar from "@/locales/ar";
import ServicesSection from "./components/ServicesSection";
import Hero from "./components/Hero";

export const HomePage = async () => {
    return (
        <div>
          <Hero />
          <ServicesSection />
          <LatestPosts />
        </div>
  );
}

const LatestPosts = async () => {
    const posts = await getBlogPostList();
  
    return (
      <section className="container">
        <h2 className="page-title">{ar.home.latestPosts}</h2>
        <div className="grid xl:grid-cols-3 gap-6 mt-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    );
  };