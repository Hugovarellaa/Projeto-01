import { SignInButton } from "../SignInButton";
import styles from "./style.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="logo ignews" />
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
