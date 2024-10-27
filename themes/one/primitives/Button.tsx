import Link from "next/link";

export type Props = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "tertiary";
};

export default function Button({ children, href, variant }: Props) {
  const cls =
    variant === "primary"
      ? "btn-primary"
      : "bg-neutral-50 hover:bg-neutral-300";

  if (href) {
    return (
      <Link
        href={href}
        className="py-2 px-4 lg:px-8 min-w-32 border rounded-xl text-center flex items-center bg-neutral-50 hover:bg-neutral-300 shadow-sm"
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={`${cls} py-2 px-6 lg:px-8 min-w-32 border rounded-lg text-center flex items-center shadow-sm`}
    >
      {children}
    </button>
  );
}
