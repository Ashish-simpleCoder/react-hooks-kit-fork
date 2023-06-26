import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { UseFetchResponse } from "./interface";

export const useFetch = <TData = unknown>(): UseFetchResponse<TData> => {
  const [data, setData] = useState<TData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (url: string, headers?: Record<string, string>) => {
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

  return { data, isLoading, error, fetchData };
};
