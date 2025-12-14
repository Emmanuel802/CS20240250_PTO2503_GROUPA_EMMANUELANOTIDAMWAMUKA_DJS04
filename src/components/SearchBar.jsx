import { useState, useEffect, useContext } from "react";
import { PodcastContext } from "../context/PodcastContext";
import styles from "./SearchBar.module.css";

/**
 * Search input with debounced update.
 */
export default function SearchBar() {
  const { search, setSearch } = useContext(PodcastContext);
  const [inputValue, setInputValue] = useState(search);

  // Debounce input (300ms) to avoid rapid updates.
  useEffect(() => {
    const timer = setTimeout(() => setSearch(inputValue), 300);
    return () => clearTimeout(timer);
  }, [inputValue, setSearch]);

  return (
    <input
      type="search"
      placeholder="Search podcasts…"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      className={styles.searchInput}
    />
  );
}
