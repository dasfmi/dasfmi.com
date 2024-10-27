import { PostSummary } from "@/entity/Post";
import React, { ComponentType } from "react";


type Props = {
  Content: ComponentType;
  metadata: PostSummary;
};


export function BlogPostPage({ Content, metadata }: Props) {
  return (
    <div className="container py-12">
      <article>
        <p className="text-sm text-muted">{metadata.formattedPubDate}</p>
        <h1 className="text-xl xl:text-2xl leading-loose font-bold">
          {metadata.title}
        </h1>
        <p className="text-muted">{metadata.description}</p>
        <img
          src={metadata.cover}
          width={600}
          height={400}
          alt=""
          className="mt-6 shadow-lg"
        />
        <section className="prose lg:prose-lg dark:prose-inverse mt-10">
          <Content />
        </section>
      </article>
    </div>
  );
}
