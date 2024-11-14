import * as path from "node:path";
import { readdir } from "node:fs/promises";
import { PostSummary } from "@/entity/Post";

export const extractPostMetadata = async (
  filename: string,
): Promise<PostSummary | null> => {
  const id = filename.substring(0, filename.lastIndexOf(".")) || filename;
  const file = await import(`@/content/posts/${id}.mdx`);

  if (file.metadata) {
    // format date
    const pubDate = new Date(file.metadata.pubDate);
    const formattedPubDate = pubDate.toLocaleDateString("ar-AE");
    const cover = `/blog/${id}/${file.metadata.cover}`;
    return { ...file.metadata, pubDate, formattedPubDate, cover, id };
  }

  return Promise.reject(`Unable to find metadata in file ${filename}`);
};

export const getBlogPostList = async (): Promise<PostSummary[]> => {
  const contentDir = path.resolve("content/posts");
  const dir = await readdir(contentDir, { encoding: "utf-8" });

  let posts: PostSummary[] = [];
  for (const file of dir) {
    const post = await extractPostMetadata(file);
    if (post) {
      posts.push(post);
    }
  }

  posts = posts.sort((a, b) => {
    return b.pubDate.getTime() - a.pubDate.getTime();
  });

  return posts;
};

export type RssEntry = {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  author?: string;
  guid?: string;
};

export function generateRss({
  description,
  entries,
  link,
  title,
}: {
  title: string;
  description: string;
  link: string;
  entries: RssEntry[];
}): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${title}</title>
    <description>${description}</description>
    <link>${link}</link>
    <language>ar-EG</language>
    <ttl>60</ttl>
    <atom:link href="https://dasfmi.com/feed.xml" rel="self" type="application/rss+xml" />
    ${entries
      .map(
        (entry) => `
      <item>
        <title><![CDATA[${entry.title}]]></title>
        <description><![CDATA[${entry.description}]]></description>
        <pubDate>${entry.pubDate}</pubDate>
        <link>${entry.link}</link>
        ${entry.guid ? `<guid isPermaLink="false">${entry.guid}</guid>` : ""}
      </item>`,
      )
      .join("")}
  </channel>
</rss>`;
}
