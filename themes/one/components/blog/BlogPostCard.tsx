import { PostSummary } from "@/entity/Post";
import Link from "next/link";

export const FeaturedPostCard = ({ post }: { post: PostSummary }) => {
  return (
    <div className="flex flex-col lg:col-span-3 mt-12">
      <div className="flex flex-col w-full items-start">
        <div className="flex mt-4 text-xs text-neutral-400 items-center gap-2">
          <img
            src="/img/islam-shehata.webp"
            className="rounded-full w-4"
            alt="author avatar"
          />
          إسلام شحاته - <p className="">{post.formattedPubDate}</p>
        </div>
        <h2 className="text-neutral-900 dark:text-neutral-300 hover:dark:text-neutral-100 text-2xl font-semibold leading-relaxed line-clamp-2 mt-2">
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </h2>
        <p className="line-clamp-3 text-base mt-2 text-neutral-500">
          {post.description}
        </p>
        <span className="flex -1" />
      </div>
      <div className="w-full max-h-[960px] h-[600px] min-h-[240px] flex mt-6">
        <div
          className="w-full h-full bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: `url(${post.cover})` }}
        />
      </div>
    </div>
  );
};

export const PostCard = ({ post }: { post: PostSummary }) => {
  const pubDate = post.formattedPubDate;

  return (
    <div className="flex lg:flex-col h-full">
      <div className="h-40 lg:min-h-60 lg:max-h-60 lg:w-full  bg-gray-100 border border-gray-200 dark:border-neutral-700 dark:bg-gray-800">
        <div
          className="w-full h-full bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${post.cover})` }}
        />
      </div>
      <div className="flex flex-col py-4 w-full items-start h-full">
        <div className="flex mt-4 text-xs text-neutral-400 items-center gap-2">
          <img
            src="/img/islam-shehata.webp"
            className="rounded-full w-4"
            alt="author avatar"
          />
          إسلام شحاته - <p className="">{pubDate}</p>
        </div>
        <h2 className="text-neutral-900 mt-2 dark:text-neutral-300 hover:dark:text-neutral-100 text-lg leading-7 line-clamp-2 font-semibold">
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </h2>
        <p className="line-clamp-3 text-xs mt-2 text-neutral-500">
          {post.description}
        </p>
        <span className="flex-1" />
        <section className="flex gap-2 items-center mt-4">
          {post.tags &&
            post.tags.slice(0, 4).map((tag) => (
              <div
                key={tag}
                className="text-xs p-1.5 bg-neutral-100 text-neutral-500"
              >
                {tag}
              </div>
            ))}
        </section>
      </div>
    </div>
  );
};
