import { useState, useEffect } from 'react';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function useFetchAccomodations(url, [accomodations, setAccomodations]) {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;

    setLoading(true);

    async function fetchAccomodations() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setAccomodations(data);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        // Simulate API call delay for loader visualization
        await sleep(2000);
        setLoading(false);
      }
    }

    setLoading(true);

    fetchAccomodations();
  }, [url]);

  return { isLoading, error };
}
