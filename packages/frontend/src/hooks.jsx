import { useEffect, useState } from "react";

export function useFetch(url, fetchOptions, wait) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function fire() {
    fetchData();
  }

  useEffect(() => {
    if (wait) return;

    const abortController = new AbortController();
    fetchData(abortController);
    return () => {
      abortController.abort();
    };
  }, []);

  return { data, error, loading, fire };

  async function fetchData(abortController) {
    try {
      setLoading(true);

      const fetchedData = await getRequest(url, {
        ...fetchOptions,
        signal: abortController?.signal,
      });
      setData(fetchedData);
      setError(null);
    } catch (err) {
      if (err.name === "AbortError") {
        console.log("fetch aborted");
      } else {
        setError(err);
        setData(null);
      }
    } finally {
      setLoading(false);
    }
  }
}
async function getRequest(...args) {
  const response = await fetch(...args);

  if (!response.ok) {
    return response.text().then((text) => {
      throw new Error(text);
    });
  }

  return response.json();
}
