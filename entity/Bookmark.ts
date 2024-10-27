export type BookmarkLink = {
  name: string;
  url: string;
  description: string;
};

export type BookmarkGroup = {
  name: string;
  color: string;
  links: BookmarkLink[];
};
