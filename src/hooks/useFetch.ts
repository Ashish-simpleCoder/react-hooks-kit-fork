import { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";

interface UseFetchResponse<TData> {
  data: TData | null;
  isLoading: boolean;
  error: Error | null;
}

export const useFetch = <TData = unknown>(
  url: string,
  headers?: Record<string, string>
): UseFetchResponse<TData> => {
  const [data, setData] = useState<TData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response: AxiosResponse<TData> = await axios.get(url, { headers });
      const data = response.data as TData;
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
