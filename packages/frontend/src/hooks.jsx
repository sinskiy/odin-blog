import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchData() {
      try {
        const fetchedData = await getRequest(url, {
          signal: abortController.signal,
        });
        setData(fetchedData);
        setError(null);
      } catch (err) {
        setError(err);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
    return () => {
      abortController.abort();
    };
  }, []);

  return { data, error, loading };
}
async function getRequest(...fetchOptions) {
  const response = await fetch(...fetchOptions);

  if (!response.ok) {
    throw new Error(`HTTP error: Status ${response.status}`);
  }

  return response.json();
}
