/**
 * @function fetchPodcasts
 * Asynchronously fetches podcast data from the remote API and updates state accordingly.
 * Handles loading, error, and successful data response via provided state setters.
 *
 * @param {Function} setPodcasts - State setter function to update the podcasts array.
 * @param {Function} setError - State setter function to update the error message (string).
 * @param {Function} setLoading - State setter function to toggle the loading state (boolean).
 *
 * @returns {Promise<void>} A promise that resolves when the fetch process completes.
 *
 **/
export async function fetchPodcasts(setPodcasts, setError, setLoading) {
  try {
    const response = await fetch("https://podcast-api.netlify.app/shows");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const jsonData = await response.json();
    setPodcasts(jsonData);
  } catch (error) {
    console.error("Error fetching podcasts:", error);
    setError(error.message);
  } finally {
    setLoading(false);
  }
}
