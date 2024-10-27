import { BookmarkGroup } from "@/entity/Bookmark";
import { BookmarksPage } from "@/theme";
import { Metadata } from "next";

const title = "روابط | إسلام";

export const metadata: Metadata = {
  title: title,
  description:
    "As a heavy internet user, I have been gathering useful content along the years from the internet, here is a list of the links I liked",
};

async function loadBookmarks(): Promise<BookmarkGroup[]> {
  const bookmarks: BookmarkGroup[] = [
    {
      name: "Software Engineering",
      color: "purple",
      links: [
        {
          name: "Path to senior engineering handbook",
          url: "https://github.com/jordan-cutler/path-to-senior-engineer-handbook",
          description: "A great guide to move from mid to senior",
        },
      ],
    },
    {
      name: "مدونات شخصية",
      color: "green",
      links: [
        {
          name: "عبدالله المهيري",
          url: "https://smallpages.blog",
          description: "استمتع بكتابات عبدالله منذ أن كنت صغيراً",
        },
        {
          name: "Max Schmitt",
          url: "https://maxschmitt.me/",
          description: "inspired by his website design",
        },
      ],
    },
    {
      name: "عام",
      color: "blue",
      links: [
        {
          name: "ثمانية",
          url: "https://thmanyah.com/",
          description: "مجموعة رائعة من المحتوى العربي الثري",
        },
      ],
    },
    {
      name: "أدوات",
      color: "pink",
      links: [
        {
          name: "Pexels",
          url: "https://www.pexels.com/",
          description: "موقع للصور المجانية",
        },
      ],
    },
  ];

  return bookmarks;
}

export default async function Bookmarks() {
  const groups = await loadBookmarks();

  return <BookmarksPage bookmarks={groups} />;
}
