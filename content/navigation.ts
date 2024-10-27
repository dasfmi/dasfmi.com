import ar from "@/locales/ar";

export type NavigationItem = {
  name: keyof typeof ar.nav;
  path: string;
};

export const nav: NavigationItem[] = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "contact",
    path: "/contact",
  },
  {
    name: "blog",
    path: "/blog",
  },
];
