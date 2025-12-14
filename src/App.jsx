import { useEffect, useState } from "react";
import { PodcastProvider } from "./context/PodcastContext";
import { fetchPodcasts } from "./api/fetchPodcasts";
import { genreData } from "./data";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SortSelect from "./components/SortSelect";
import GenreFilter from "./components/GenreFilter";
import PodcastGrid from "./components/PodcastGrid";
import Pagination from "./components/Pagination";
import styles from "./App.module.css";

/**
 * Root component of the Podcast Explorer app.
 * Handles data fetching and layout composition.
 */
export default function App() {
  const [podcastList, setPodcastList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    fetchPodcasts(setPodcastList, setFetchError, setIsLoading);
  }, []);

  return (
    <>
      <Header />

      <PodcastProvider initialPodcasts={podcastList}>
        <main className={styles.main}>
          <div className={styles.content}>
            <section className={styles.controls}>
              <SearchBar />
              <GenreFilter genres={genreData} />
              <SortSelect />
            </section>

            {isLoading && (
              <div className={styles.messageContainer}>
                <div className={styles.spinner}></div>
                <p>Loading podcasts...</p>
              </div>
            )}

            {fetchError && (
              <div className={styles.message}>
                <div className={styles.error}>
                  Error occurred while fetching podcasts: {fetchError}
                </div>
              </div>
            )}

            {!isLoading && !fetchError && <PodcastGrid genres={genreData} />}
          </div>
          {!isLoading && !fetchError && <Pagination />}
        </main>
      </PodcastProvider>
    </>
  );
}
