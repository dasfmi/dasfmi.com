import ar from "@/locales/ar";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="container flex gap-6 text-alt py-12">
      <p>{ar.footer.copyrights}</p>
      <span className="flex-1" />
      <Link href="/blog" className="text-alt">
        {ar.nav.blog}
      </Link>
      <Link href="/contact" className="text-alt">
        {ar.nav.contact}
      </Link>
    </footer>
  );
};

export default Footer;
