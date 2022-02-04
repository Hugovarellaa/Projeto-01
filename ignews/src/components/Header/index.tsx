import styles from "./style.module.scss";

export function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img src="/images/logo.svg" alt="logo igneews" />
        <nav>
          <a href="" className={styles.active}>
            Home
          </a>
          <a href="">Post</a>
        </nav>
        {/* button de login */}
      </div>
    </header>
  );
}
