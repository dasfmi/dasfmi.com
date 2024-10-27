import Link from "next/link";
import styles from "./HireMeButton.module.css";

export default function HireMeButton() {
  return (
    <Link href="/hireme" className={styles.buttonBackground}>
      <span className="z-20 absolute top-[1px] left-[1px] bottom-[1px] right-[1px] bg-black items-center py-2 px-4 hover:bg-neutral-800 rounded-xl text-center">
        لنعمل سوياً
      </span>
    </Link>
  );
}
