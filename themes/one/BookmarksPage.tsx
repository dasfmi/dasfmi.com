import { BookmarkGroup } from "@/entity/Bookmark";
import { BookmarkGroupRenderer } from "./components/bookmarks/BookmarksGroup";

type Props = {
    bookmarks: BookmarkGroup[];
}
export function BookmarksPage({ bookmarks: groups }: Props) {
    return (
      <div className="container mx-auto">
        <h1 className="page-title">Bookmarks</h1>
        <p>Here are some of the bookmarks I have saved over time</p>
        <div className="flex flex-col gap-8 mt-8">
          {groups.map((group) => (
            <BookmarkGroupRenderer
              key={group.name}
              name={group.name}
              color={group.color}
              links={group.links}
            />
          ))}
        </div>
      </div>
    );
  }