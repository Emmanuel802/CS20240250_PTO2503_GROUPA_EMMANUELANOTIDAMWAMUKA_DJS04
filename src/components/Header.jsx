import styles from "./Header.module.css";

/**
 * Header component that displays the application title.
 * @returns {JSX.Element} The header element with the podcast app title.
 */
export default function Header() {
  return (
    <header className={styles.appHeader}>
      <h1>🎙️ Podcast App</h1>
    </header>
  );
}
