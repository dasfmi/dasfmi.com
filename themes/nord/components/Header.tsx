import { nav, type NavigationItem } from "@/content/navigation";
import ar from "@/locales/ar";
import Link from "next/link";

const NavItem = ({ item }: { item: NavigationItem }) => {
  return (
    <Link key={item.path} href={item.path}>
      {ar.nav[item.name]}
    </Link>
  );
};

const Header = () => {
  return (
    <header className="">
      <nav className="container flex py-4 gap-3 w-full ">
        {nav.map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
        <span className="flex-1" />
        <Link
          href="/"
          className="text-muted text-left hover:underline"
          dir="ltr"
        >
          <span className="text-sm">@</span>dasfmi
        </Link>
      </nav>
    </header>
  );
};

export default Header;
