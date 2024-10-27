import { GithubIcon, LinkedinIcon, MailIcon, MapPinIcon } from "lucide-react";
import styles from "./SocialIcons.module.css";

export function SocialIcons() {
  return (
    <div className="flex gap-3 items-center mt-8">
      <a href="mailto:me@dasfmi.com" className={styles.socialIcon}>
        <MailIcon />
      </a>
      <a
        href="https://linkedin.com/in/dasfmi"
        target="_blank"
        rel="noreferrer"
        className={styles.socialIcon}
      >
        <LinkedinIcon />
      </a>
      <a
        href="https://github.com/dasfmi"
        target="_blank"
        rel="noreferrer"
        className={styles.socialIcon}
      >
        <GithubIcon />
      </a>
      |
      <div className="text-base dark:text-neutral-400 inline-flex items-center gap-2">
        <span className="">
          <MapPinIcon className="w-4 h-4" />
        </span>{" "}
        القاهرة، مصر
      </div>
    </div>
  );
}
