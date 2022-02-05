import { SignInButton } from "../SignInButton";
import styles from "./styles.module.scss";
import Link from "next/link";

import { ArchiveLink } from "../ArchiveLink";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <Link href="/" passHref>
          <a>
            <img src="/images/logo.svg" alt="logo igneews" />
          </a>
        </Link>
        <nav>
          <ArchiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ArchiveLink>
          <ArchiveLink href="/posts" activeClassName={styles.active}>
            <a>Post</a>
          </ArchiveLink>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
