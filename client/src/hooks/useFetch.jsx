import { useState } from "react";
import { jsonOptions } from "../const";

export default function useFetch(method = "get") {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fire(route, options) {
    setIsLoading(true);
    try {
      const fetchOptions =
        method !== "get"
          ? {
              ...jsonOptions(method),
              ...options,
            }
          : options;
      const response = await fetch(
        import.meta.env.VITE_API_URL + route,
        fetchOptions,
      );
      const result = await response.json();

      // http error
      if (response.ok || response.status === 401) {
        setData(result);
      } else {
        setError(
          `${response.status} (${response.statusText}): ${result.error}`,
        );
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return { data, error, isLoading, fire };
}
