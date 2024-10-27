import { RssIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 mt-24 text-neutral-400 border-t border-gray-700">
      <div className="flex flex-col gap-12 lg:flex-row container lg:justify-evenly  py-12">
        <section className="lg:w-1/3">
          <h4 className="text-white leading-relaxed text-lg">
            أهلاً، أنا إسلام!
          </h4>
          <p className="mt-4">
            مطور تطبيقات الويب حول العالم، متخصص في React و Node.js.
          </p>
        </section>
        <section className="lg:w-1/3">
          <h4 className="text-lg text-neutral-500">تصفح</h4>
          <ul className="flex flex-col gap-3 mt-4">
            <Link href="/blog">المدونة</Link>
            <Link href="/services">الخدمات</Link>
            <Link href="/projects">المشروعات</Link>
          </ul>
        </section>
        <section className="flex gap-3">
          <a href="/feed.xml">
            <RssIcon className="h-6 w-6 text-orange-300 hover:dark:text-white hover:text-orange-400" />
          </a>
        </section>
      </div>
    </footer>
  );
}
