import { getBlogPostList } from "@/services/blog.service";
import { BlogIndexPage } from "@/theme";
import { Metadata } from "next";

const title = "خواطر | إسلام";

export const metadata: Metadata = {
  title: title,
  description: "خواطري الفكرية مسرودة بطريقة غير منظمة وفي مجالات مختلفة",
};

export default async function BlogIndex() {
  const posts = await getBlogPostList();

  return <BlogIndexPage posts={posts} />;
}
