import styles from "./style.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export function SignInButton() {
  const isLog = true;
  return isLog ? (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#04d361" />
      hugo alves varella
      <FiX className={styles.closeIcon} />
    </button>
  ) : (
    <button type="button" className={styles.signInButton}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
