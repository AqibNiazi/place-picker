import { useEffect, useState } from "react";
export const useFetch = (fetchFn, initialValue) => {
  const [error, setError] = useState();
  const [isFetching, setIsFetching] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);
  useEffect(() => {
    async function fetchingData() {
      setIsFetching(true);
      try {
        const places = await fetchFn();

        setFetchedData(places);
      } catch (error) {
        setError({
          message: error.message || "Failed to fetch user places",
        });
      }
      setIsFetching(false);
    }
    fetchingData();
  }, []);

  return { fetchedData, isFetching, error, setFetchedData };
};
