import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

interface UseFetchResponse<T> {
  data: T | null;
  isLoading: boolean;
  error: Error | null;
}

export const useFetch = <T>(
  url: string,
  headers?: Record<string, string>
): UseFetchResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response: AxiosResponse<T> = await axios.get(url, { headers });
      const data = response.data;
      setData(data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading, error };
};
