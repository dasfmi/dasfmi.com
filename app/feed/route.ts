import { generateRss, getBlogPostList } from "@/services/blog.service";

export const revalidate = 60;

export async function GET() {
  const posts = await getBlogPostList();

  const feed = generateRss({
    title: "إسلام شحاته",
    description: "صانع ومطور برمجيات وتطبيقات الويب",
    link: "https://dasfmi.com",
    entries: posts.map((post) => ({
      title: post.title,
      description: post.description,
      link: `https://dasfmi.com/blog/${post.id}`,
      pubDate: new Date(post.pubDate).toUTCString(),
      guid: post.id,
    })),
  });

  return new Response(feed, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=2419200",
    },
  });
}
