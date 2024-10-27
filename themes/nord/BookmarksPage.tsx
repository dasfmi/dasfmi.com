import { BookmarkGroup } from "@/entity/Bookmark";

export const BookmarksPage = ({
  bookmarks,
}: {
  bookmarks: BookmarkGroup[];
}) => {
  return (
    <div>
      {bookmarks.map((bm, index) => (
        <div key={index}>{bm.name}</div>
      ))}
    </div>
  );
};
