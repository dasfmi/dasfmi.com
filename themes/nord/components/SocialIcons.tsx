import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import styles from "./SocialIcons.module.css";

export function SocialIcons() {
  return (
    <div className="flex flex-row lg:flex-col gap-6 items-center mt-8">
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
    </div>
  );
}
