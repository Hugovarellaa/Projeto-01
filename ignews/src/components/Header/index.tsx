import Link from "next/link";
import { SignInButton } from "../SignInButton";
import styles from "./style.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <a>
            <img src="/images/logo.svg" alt="logo ignews" />
          </a>
        </Link>
        <nav>
          <a href="#">Home</a>
          <a href="#" className={styles.active}>
            Posts
          </a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
