export type PostMetadata = {
  title: string;
  description: string;
  cover: string;
  pubDate: Date;
  // formattedPubDate: string;
  // slug: string;
  draft: boolean;
  tags: string[];
};

export type PostSummary = PostMetadata & {
  id: string;
  pubDate: Date;
  formattedPubDate: string;
};
