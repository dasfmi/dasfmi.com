import { BookmarkLink } from "@/entity/Bookmark";

export const BookmarkItem = ({ link }: { link: BookmarkLink }) => {
  return (
    <div className="flex flex-col py-2 border-b border-gray-600 gap-2 w-full">
      <div className="flex flex-row gap-3 items-center">
        <h4 className="text-gray-200">{link.name}</h4>
        <a
          href={link.url}
          className="text-gray-400 text-xs w-1/4 line-clamp-1"
          target="_blank"
          rel="noreferrer"
        >
          {link.url}
        </a>
      </div>
      <p className="text-sm line-clamp-2">{link.description}</p>
    </div>
  );
};
