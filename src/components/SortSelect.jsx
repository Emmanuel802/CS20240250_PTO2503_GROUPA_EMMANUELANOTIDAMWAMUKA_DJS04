import { useContext } from "react";
import { SORTING_CHOICES, PodcastContext } from "../context/PodcastContext";
import styles from "./SortSelect.module.css";

/**
 * Dropdown for choosing sort order.
 */
export default function SortSelect() {
  const { sortKey, setSortKey } = useContext(PodcastContext);

  return (
    <select
      className={styles.select}
      value={sortKey}
      onChange={(e) => setSortKey(e.target.value)}
    >
      {SORTING_CHOICES.map((choice) => (
        <option key={choice.key} value={choice.key}>
          {choice.label}
        </option>
      ))}
    </select>
  );
}
