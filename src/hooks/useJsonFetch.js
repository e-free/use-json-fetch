import { useState, useEffect, useRef } from 'react';

function useJsonFetch(url, options) {
  const timestampRef = useRef();
  const [data, setData] = useState(options);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const timestamp = Date.now();
      timestampRef.current = timestamp;
      setLoading(true);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(response.statusText);
        } if (timestampRef.current === timestamp) {
          const data = await response.json();
          setData(data);
        }

        setError(null);

      } catch (event) {
        setError(event);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, [url])

  return [{ data, isLoading, hasError }];
}

export default useJsonFetch