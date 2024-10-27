import { extractPostMetadata } from "@/services/blog.service";
import { BlogPostPage } from "@/themes/one/BlogPost";
import { Metadata } from "next";
import dynamic from "next/dynamic";
import { readdir } from "node:fs/promises";
import path from "path";

export async function generateStaticParams() {
  const contentDir = path.resolve("content/posts");
  const blogPosts = await readdir(contentDir, { encoding: "utf-8" });
  console.log({ blogPosts });
  return blogPosts.map((post) => ({
    postId: post.substring(0, post.lastIndexOf(".")),
  }));
}

type props = {
  params: Promise<{ postId: string }>;
};

export async function generateMetadata({ params }: props): Promise<Metadata> {
  const { postId } = await params;
  //Load the blog post metadata using blog_functions.ts
  const metadata = await extractPostMetadata(postId);
  if (metadata) {
    return {
      title: metadata.title,
      description: metadata.description,
      openGraph: {
        url: `https://www.dasfmi.com/blog/${postId}`,
        images: [
          {
            url: `https://www.dasfmi.com/blog/${postId}/${metadata.cover}`,
            width: 800,
            height: 600,
            alt: metadata.title,
          },
        ],
      },
    };
  }
  return {}; //Default return.
}

export default async function Post({ params }: props) {
  const { postId } = await params;
  const BlogPost = dynamic(() => import(`@/content/posts/${postId}.mdx`));
  const metadata = await extractPostMetadata(postId);

  return <BlogPostPage metadata={metadata!} Content={BlogPost} />;
}
