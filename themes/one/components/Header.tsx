"use client";
import Link from "next/link";
import lang from "@/locales/ar";
import styles from "./Header.module.css";
import {
  MenuButton,
  CloseMenuButton,
} from "@/themes/one/components/MenuButton";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="py-4 lg:py-8 text-base">
      <div className="container flex items-center">
        <MenuButton />

        <Link
          href="/"
          className={`${styles.item} ${pathname === "/" ? "active" : ""}`}
        >
          {lang.nav.home}
        </Link>
        <Link href="/services" className={styles.item}>
          <span>الخدمات</span>
        </Link>
        <Link href="/bookmarks" className={styles.item}>
          <span>الروابط</span>
        </Link>

        <Link href="/projects" className={styles.item}>
          <span>المشروعات</span>
        </Link>

        <Link href="/hireme" className={styles.item}>
          <span>لنعمل سوياً</span>
        </Link>

        <Link
          href="/blog"
          className={`${styles.item} ${pathname.startsWith("/blog") ? "activeLink" : ""}`}
        >
          المدونة
        </Link>

        <span className="flex-1" />

        <Link
          href="/"
          className="text-lg text-left text-alt hover:text-black dark:!text-white hover:underline !decoration-gray-500 hover:!decoration-white font-mono"
          dir="ltr"
        >
          @dasfmi
        </Link>

        <nav className="menu hidden flex-col gap-4 h-screen z-10 absolute top-0 bg-black w-full px-4 py-12">
          <Link
            href="/"
            className="!text-white !decoration-gray-500 hover:!decoration-white"
          >
            إسلام
          </Link>
          <Link href="/" className="text-neutral-400 hover:text-white">
            Home
          </Link>
          <Link href="/services" className="text-neutral-400 hover:text-white">
            Services
          </Link>
          <Link href="/bookmarks" className="text-neutral-400 hover:text-white">
            Bookmarks
          </Link>
          <Link href="/projects" className="text-neutral-400 hover:text-white">
            Projects
          </Link>
          <Link href="/hireme" className="text-gray-400 hover:text-white">
            Hire me!
          </Link>
          <Link href="/blog" className="text-gray-400 hover:text-white">
            المدونة
          </Link>
          <button className="place-self-center mt-24">
            <CloseMenuButton />
          </button>
        </nav>
      </div>
    </header>
  );
};
