import PodcastCard from "./PodcastCard";
import { PodcastContext } from "../context/PodcastContext";
import styles from "./PodcastGrid.module.css";
import { useContext } from "react";

/**
 * PodcastGrid component that renders a grid of podcast cards or a no results message.
 * @param {Object} props - Component props
 * @param {{id: number, title: string}[]} props.genres - Array of genre definitions
 * @returns {JSX.Element} The grid or no results message.
 */
export default function PodcastGrid({ genres }) {
  const { podcasts } = useContext(PodcastContext);
  if (!podcasts.length) {
    return (
      <p className={styles.noResults}>
        No podcasts match your search or filters.
      </p>
    );
  }
  return (
    <div className={styles.grid}>
      {podcasts.map((podcast) => (
        <PodcastCard key={podcast.id} podcast={podcast} genres={genres} />
      ))}
    </div>
  );
}
