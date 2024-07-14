import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { AxiosRequestConfig, CanceledError } from 'axios';

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dependencies?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setData([]);
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
      .then(res => setData(res.data.results))
      .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, dependencies ?? []);

  return { data, error, isLoading };
};

export default useData;
