import styles from "./style.module.scss";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

export function SignInButton() {
  const isLog = true;
  return isLog ? (
    <button className={styles.signInButton} onClick={() => {}}>
      <FaGithub color="#04b301" />
      Hugo Alves Varella
      <FiX className={styles.closeIcon} />
    </button>
  ) : (
    <button className={styles.signInButton} onClick={() => {}}>
      <FaGithub color="#eba417" />
      Sign in with Github
    </button>
  );
}
