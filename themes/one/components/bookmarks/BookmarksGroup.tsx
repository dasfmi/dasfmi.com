import { BookmarkGroup } from "@/entity/Bookmark";
import { BookmarkItem } from "./BookmarkItem";

export const BookmarkGroupRenderer = ({
  name,
  color,
  links,
}: BookmarkGroup) => {
  const cls = `w-1/3 mt-2 text-green-200 text-purple-200 text-orange-200 text-blue-200 text-gray-200 !text-${color}-200`;

  return (
    <section className="flex flex-col lg:flex-row gap-4">
      <p className={cls}>{name}</p>
      <div className="flex flex-col gap-3 w-full">
        {links.length &&
          links.map((link) => <BookmarkItem key={link.name} link={link} />)}
      </div>
    </section>
  );
};
