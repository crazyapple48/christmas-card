import styles from "./Poetry.module.css";

export default function Poetry({ poetryLine }) {
  return <p className={styles.poetry}>{poetryLine}</p>;
}
